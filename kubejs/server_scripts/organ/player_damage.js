// priority: 10
/**
 * 造成伤害
 * @param {Internal.LivingHurtEvent} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function organEntityHurtByPlayer(event, data) {
    let player = event.source.player;
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:damage_only')) {
        typeMap.get('kubejs:damage_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organPlayerDamageOnlyStrategies[organ.id](event, organ, data)
            }
        })
    }
    if (typeMap.has('kubejs:damage')) {
        typeMap.get('kubejs:damage').forEach(organ => {
            organPlayerDamageStrategies[organ.id](event, organ, data)
        })
    }
}

/**
 * 造成伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageStrategies = {

};


/**
 * 造成伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const organPlayerDamageOnlyStrategies = {
    'kubejs:infinity_beats': function (event, organ, data) {
        let player = event.source.player;
        let attriMap = getPlayerAttributeMap(player)
        if (!player.hasItemInSlot('mainhand') && !player.hasItemInSlot('offhand')) {
            let value = 4;
            if (attriMap.has(global.TEMP_ATTACK_UP.name)) {
                value = value + attriMap.get(global.TEMP_ATTACK_UP.name)
            }
            attriMap.set(global.TEMP_ATTACK_UP.name, value)
            player.modifyAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name, value, global.TEMP_ATTACK_UP.operation);
            setPlayerAttributeMap(player, attriMap);
            data.returnDamage = data.returnDamage + value
        } else {
            player.removeAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name);
            attriMap.set(global.TEMP_ATTACK_UP.name, 0);
            setPlayerAttributeMap(player, attriMap);
        }
    },
    'kubejs:color_palette': function (event, organ, data) {
        let player = event.source.player
        if (player.getMainHandItem() != 'kubejs:artist_wand' && player.getOffHandItem() != 'kubejs:artist_wand') {
            return
        }
        if (event.source.type == 'irons_spellbooks.firebolt' || event.source.type == 'irons_spellbooks.icicle' || event.source.type == 'irons_spellbooks.poison_arrow') {
            let amplify = 30
            if (player.hasEffect('kubejs:colorful')) {
                amplify = 20
            }
            event.amount = event.amount + getPlayerMagicData(player).getMana() / amplify
        }
    },
    'kubejs:executioner_blade_pieces': function (event, organ, data) {
        let player = event.source.player

        let mainitem = player.mainHandItem
        let offitem = player.offHandItem
        if (event.source.type != 'player') {
            return
        }
        if ((mainitem?.id == 'tetra:modular_sword' && mainitem.nbt && mainitem.nbt.contains('sword/executioner_blade_material'))
            || (offitem?.id == 'tetra:modular_sword' && offitem.nbt && offitem.nbt.contains('sword/executioner_blade_material'))) {

            event.entity.potionEffects.add('kubejs:executed', 20 * 5, 2)
        }
    },
    'kubejs:bloody_bone_arrow': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        let player = event.source.player

        let mainitem = player.mainHandItem
        if ((mainitem?.id == 'tetra:modular_bow' && mainitem.nbt && mainitem.nbt.contains('bow/long_stave_material'))) {

            let dx = event.entity.getX() - player.getX()
            let dy = event.entity.getY() - player.getY()
            let dz = event.entity.getZ() - player.getZ()
            let distance = Math.floor(Math.sqrt(dx * dx + dy * dy + dz * dz))
            if (distance <= 20 && distance >= 0) {
                event.amount = event.amount * (1 - ((distance - 20) * (distance - 20) / 400))
            } else if (distance > 20) {
                event.amount = event.amount * Math.min((1 + ((distance - 20) * (distance - 20) / 400)), 5)
            }
        }
    },
    'kubejs:heavy_hammer_muscle': function (event, organ, data) {
        let player = event.source.player
        if (event.source.type != 'player') {
            return
        }
        if (Math.random() < Math.min(0.015 * player.getLuck(), 0.15)) {
            event.entity.potionEffects.add('tetra:stun', 20 * 2, 0)
        }
    },
    'kubejs:demon_eyeball': function (event, organ, data) {
        let player = event.source.player
        event.amount = event.amount * (player.pitch + 90) / 90
    },
    'kubejs:lost_paradise': function (event, organ, data) {
        let player = event.source.player
        let random = Math.random()
        if (random < 0.2) {
            event.entity.causeFallDamage(4, event.amount, DamageSource.FALL)
            event.amount = 0
            return
        }
        if (random < 0.4) {
            event.amount = event.amount + event.entity.maxHealth * 0.03
            return
        }
        if (random < 0.6) {
            event.amount = event.amount * 2
            return
        }
        if (random < 0.8) {
            event.amount = event.amount + 10
            return
        }
        if (random < 1) {
            player.potionEffects.add('minecraft:regeneration', 20 * 15, 2)
            return
        }
    },
    'kubejs:blade_of_heart': function (event, organ, data) {
        let player = event.source.player
        let item = player.mainHandItem
        if (event.source.type != 'player') {
            return
        }
        if (item?.id == 'weaponmaster:wm_broadsword') {
            event.amount = event.amount * 1.3
        }
    },
    'kubejs:bone_soul': function (event, organ, data) {
        if (event.source.type != 'player') {
            return
        }
        if (Math.random() > 0.1) {
            return
        }
        let item = event.source.player.mainHandItem
        if (item?.id == 'weaponmaster:wm_rapier') {
            event.entity.potionEffects.add('kubejs:vulnerable', 20 * 15, 2)
        }
    },
    'kubejs:parasitic_elf': function (event, organ, data) {
        if (event.source.type != 'arrow') {
            return
        }
        if (Math.random() < Math.min(0.03 * event.source.player.getLuck(), 0.3)) {
            event.entity.potionEffects.map.forEach((effect, instance) => {
                if (effect.CC_IsHarmful()) {
                    instance.setDuration(instance.getDuration() + 20 * 2)
                }
            })
        }
    },
    'kubejs:lava_life_cycle_system': function (event, organ, data) {
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)
        let damageBonus = Math.floor(count / 10)
        if (damageBonus > 0) {
            event.amount = event.amount + damageBonus
            updateResourceCount(player, count - damageBonus)
        }
    },
    'kubejs:ancient_chip': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        let entityHeight = event.entity.bbHeight
        let arrowHeight = event.source.immediate.y - event.entity.y
        event.amount = event.amount * (Math.min(arrowHeight / entityHeight, 1.2) * 0.5 + 1)
    },
    'kubejs:the_third_eye': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        let player = event.source.player
        if (player.persistentData.getInt(warpCount) >= 20) {
            event.entity.invulnerableTime = 0
            event.amount = event.amount * 0.75
        }
    },
    'kubejs:energy_bottle_max': function (event, organ, data) {
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)
        let typeMap = getPlayerChestCavityTypeMap(player)
        let roseCount = 0
        let amplifier = 0.5
        if (typeMap.has('kubejs:rose')) {
            roseCount = roseCount + typeMap.get('kubejs:rose').length
        }
        if (player.hasEffect('kubejs:burning_heart') || player.hasEffect('kubejs:flaring_heart')) {
            amplifier = 2
        }
        updateResourceCount(player, count + Math.floor(roseCount * amplifier))
    },
    'kubejs:netherite_muscle': function (event, organ, data) {
        let entity = event.entity
        let entityList = getLivingWithinRadius(entity.getLevel(), entity.position(), 3)
        entityList.forEach(e => {
            if (!e.isPlayer() && e.stringUuid != entity.stringUuid) {
                e.attack(event.amount)
            }
        })
    },
    'kubejs:ender_guard_eyeball': function (event, organ, data) {
        if (event.source.type != 'arrow') return
        let potionList = ['minecraft:slowness', 'minecraft:poison', 'cataclysm:abyssal_burn', 'minecraft:weakness', 'minecraft:wither', 'tetra:stun', 'tetra:bleeding', 'goety:cursed']
        event.entity.potionEffects.add(randomGet(potionList), 20 * 4, 0)
    },
    'kubejs:origin_knight_core': function (event, organ, data) {
        let player = event.source.player
        if (player.absorptionAmount > 0) {
            event.amount = event.amount + player.absorptionAmount
        }
    },
    'kubejs:mockery': function (event, organ, data) {
        let player = event.source.player
        let luck = player.getLuck()
        if (luck <= 0) luck = 0
        let random = Math.random() * Math.min(1 + luck / 50, 3)
        event.amount = event.amount * random
    },
    'kubejs:melty_blood': function (event, organ, data) {
        let player = event.source.player
        let luck = player.getLuck()
        if (luck <= 0) return
        if (Math.random() > Math.min(luck * 0.005, 0.25)) return
        event.amount = event.amount * (1 + Math.min(luck * 0.06, 3))
        player.potionEffects.add('goety:stunned', 20, 0)
    },
    'kubejs:mace': function (event, organ, data) {
        let player = event.source.player
        let fallDist = player.fallDistance
        if (fallDist <= 0) return
        let fallDamageMulti = Math.min(1 + fallDist * 0.1, 5)
        event.amount = event.amount * fallDamageMulti
    },
    'kubejs:sunbird_crystals': function (event, organ, data) {
        let entity = event.entity
        if (entity.isUndead()) {
            entity.setSecondsOnFire(10)
            entity.potionEffects.add('goety:flammable', 20 * 10, 1)
        }
    },
    'kubejs:frenzy_blast_furance': function (event, organ, data) {
        let player = event.source.player
        if (!isPlayerOnFire(player)) {
            return
        }
        event.amount = event.amount + (player.maxHealth - player.health) * 2
    },
    'kubejs:tusk': function (event, organ, data) {
        let player = event.source.player
        // 限制空手
        if (player.hasItemInSlot('mainhand') || player.hasItemInSlot('offhand')) return
        let criticalPunchCount = player.persistentData.getInt(criticalPunch)
        // 概率增加重拳计数器
        criticalPunchCount = criticalPunchCount + 1

        if (criticalPunchCount >= criticalPunchMaxCount) {
            let amplifier = 1.5 + (criticalPunchCount - criticalPunchMaxCount) * 0.05
            event.amount = event.amount * amplifier
            criticalPunchCount = 0
            player.level.playSound(null, player.getX(), player.getY(), player.getZ(), 'block.amethyst_block.break', player.getSoundSource(), 0.5, Math.max(amplifier * 0.2 + 0.1, 5))
        }
        player.persistentData.putInt(criticalPunch, criticalPunchCount)
    },
    'kubejs:soul_vulture_feather': function (event, organ, data) {
        let target = event.entity
        let harmEffectNum = 0
        target.potionEffects.active.forEach(ele => {
            if (ele.effect.CC_IsHarmful()) {
                harmEffectNum = harmEffectNum + 1
            }
        })
        event.amount = event.amount * (1 + harmEffectNum * 0.1)
    },
    'kubejs:golden_lucky_cookie_organ': function (event, organ, data) {
        let target = event.entity
        if (!target.isPlayer()) return
        let player = event.source.player
        let amplifier = Math.floor(player.getLuck() * 0.2) - 1
        target.potionEffects.add('minecraft:luck', 20 * 120, Math.max(amplifier, 0))
    },
    'kubejs:flame_heart': function (event, organ, data) {
        let player = event.source.player
        event.amount = event.amount + coldsweat.getTemperature(player,'body')
    }
};