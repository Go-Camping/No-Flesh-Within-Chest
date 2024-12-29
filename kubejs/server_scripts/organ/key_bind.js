// priority: 500
NetworkEvents.dataReceived('ogran_key_pressed', event => {
    let player = event.player
    if (!player) return;
    let coolDowns = player.getCooldowns()
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:key_pressed')) {
        let organList = typeMap.get('kubejs:key_pressed')
        for (let i = 0; i < organList.length; i++) {
            let organ = organList[i]
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                if (!coolDowns.isOnCooldown(Item.of(organ.id))) {
                    organPlayerKeyPressedOnlyStrategies[organ.id](event, organ)
                    break
                }
            }
        }
    }
})

/**
 * 主动策略
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const organPlayerKeyPressedOnlyStrategies = {
    'kubejs:illithids': function (event, organ) {
        let player = event.player
        let particle = Utils.particleOptions(`dust 1 0 0 1`)
        let ray = player.rayTrace(32, false)
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.potionEffects.add('goety:wild_rage', ray.entity.maxHealth > 100 ? 20 * 10 : 20 * 60)
            player.addItemCooldown('kubejs:illithids', 20 * 60)
            event.level.spawnParticles(particle, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
        }
    },
    'kubejs:disenchantment_paper': function (event, organ) {
        let player = event.player
        let item = player.getMainHandItem()
        if (!item || !item.enchanted) {
            return
        }
        let curseList = []
        item.enchantments.forEach((name, level) => {
            if (curseEnchantList.some(ele => ele == name)) {
                curseList.push(name)
            }
        })
        if (curseList.length <= 0) {
            return
        }
        let removedCurse = randomGet(curseList)
        item.nbt.Enchantments = item.nbt.Enchantments.filter(function (item) {
            return item.id != removedCurse
        });
        player.addItemCooldown('kubejs:disenchantment_paper', 20 * 600)
        player.setStatusMessage([Text.lightPurple('祛魔虫'), '吃下了一个', Text.red('诅咒附魔')])
        let count = event.player.persistentData.getInt(warpCount) ?? 0
        updateWarpCount(event.player, count + 5)
    },
    'kubejs:warden_core': function (event, organ) {
        /**@type {Internal.ServerPlayer} */
        let player = event.player
        let ray = player.rayTrace(24, false)
        let distance = ray.distance
        let damageSource = new DamageSource.sonicBoom(player)
        let vec3Nor = player.getLookAngle().normalize()
        let counter = 0
        let getlevel = player.getXpLevel()
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.attack(damageSource, 30 + Math.min(getlevel, 100))
            ray.entity.invulnerableTime = 0
            counter++
        }
        if (ray.block) {
            distance = player.getPosition(1.0).distanceTo(ray.block.pos)
        }
        for (let i = 0; i < distance; i++) {
            let vec3 = vec3Nor.scale(i).add(player.getEyePosition())
            event.level.spawnParticles($ParticleTypes.SONIC_BOOM, false, vec3.x(), vec3.y(), vec3.z(), 0, 0, 0, 1, 0)
            if (i % 2 == 0) {
                let entityInRadius = getLivingWithinRadius(event.level, vec3, 2)
                entityInRadius.forEach(e => {
                    if (!e.isPlayer()) {
                        counter++
                        e.attack(damageSource, 10 + Math.min(getlevel * 0.5, 50))
                        e.invulnerableTime = 0
                    }
                })
            }
        }
        player.addItemCooldown('kubejs:warden_core', Math.max(20 * 60 - counter * 40, 0))
    },
    'kubejs:genesis': function (event, organ) {
        let player = event.player
        if (!player.isCreative()) {
            player.setGameMode('creative')
            player.potionEffects.add('minecraft:glowing', 20 * 10)
            player.addItemCooldown('kubejs:genesis', 20 * 600)
            event.server.scheduleInTicks(20 * 10, ctx => {
                player.setGameMode('survival')
                player.closeMenu()
            })
        }
    },
    'kubejs:lowlight_vision': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        if (count > 60) {
            player.potionEffects.add('minecraft:night_vision', 20 * 240, 0)
            updateResourceCount(player, count - 60)
            player.addItemCooldown('kubejs:lowlight_vision', 20 * 180)
        }
    },
    'kubejs:jet_propeller': function (event, organ) {
        let player = event.player
        let typeMap = getPlayerChestCavityTypeMap(player)
        let count = player.persistentData.getInt(resourceCount)
        let value = 1
        if (typeMap.has('kubejs:resource')) {
            value = typeMap.get('kubejs:resource').length
        }
        let consume = 30 + 10 * value
        if (count > consume) {
            player.potionEffects.add('minecraft:speed', 20 * (value + 5), Math.min(8, Math.floor(value * 0.5)))
            updateResourceCount(player, count - consume)
            player.addItemCooldown('kubejs:jet_propeller', 20 * Math.max(15, 95 - value * 5))
        }
    },
    'kubejs:wither_and_fall': function (event, organ) {
        let player = event.player
        player.setHealth(1)
        if (player.getMaxHealth() < 20) {
            player.absorptionAmount = Math.floor((20 - player.getMaxHealth()) * 2.5)
        }
        else {
            player.giveExperiencePoints(Math.floor(player.getMaxHealth() - 10))
        }
        player.addItemCooldown('kubejs:wither_and_fall', 20 * 90)
    },
    'kubejs:excited_appendix': function (event, organ) {
        let player = event.player
        let itemMap = getPlayerChestCavityItemMap(player);
        let amplifier = Math.max(0, player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'explosive')) * 0.2)
        let duration = Math.max(0, player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'creepy')) * 10)
        let cooldown = 0
        if (itemMap.has('minecraft:gunpowder')) {
            cooldown = cooldown + itemMap.get('minecraft:gunpowder').length * 5
        }
        if (itemMap.has('minecraft:tnt')) {
            cooldown = cooldown + itemMap.get('minecraft:tnt').length * 10
        }
        player.potionEffects.add('goety:explosive', Math.max(60, 20 * duration), Math.max(Math.min(2, Math.floor(amplifier))), false, false)
        player.addItemCooldown('kubejs:excited_appendix', Math.max(20 * 10, 20 * (120 - cooldown)))
    },
    'kubejs:blood_crystal': function (event, organ) {
        let player = event.player
        let harmfulEffects = []
        let beneficialEffects = []
        player.potionEffects.active.forEach(ctx => {
            if (ctx.effect.CC_IsHarmful()) {
                harmfulEffects.push(ctx)
            } else if ((ctx.effect.CC_IsBeneficial())) {
                beneficialEffects.push(ctx)
            }
        })
        if (harmfulEffects.length > 0) {
            harmfulEffects.forEach(ctx => {
                player.removeEffect(ctx.effect)
                player.potionEffects.add(ctx.effect, ctx.getDuration() * 0.5, ctx.getAmplifier() + 1)
            })
        }
        if (beneficialEffects.length > 0) {
            beneficialEffects.forEach(ctx => {
                player.removeEffect(ctx.effect)
                if (ctx.getAmplifier() > 0) {
                    player.potionEffects.add(ctx.effect, Math.min(ctx.getDuration() * 2, 20 * 60 * 3), ctx.getAmplifier() - 1)
                }
            })
        }
        player.addItemCooldown('kubejs:blood_crystal', 20 * 120)
    },
    'kubejs:amethyst_magic_core': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(Math.sqrt(manaCost), 1) + 4
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'magic_arrow'), amplifier, player, false)
        magicData.setMana(0)
        player.addItemCooldown('kubejs:amethyst_magic_core', 20 * 15)
    },
    'kubejs:ice_dragon_bead': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(2 * Math.sqrt(player.getMaxHealth()), 1)
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'cone_of_cold'), amplifier, player, false)
        magicData.setMana(Math.max((manaCost - 500), 0))
        if (manaCost < 500) {
            player.setHealth(Math.max((player.getHealth() - (500 - manaCost) * 0.5), 1))
        }
        player.addItemCooldown('kubejs:ice_dragon_bead', 20 * 30)
    },
    'kubejs:fire_dragon_bead': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(2 * Math.sqrt(player.getMaxHealth()), 1)
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'fire_breath'), amplifier, player, false)
        magicData.setMana(Math.max((manaCost - 500), 0))
        if (manaCost < 500) {
            player.setHealth(Math.max((player.getHealth() - (500 - manaCost) * 0.5), 1))
        }
        player.addItemCooldown('kubejs:fire_dragon_bead', 20 * 30)
    },
    'kubejs:lightning_dragon_bead': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(2 * Math.sqrt(player.getMaxHealth()), 1)
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'electrocute'), amplifier, player, false)
        magicData.setMana(Math.max((manaCost - 500), 0))
        if (manaCost < 500) {
            player.setHealth(Math.max((player.getHealth() - (500 - manaCost) * 0.5), 1))
        }
        player.addItemCooldown('kubejs:lightning_dragon_bead', 20 * 30)
    },
    'kubejs:dragon_blood_heart': function (event, organ) {
        let player = event.player
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        let duration = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'nerves')) * 20
        if (typeMap.has('kubejs:dragon')) {
            let onlySet = new Set()
            typeMap.get('kubejs:dragon').forEach(organ => {
                onlySet.add(organ.id)
            })
            amplifier = onlySet.size - 1
        }
        player.addItemCooldown('kubejs:dragon_blood_heart', 20 * 180)
        player.potionEffects.add('kubejs:dragon_power', Math.max(Math.floor(duration), 0), amplifier, false, false)
    },
    'kubejs:sunbird_crystals': function (event, organ) {
        let player = event.player
        player.potionEffects.add('alexsmobs:sunbird_blessing', 20 * 90, 0, false, false)
        if (player.hasEffect('alexsmobs:sunbird_curse')) {
            player.removeEffect('alexsmobs:sunbird_curse')
        }
        player.addItemCooldown('kubejs:sunbird_crystals', 20 * 90)
    },
    'kubejs:enderiophage_heart': function (event, organ) {
        let player = event.player
        let particle = Utils.particleOptions(`dust 1 0 1 1`)
        let ray = player.rayTrace(32, false)
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.potionEffects.add('alexsmobs:ender_flu', 20 * 5, 0, false, false)
            player.addItemCooldown('kubejs:enderiophage_heart', 20 * 45)
            event.level.spawnParticles(particle, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
        }
    },
    'kubejs:viviparous_crinoidea': function (event, organ) {
        let player = event.player
        let chestInstance = player.getChestCavityInstance()
        let organScoresValue = []
        chestInstance.organScores.forEach((key, value) => {
            organScoresValue.push(value)
        })
        organScoresValue.sort(function () {
            return (0.5 - Math.random())
        })
        chestInstance.organScores.forEach((key, value) => {
            chestInstance.organScores.put(key, new $Float(organScoresValue.pop() + 3))
        })

        event.server.scheduleInTicks(20 * 30, (callback) => {
            chestInstance.containerChanged(chestInstance.inventory)
            global.initChestCavityIntoMap(player, false)
            if (player.persistentData.contains(organActive) &&
                player.persistentData.getInt(organActive) == 1) {
                global.updatePlayerActiveStatus(player)
            }
        })

        player.addItemCooldown('kubejs:viviparous_crinoidea', 20 * 60)
    },
    'kubejs:go_camping': function (event, organ) {
        let player = event.player
        updateWarpCount(player, 0)
        player.addItemCooldown('kubejs:go_camping', 20 * 10)
    },
    'kubejs:potoo_beak': function (event, organ) {
        let player = event.player
        let level = event.level
        let block = player.block.offset(0, -1, 0)
        if (!block) return
        let beakConfig = potooBeakSoundMap[block.material.id]
        if (beakConfig) {
            level.playSound(null, player.getX(), player.getY(), player.getZ(), beakConfig.soundEvent, player.getSoundSource(), beakConfig.minimumVolume, beakConfig.pitch)
            player.addItemCooldown('kubejs:potoo_beak', 20 * 1)
        }
    },
    'kubejs:treasure_detector_feather': function (event, organ) {
        let level = event.level
        let player = event.player
        let randomPosBlock = player.block.offset((0.5 - Math.random()) * 1000, (128 - Math.random() * 32) - player.block.y, (0.5 - Math.random()) * 1000)

        let luck = Math.max(player.getLuck(), 0)
        let table = 'minecraft:chests/stronghold/base'
        let dimLootMap = treasureDetectorTableMap[level.dimensionKey.location()]

        if (dimLootMap) {
            let keys = Object.keys(dimLootMap)
            keys.forEach((a) => parseInt(a))
            keys = keys.sort((a, b) => {
                return a - b
            })
            for (let i = 1; i < keys.length; i++) {
                if (i + 1 >= keys.length) {
                    table = dimLootMap['-1']
                    break
                }
                if (luck < parseInt(keys[i + 1]) && luck >= parseInt(keys[i])) {
                    table = dimLootMap[keys[i]]
                    break
                }
            }
        } else {
            player.tell(Text.translatable("kubejs.msg.treasure_detector_feather.1"))
            return
        }

        for (let i = 0; i < 16; i++) {
            if (!randomPosBlock.blockState.isAir()) {
                if (!randomPosBlock.offset(0, -1, 0).blockState.isAir()) {
                    randomPosBlock = randomPosBlock.offset(0, -4, 0)
                    break
                }
            }
            randomPosBlock = randomPosBlock.offset(0, -4, 0)
        }
        let pos = randomPosBlock.getPos()
        let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
        $MapItem.renderBiomePreviewMap(level, mapItem)
        $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecorationType.RED_X)
        mapItem = mapItem.withName(Text.translatable("map.kubejs.lost_treasure"))
        let placementState = $ModBlocks.CHEST.get().defaultBlockState();
        level.setBlock(pos, placementState, 2)
        $RandomizableContainerBlockEntity.setLootTable(level, level.getRandom(), pos, table)
        player.give(mapItem)
        player.addItemCooldown('kubejs:treasure_detector_feather', 20 * 600)
    },
    'kubejs:knightphantom_ghost': function(event , organ){
        let player = event.player
        if (!player.isSpectator()) {
            player.setGameMode('spectator')
            player.potionEffects.add('minecraft:glowing', 20 * 10)
            player.addItemCooldown('kubejs:knightphantom_ghost', 20 * 15)
            event.server.scheduleInTicks(20 * 10, ctx => {
                player.setGameMode('survival')
            })
        }
    },
    'kubejs:ice_intestine': function(event, organ) {
        let player = event.player
        let oldTemp = (-1) * ColdSweat.getTemperature(player,'body')
        let mana = player.getAttributeTotalValue("irons_spellbooks:max_mana") - getPlayerMagicData(player).getMana()
        if (mana > 0 && oldTemp > 0){
            let curTemp = Math.max(oldTemp - mana, 0)
            let curMana = Math.max(mana - oldTemp, 0)
            ColdSweat.setTemperature(player,'core', ((-1) * curTemp - ColdSweat.getTemperature(player,'base')))
            getPlayerMagicData(player).setMana(player.getAttributeTotalValue("irons_spellbooks:max_mana") - curMana - Math.max(player.getAttributeTotalValue("irons_spellbooks:mana_regen"), 1))
            player.addItemCooldown('kubejs:ice_intestine', 20 * 15)
        }
    },
    'kubejs:twilight_broken_lich_crown': function(event, organ){
        let player = event.player
        let level = event.level
        let magic = getPlayerMagicData(player)
        let num = 0
        let attack = 0
        let health = 0
        let type = []
        let entityList = getLivingWithinRadius(level, new Vec3(player.x,player.y,player.z), 10)
        entityList.forEach(entity=>{
            if (tagCheck(entity,"irons_spellbooks:summons") || tagCheck(entity,"forge:golems") || entity.type == "twilightforest:loyal_zombie" ){
                if (num >= 30) return
                num += 1
                health += entity.getHealth()
                if (entity.attributes.hasAttribute("minecraft:generic.attack_damage")){
                    attack += entity.getAttributeTotalValue("minecraft:generic.attack_damage")
                }
                if (type.indexOf(entity.entityType) == -1){
                    type.push(entity.entityType)
                }
                player.level.spawnParticles($ParticleTypes.EXPLOSION, false, entity.x, entity.y, entity.z, 0, 1, 0, 1, 0.5)
                entity.discard()
            }
        })
        if (num == 0) return
        let mana = Math.min(magic.getMana() +health , player.getAttributeTotalValue("irons_spellbooks:max_mana"))
        player.modifyAttribute("minecraft:generic.attack_damage",'tLichSpine',attack,'addition')
        player.modifyAttribute("irons_spellbooks:spell_power",'tLichSpine',(type.length) / 20,'addition')
        player.absorptionAmount += num
        magic.setMana(mana - Math.max(player.getAttributeTotalValue("irons_spellbooks:mana_regen"), 1))
        player.server.scheduleInTicks(20*60, ctx=>{
            player.removeAttribute("minecraft:generic.attack_damage",'tLichSpine')
            player.removeAttribute("irons_spellbooks:spell_power",'tLichSpine')
            player.absorptionAmount = Math.min(0, player.absorptionAmount - num)
        })
        player.addItemCooldown('kubejs:twilight_broken_lich_crown', 20 * 60)
    },
    'kubejs:cloud_pyramid': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let instance = player.getChestCavityInstance()
        let buoyant = organ.tag.getFloat('buoyant_factor')
        if(!buoyant){
            player.removeEffect("minecraft:jump_boost")           
            player.potionEffects.add("minecraft:slow_falling", 20 * 5, 0, false, false)
            buoyant = instance.organScores.getOrDefault(new ResourceLocation('chestcavity', 'buoyant'), 0)
            if(magicData.getMana() < (buoyant - 4) * 100){
                return
            }
            magicData.setMana(magicData.getMana() - (buoyant - 4) * 100)
            instance.organScores.put(new ResourceLocation('chestcavity', 'buoyant'), new $Float(0))
            organ.tag.putFloat('buoyant_factor', buoyant)
        }else{
            player.potionEffects.add("minecraft:slow_falling", 20 * 1, 0, false, false)
            player.potionEffects.add("minecraft:jump_boost", 20 * 99999, 0, false, false)
            instance.organScores.put(new ResourceLocation('chestcavity', 'buoyant'), new $Float(buoyant))
            organ.tag.putFloat('buoyant_factor', 0)
        } 
        player.addItemCooldown('kubejs:cloud_pyramid', 20 * 0.2)
    },
    'kubejs:creeper_appendix': function (event, organ) {
        let player = event.player
        let itemMap = getPlayerChestCavityItemMap(player);
        let temperature = ColdSweat.getTemperature(player, 'body')
        let causesFire = false
        let explosive = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'explosive'))
        let creepy = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'creepy'))
        let strength = (explosive + creepy) * 2
        let num = 1
        if (itemMap.has('minecraft:gunpowder')) {
            strength = Math.min(12, strength + itemMap.get('minecraft:gunpowder').length * 4)
        }
        if (temperature > 0){
            causesFire = true
            num += Math.min(15, Math.floor(temperature / 10))
            ColdSweat.setTemperature(player, 'core', -ColdSweat.getTemperature(player, 'base'))
        }
        player.level.createExplosion(player.x, player.y, player.z).exploder(player).strength(strength).causesFire(causesFire).explode()
        let l = 3
        for(var i = 1; i < num; i++){
            for (var f = - JavaMath.PI / 2; f <= JavaMath.PI / 2; f += JavaMath.PI * 2 / (6 + i * 2)){
                for (var r = 0; r <= JavaMath.PI * 2; r += JavaMath.PI * 2 / i / 6){
                    player.level.createExplosion(player.x + i * l * Math.cos(r) * Math.cos(f), player.y + i * l * Math.sin(f), player.z + i * l * Math.sin(r) * Math.cos(f)).exploder(player).strength(strength).causesFire(causesFire).explode()
                }
            }
        }
        player.addItemCooldown('kubejs:creeper_appendix', 20 * (num + strength))
    },
    'kubejs:carminite_reactor_core': function (event, organ) {
        let player = event.player
        let level = event.level
        let ray = player.rayTrace(16, false)
        if (!ray.hit) return 
        let blockPos = new BlockPos(ray.hitX, ray.hitY, ray.hitZ)
        let blockState = Block.getBlock("twilightforest:carminite_reactor").blockStates[0]
        if (level.getBlock(blockPos) != "minecraft:bedrock"){
            if (level.setBlock(blockPos, blockState, 2)){
                player.addItemCooldown('kubejs:carminite_reactor_core', 20 * 60)
            }
        }
    }
}

/**
 * 
 * @param {Internal.Entity} entity 
 * @param {string} tag 
 */
function tagCheck(entity,tag){
    if (entity.entityType.tags.anyMatch(ele=>ele.location() === tag)){
        return true
    }
    else{
        return false
    }
}