// priority: 100
StartupEvents.registry('item', event => {
    event.create('scrap').texture('kubejs:item/scrap')
    event.create('fire_gem').texture('kubejs:item/fire_gem')
    event.create('relic_metal_ingot').texture('kubejs:item/relic_metal_ingot')
    event.create('polished_amber').texture('kubejs:item/polished_amber')
    event.create('dreadsteel_ingot').texture('kubejs:item/dreadsteel_ingot')
    event.create('common_mineral_cluster').texture('kubejs:item/common_mineral_cluster')
    event.create('rare_mineral_cluster').texture('kubejs:item/rare_mineral_cluster')
    event.create('dark_stardust_fragment').texture('kubejs:item/dark_stardust_fragment')
    event.create('unbreakable_core').texture('kubejs:item/unbreakable_core')
    event.create('disenchantment_book').texture('kubejs:item/disenchantment_book')
    event.create('exclamation_mark').texture('kubejs:item/exclamation_mark')
    event.create('full_mark').texture('kubejs:item/full_mark')
    event.create('ritual_catalyst').texture('kubejs:item/ritual_catalyst')
    event.create('lime_powder').texture('kubejs:item/lime_powder')

    event.create('god_bless_empty_necklace').texture('kubejs:item/god_bless_empty_necklace').maxStackSize(1).tag('curios:necklace').tag('itemborders:gold')
    event.create('god_bless_full_necklace').texture('kubejs:item/god_bless_full_necklace').maxStackSize(1).tag('curios:necklace').tag('itemborders:gold')
    event.create('god_consciousness').texture('kubejs:item/god_consciousness').maxStackSize(1).fireResistant()
    event.create('god_agreement').texture('kubejs:item/god_agreement').maxStackSize(1)
    event.create('candy').texture('kubejs:item/candy').tag('extradelight:candy_bowl_valid').food(food => { food.hunger(1).saturation(1).alwaysEdible().effect('kubejs:sweet_dream', 20 * 5, 0, 1) }).tag('supplementaries:cookies')
    event.create('ice_candy').texture('kubejs:item/ice_candy').tag('extradelight:candy_bowl_valid').food(food => { food.hunger(1).saturation(1).alwaysEdible().effect('kubejs:sweet_dream', 20 * 5, 0, 1) }).tag('supplementaries:cookies')
    event.create('water_candy').texture('kubejs:item/water_candy').tag('extradelight:candy_bowl_valid').food(food => { food.hunger(1).saturation(1).alwaysEdible().effect('kubejs:sweet_dream', 20 * 5, 0, 1) }).tag('supplementaries:cookies')
    event.create('fire_candy').texture('kubejs:item/fire_candy').tag('extradelight:candy_bowl_valid').food(food => { food.hunger(1).saturation(1).alwaysEdible().effect('kubejs:sweet_dream', 20 * 5, 0, 1) }).tag('supplementaries:cookies')
    event.create('wind_candy').texture('kubejs:item/wind_candy').tag('extradelight:candy_bowl_valid').food(food => { food.hunger(1).saturation(1).alwaysEdible().effect('kubejs:sweet_dream', 20 * 5, 0, 1) }).tag('supplementaries:cookies')
    event.create('candy_bag').texture('kubejs:item/candy_bag')

    event.create('starch_sausage').texture('kubejs:item/starch_sausage').food(food => { food.hunger(3).saturation(0.8).alwaysEdible() })
    event.create('cream').texture('kubejs:item/cream').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('mr_and_mrs_smith').texture('kubejs:item/mr_and_mrs_smith').food(food => {
        food.hunger(4).saturation(1).alwaysEdible()
        food.effect('minecraft:regeneration', 20 * 30, 1, 1)
    })

    event.create('colorful_candy').texture('kubejs:item/colorful_candy').tag('extradelight:candy_bowl_valid').food(food => { food.hunger(1).saturation(1).alwaysEdible().effect('kubejs:sweet_dream', 20 * 5, 0, 1) }).tag('supplementaries:cookies')

    event.create('brown_sauce_braised_intestines').texture('kubejs:item/brown_sauce_braised_intestines').food(food => {
        food.hunger(6).saturation(1.5).alwaysEdible()
        food.effect('minecraft:regeneration', 20 * 45, 0, 1)
        food.effect('minecraft:speed', 20 * 45, 0, 1)
        food.effect('minecraft:resistance', 20 * 45, 0, 1)
        food.effect('minecraft:absorption', 20 * 45, 0, 1)
        food.effect('minecraft:strength', 20 * 45, 0, 1)
        food.effect('minecraft:jump_boost', 20 * 45, 0, 1)
        food.effect('fruitsdelight:rage_aura', 20 * 45, 0, 1)
        food.effect('fruitsdelight:appetizing', 20 * 45, 0, 1)
        food.effect('minecraft:nausea', 20 * 45, 0, 1)
    })
    event.create('kubejs:sponsor_badge').texture('kubejs:item/sponsor_badge').maxStackSize(1)
    event.create('kubejs:mysterious_trinket').texture('kubejs:item/mysterious_trinket').maxStackSize(64)
    event.create('kubejs:chicken_flavor_powder').texture('kubejs:item/chicken_flavor_powder').maxStackSize(64)
    // 无形肿瘤
    event.create('kubejs:random_tumor')
        .food(food => {
            food.hunger(2).saturation(1)
            food.effect('minecraft:poison', 20 * 15, 2, 1)
            food.effect('minecraft:hunger', 20 * 15, 2, 1)
            food.alwaysEdible()
        })
        .texture('kubejs:item/organs/infected/random_tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')
        .tag('itemborders:iron')
        .group("kubejs.organs")

    event.create('active_pill').texture('kubejs:item/active_pill').tag('kubejs:pill').food(food => {
        food
            .hunger(1)
            .saturation(1)
            .alwaysEdible()
            .eaten(ctx => {
                if (ctx.level.isClientSide()) return
                global.updatePlayerActiveStatus(ctx.player)
                ctx.player.persistentData.putInt('organActive', 1)
            })
    })

    event.create('lucky_cookie').texture('kubejs:item/organs/food/lucky_cookie').food(food => {
        food.hunger(1).saturation(1).alwaysEdible().eaten(event => {
            if (!event.player) return
            event.player.server.runCommandSilent(`/title ${event.player.name.getString()} title {"translate":"${randomGet(luckyCookieSentence)}"}`)
            if (Math.random() < 0.02) {
                event.player.give(Item.of('kubejs:lucky_cookie_organ'))
            }
        })
    }).tag('supplementaries:cookies').maxStackSize(64)

    event.create('ceremonial_knife').texture('kubejs:item/ceremonial_knife').maxStackSize(1)
        .useAnimation('bow')
        .useDuration(itemStack => 40)
        .use((level, player, hand) => {
            return true
        })
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            entity.attack(5)
            entity.potionEffects.add('irons_spellbooks:instant_mana', 1, 2)
            entity.addItemCooldown(itemstack, 20 * 15)
            return itemstack
        })


    event.create('friend_to_the_end').texture('kubejs:item/friend_to_the_end').maxStackSize(1)
        .tag('curios:ring')
        .useAnimation('bow')
        .useDuration(itemStack => 40)
        .use((level, player, hand) => {
            return true
        })
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (itemstack.hasNBT() && itemstack.nbt.friendName && entity.isPlayer()) {
                let friend = Utils.server.getPlayer(itemstack.nbt.friendName)
                if (friend && friend.isLiving()) {
                    let targetDim = friend.level.getDimension()
                    entity.teleportTo(targetDim, friend.x, friend.y, friend.z, 0, 0)
                    entity.addItemCooldown(itemstack, 20 * 10)
                } else {
                    entity.tell($Serializer.fromJsonLenient({ translate: 'kubejs.msg.friend_to_the_end.1' }))
                }
            } else {
                entity.tell($Serializer.fromJsonLenient({ translate: 'kubejs.msg.friend_to_the_end.2' }))
                itemstack.setNbt({ friendName: entity.getUsername() })
                return itemstack
            }
            return itemstack
        })

    event.create('candy_canes_wand', 'basic').texture('kubejs:item/candy_canes_wand')
        .maxStackSize(1)
        .modifyAttribute('irons_spellbooks:spell_power', 'kubejsSpellPowerWeaponBoost', 0.1, 'addition')
        .rarity('epic')
        .useAnimation('eat')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            entity.playSound('entity.player.burp')
            entity.eat(level, Item.of('kubejs:candy'))
            entity.addItemCooldown(itemstack, 20 * 30)
            return itemstack
        })

    event.create('rapier_wand', 'irons_spells_js:magic_sword').tier('diamond')
        .attackDamageBaseline(4.0)
        .attackDamageBonus(3.5)
        .speedBaseline(-1.5)
        .speed(6.5)
        .maxDamage(980)
        .maxStackSize(1)
        .addAdditionalAttribute('irons_spellbooks:spell_power', 'kubejsSpellPowerWeaponBoost', 0.1, 'addition')
        .rarity('epic')
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            entity.potionEffects.add('irons_spellbooks:instant_mana', 1, 2)
            entity.addItemCooldown(itemstack, 20 * 60)
            return itemstack
        })

    event.create('artist_wand', 'irons_spells_js:magic_sword')
        .tier('diamond')
        .attackDamageBaseline(2.0)
        .attackDamageBonus(3.0)
        .speedBaseline(-2.5)
        .speed(4.0)
        .maxDamage(1680)
        .maxStackSize(1)
        .rarity('epic')
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            entity.potionEffects.add('kubejs:colorful', 20 * 20, 0)
            entity.addItemCooldown(itemstack, 20 * 60)
            return itemstack
        })


    event.create('glass_wand', 'irons_spells_js:staff').texture('kubejs:item/glass_wand')
        .tier('diamond')
        .maxStackSize(1)
        .attackDamageBaseline(3.0)
        .attackDamageBonus(1.5)
        .speedBaseline(-2.5)
        .speed(4.0)
        .maxDamage(123)
        .rarity('rare')


    event.create('unholy_grail').texture('kubejs:item/unholy_grail')
        .maxStackSize(1)
        .rarity('epic')
        .useAnimation('drink')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            entity.playSound('entity.player.burp')
            let itemMap = global.getPlayerChestCavityItemMap(entity)
            global.organCharmPlayerWarpTask(entity)
            if (itemMap.has('kubejs:forbidden_fruit')) {
                entity.potionEffects.add('minecraft:regeneration', 20 * 24, 2)
                entity.potionEffects.add('minecraft:absorption', 20 * 40, 1)
                entity.potionEffects.add('minecraft:strength', 20 * 50, 1)
                entity.potionEffects.add('minecraft:speed', 20 * 60, 0)
                entity.potionEffects.add('minecraft:resistance', 20 * 60, 1)
                entity.potionEffects.add('irons_spellbooks:instant_mana', 1, 2)
            } else {
                entity.potionEffects.add('minecraft:hunger', 20 * 8, 2)
                entity.potionEffects.add('minecraft:poison', 20 * 8, 1)
                entity.potionEffects.add('minecraft:wither', 20 * 5, 2)
                entity.potionEffects.add('minecraft:weakness', 20 * 10, 1)
                entity.potionEffects.add('minecraft:nausea', 20 * 12, 0)
                entity.potionEffects.add('minecraft:slowness', 20 * 12, 0)
            }
            entity.addItemCooldown(itemstack, 20 * 60)
            return itemstack
        })

    event.create('blood_extractor').texture('kubejs:item/blood_extractor').maxStackSize(1)
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            let nbt = { organSocres: {} }
            let ray = entity.rayTrace(4, false)
            let target = entity
            if (ray.entity && ray.entity.isLiving()) {
                target = ray.entity
            }
            target.getChestCavityInstance().getOrganScores().forEach((key, value) => {
                nbt.organSocres[key] = value
            })
            entity.give(Item.of('kubejs:glass_vial', nbt))
            entity.addItemCooldown(itemstack, 20 * 15)
            return itemstack
        })

    event.create('glass_vial').texture('kubejs:item/glass_vial').maxStackSize(1)
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (!itemstack.nbt?.organSocres) return itemstack
            itemstack.nbt.organSocres.getAllKeys().forEach(key => {
                entity.tell([LEADING_SYMBOL, Text.yellow(global.SCORE_MAP[key]).hover(global.SCORE_HOVER_MAP[key]), Text.white(' : '), Text.white(itemstack.nbt.organSocres[key])])
            })
            entity.addItemCooldown(itemstack, 20 * 15)
            return itemstack
        })

    event.create('holy_potion').texture('kubejs:item/holy_potion').maxStackSize(1)
        .rarity('epic')
        .useAnimation('drink')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            entity.server.runCommandSilent(`/lichdom revoke ${entity.name.getString()}`)
            return
        })

    event.create('operation_box').texture('kubejs:item/operation_box').maxStackSize(1)
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 30)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (!entity.isPlayer()) return itemstack
            let instance = entity.getChestCavityInstance()
            let oriInv = instance.inventory.getTags()
            let replaceInv = itemstack?.nbt?.inventory
            if (!replaceInv) {
                replaceInv = []
            }
            if (oriInv && replaceInv) {
                instance.inventory.readTags(replaceInv)
                if (itemstack.hasNBT()) {
                    itemstack.nbt.put('inventory', oriInv)
                } else {
                    itemstack.setNbt({ inventory: oriInv })
                }
            }
            global.initChestCavityIntoMap(entity, true)
            if (entity.getChestCavityInstance().inventory.hasAnyMatching(item => {
                return item.hasTag('kubejs:auto_active')
            })) {
                global.updatePlayerActiveStatus(entity)
                entity.persistentData.putInt(organActive, 1)
            }
            entity.tell($Serializer.fromJsonLenient({ translate: 'kubejs.msg.operation_box.1' }))
            entity.addItemCooldown(itemstack, 10)
            return itemstack
        })
        .releaseUsing((itemstack, level, entity, tick) => {
            if (level.isClientSide()) return itemstack
            if (!entity.isPlayer()) return itemstack
            let itemInv = itemstack?.nbt?.inventory
            if (!itemInv) return itemstack
            let itemList = new Array(27).fill(Item.of('minecraft:air'))
            let container = new $SimpleContainer(itemList)
            for (let i = 0; i < itemInv.length; i++) {
                let slot = itemInv[i].getInt('Slot')
                let itemId = itemInv[i].getString('id')
                let itemCount = itemInv[i].getInt('Count')
                let itemNBT = itemInv[i].get('tag')
                container.setItem(slot, Item.of(itemId, itemCount, itemNBT))
            }
            container.addListener((newContainer) => {
                let tag = []
                for (let i = 0; i < 27; i++) {
                    let item = newContainer.getItem(i)
                    if (item.isEmpty()) continue
                    let itemTag = item.save(new $CompoundTag())
                    itemTag.putInt('Slot', i)
                    tag.push(itemTag)
                }
                itemstack.nbt.put('inventory', tag)
            })
            let player = entity
            player.openMenu(new $SimpleMenuProvider((i, playerInventory) => {
                return new $ChestMenu.threeRows(i, playerInventory, container)
            }, Text.translatable('item.kubejs.operation_box')))
        })

    event.create('advanced_chest_opener').texture('kubejs:item/advanced_chest_opener')
        .maxStackSize(1)

    event.create('random_delivery_agreement').texture('kubejs:item/random_delivery_agreement')
        .maxStackSize(16)
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (!entity.isPlayer()) return itemstack
            let wares = global.getRandomWare()
            entity.give(wares)
            itemstack.shrink(1)
            return itemstack
        })
})
