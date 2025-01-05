// priority: 500
ItemEvents.rightClicked('biomancy:healing_additive', event => {
    let player = event.player;
    let item = event.item;
    if (event.getHand() == "off_hand") {
        let organ = player.getMainHandItem();
        if (organ.hasNBT() && organ.nbt.contains('chestcavity:organ_compatibility')) {
            organ.nbt.remove('chestcavity:organ_compatibility')
            item.shrink(1);
        } else {
            player.tell('似乎该物品不需要进行抗排异')
        }
    } else {
        player.tell('如果要使用抗排异功能，请将药物放在副手，器官置于主手')
    }
})

ItemEvents.rightClicked('kubejs:unbreakable_core', event => {
    let player = event.player;
    let item = event.item;
    if (event.getHand() != "off_hand") {
        player.tell('如果要使用不毁加持功能，请将不毁核心放在副手，物品置于主手')
        return
    }
    let unbreakone = player.getMainHandItem()
    if (unbreakone?.nbt && unbreakone.nbt?.Unbreakable) {
        player.tell('该物品已进行过不毁加持！')
        return
    }
    if (!unbreakone.hasEnchantment('minecraft:unbreaking', 1)) {
        player.tell('不满足耐久要求！')
        return
    }
    let enchantlevel = unbreakone.getEnchantmentLevel('minecraft:unbreaking')
    if (enchantlevel < 8) {
        player.tell('不满足耐久要求！')
        return
    }
    unbreakone.nbt.Enchantments = unbreakone.nbt.Enchantments.filter(function (unbreakone) {
        return unbreakone.id != 'minecraft:unbreaking'
    })
    unbreakone.nbt.merge({ Unbreakable: 1 })
    item.shrink(1)
})

ItemEvents.rightClicked('kubejs:disenchantment_book', event => {
    let player = event.player;
    let item = event.item;
    if (event.getHand() != "off_hand") {
        player.tell('如果要使用祛魔功能，请将祛魔书放在副手，物品置于主手')
        return
    }
    let weapon = player.getMainHandItem()
    if (!weapon || !weapon.isEnchanted()) {
        player.tell('没有可取下的附魔！')
        return
    }

    let enchantList = []
    let levelList = []
    weapon.allEnchantments.forEach((name, level) => {
        enchantList.push(name)
        levelList.push(level)
    })
    if (enchantList.length <= 0 || levelList.length <= 0) {
        return
    }
    let setlength = enchantList.length
    let random = Math.ceil((Math.random() * setlength))

    if (item.getCount() > 1) {
        item.shrink(1)
    } else {
        player.setOffHandItem(Item.of('minecraft:air'))
    }
    if (weapon.getCount() > 1) {
        weapon.shrink(1)
    } else {
        player.setMainHandItem(Item.of('minecraft:air'))
    }

    player.give(Item.of('minecraft:enchanted_book').enchant(enchantList[random - 1], levelList[random - 1]))
})

ItemEvents.rightClicked('hexerei:selenite_shard', event => {
    if (event.level.isNight()
        && event.player.headArmorItem == 'irons_spellbooks:cultist_helmet'
        && event.player.chestArmorItem == 'irons_spellbooks:cultist_chestplate'
        && event.player.legsArmorItem == 'irons_spellbooks:cultist_leggings'
        && event.player.feetArmorItem == 'irons_spellbooks:cultist_boots'
        && (event.player.mainHandItem == 'irons_spellbooks:blood_staff' || event.player.offHandItem == 'irons_spellbooks:blood_staff')) {
        event.item.shrink(1)
        event.player.give(Item.of('kubejs:blood_moon_wand'))
    }
})

ItemEvents.rightClicked('kubejs:mysterious_trinket', event => {
    event.item.shrink(1)
    event.player.give(randomGet(trinketList))
})

ItemEvents.rightClicked('kubejs:advanced_chest_opener', event => {
    let player = event.player
    let teleOper = event.item.enchantments.containsKey('kubejs:tele_operation')
    let dist = 5
    if (teleOper) {
        let teleOperLevel = event.item.getEnchantmentLevel('kubejs:tele_operation')
        dist = Math.min(dist + teleOperLevel * 3, 20)
    }
    let ray = player.rayTrace(dist, false)
    let target = player
    let selfTag = true
    let safeOper = event.item.enchantments.containsKey('kubejs:safe_operation')
    if (ray.entity && ray.entity.isAlive() && !ray.entity.isPlayer()) {
        selfTag = false
        target = ray.entity
    } else if (safeOper) {
        return
    }

    if (target.type == 'iceandfire:fire_dragon' || target.type == 'iceandfire:ice_dragon' || target.type == 'iceandfire:lightning_dragon') {
        let getAgeTicks = target.nbt.AgeTicks
        let getDeathStage = target.nbt.DeathStage
        let curStage = ((getAgeTicks / 24000) / 5) / 2
        if (getDeathStage + 1 >= curStage) return
    }

    player.swing()
    let painlessOper = event.item.enchantments.containsKey('kubejs:painless_operation')
    let creativeOper = event.item.enchantments.containsKey('kubejs:creative_operation')

    let optional = $ChestCavityEntity.of(target)
    if (optional.isPresent()) {
        let chestCavityEntity = optional.get()
        let cc = chestCavityEntity.getChestCavityInstance()
        if (cc.getChestCavityType().isOpenable(cc) || creativeOper || selfTag) {
            if (!cc.getOrganScore($CCOrganScores.EASE_OF_ACCESS) > 0 && !painlessOper) {
                target.attack(DamageSource.GENERIC, 4)
            }
            if (target.isAlive()) {
				$CommonForgeEventBusSubscriber.addToCheckMap(player, cc)
                cc.ccBeingOpened = cc
                let inv = $ChestCavityUtil.openChestCavity(cc)
                player.getChestCavityInstance().ccBeingOpened = cc
				
				let invName = Text.of(target.getDisplayName().getString())
					.append(Text.translate("title.name.suffix"))
					.append(Text.translate("title.chestcavity"));
		
                player.openMenu(new $SimpleMenuProvider((i, playerInventory) => {
                    return new $ChestCavityScreenHandler(i, playerInventory, inv)
                }, invName))
            }
        } else {
            if (!target.getEquipment('chest').isEmpty()) {
                player.setStatusMessage(Text.translate("tip.chestopener.fail.obstructed"))
                player.playSound("minecraft:chain_hit", 0.75, 1.0)
            } else {
                player.setStatusMessage(Text.translate("tip.chestopener.fail.healthy"))
				player.playSound("minecraft:armor_equip_turtle", 0.75, 1.0)
            }
		}
    }
})
