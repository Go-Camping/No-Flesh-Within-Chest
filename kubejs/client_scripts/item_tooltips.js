// priority: 500
ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:active_pill', (item, advanced, text) => {
        addForTextLines(text, [[Text.gold(Text.translatable("kubejs.tooltips.active_pill.1")), Text.aqua(Text.translatable("kubejs.tooltips.active_pill.2"))], [Text.gray(Text.translatable("kubejs.tooltips.active_pill.3"))]], 1);
    })

    tooltip.addAdvanced('kubejs:ceremonial_knife', (item, advanced, text) => {
        addForTextLines(text, [[LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ceremonial_knife.1"))], [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ceremonial_knife.2")), Text.gold('5'), Text.gray(Text.translatable("kubejs.tooltips.ceremonial_knife.3"))]], 1);
    })

    tooltip.addAdvanced('biomancy:healing_additive', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.healing_additive.1")));
        text.add(Text.gray(Text.translatable("kubejs.tooltips.healing_additive.2")));
    })

    tooltip.addAdvanced('kubejs:colorful_candy', (item, advanced, text) => {
        text.add(Text.translatable("kubejs.tooltips.colorful_candy.1"))
        text.add(Text.translatable("kubejs.tooltips.colorful_candy.2"))
        text.add(Text.translatable("kubejs.tooltips.colorful_candy.3"))
    })

    tooltip.addAdvanced('kubejs:eye_of_fortress', (item, advanced, text) => {
        text.add(Text.darkRed(Text.translatable("kubejs.tooltips.eye_of_fortress.1")));
    })

    tooltip.addAdvanced('kubejs:god_consciousness', (item, advanced, text) => {
        text.add(1, [Text.gold(Text.translatable("kubejs.tooltips.god_consciousness.1")), Text.yellow(getMobNameByType(item.nbt?.mobType))]);
    })


    tooltip.addAdvanced('kubejs:friend_to_the_end', (item, advanced, text) => {
        if (item.nbt && item.nbt.friendName) {
            text.add([Text.gray(Text.translatable("kubejs.tooltips.friend_to_the_end.1")), Text.gold(item.nbt.friendName)]);
        } else {
            text.add([Text.gray(Text.translatable("kubejs.tooltips.friend_to_the_end.2"))]);
        }
    })

    tooltip.addAdvanced('kubejs:empty_organ_charm', (item, advanced, text) => {
        text.add(1, Text.gray(Text.translatable("kubejs.tooltips.empty_organ_charm.1")));
    })

    tooltip.addAdvanced('kubejs:bunny_hoppers', (item, advanced, text) => {
        text.add(1, Text.gray(Text.translatable("kubejs.tooltips.bunny_hoppers.1")));
    })

    tooltip.addAdvanced('kubejs:rapier_wand', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.rapier_wand.1")));
    })
    tooltip.addAdvanced('kubejs:artist_wand', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.artist_wand.1")));
    })
    tooltip.addAdvanced('kubejs:unholy_grail', (item, advanced, text) => {
        text.add(Text.red(Text.translatable("kubejs.tooltips.unholy_grail.1")));
        text.add(Text.darkGray(Text.translatable("kubejs.tooltips.unholy_grail.2")));
    })
    tooltip.addAdvanced('kubejs:dark_stardust_fragment', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.dark_stardust_fragment.1")));
        text.add(Text.gold(Text.translatable("kubejs.tooltips.dark_stardust_fragment.2")));
    })
    tooltip.addAdvanced('kubejs:unbreakable_core', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.unbreakable_core.1")));
        text.add(Text.gold(Text.translatable("kubejs.tooltips.unbreakable_core.2")));
    })
    tooltip.addAdvanced('kubejs:disenchantment_book', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.disenchantment_book.1")));
        text.add(Text.gold(Text.translatable("kubejs.tooltips.disenchantment_book.2")));
    })
    tooltip.addAdvanced('kubejs:advanced_chest_opener', (item, advanced, text) => {
        text.add(Text.darkGray(Text.translatable("kubejs.tooltips.advanced_chest_opener.1")));
    })
    tooltip.addAdvanced('kubejs:god_bless_empty_necklace', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.god_bless_empty_necklace.1")));
    })
    tooltip.addAdvanced('kubejs:god_bless_full_necklace', (item, advanced, text) => {
        text.add(Text.gold(Text.translatable("kubejs.tooltips.god_bless_full_necklace.1")));
    })

    tooltip.addAdvanced('somebosses:illegal_beacon', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.illegal_beacon.1")));
    })
    tooltip.addAdvanced('somebosses:rusty_sword_relic', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.rusty_sword_relic.1")));
    })
    tooltip.addAdvanced('somebosses:monochrome_mask', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.monochrome_mask.1")));
    })
    tooltip.addAdvanced('somebosses:gilded_dynamite', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.gilded_dynamite.1")));
    })
    tooltip.addAdvanced('somebosses:burning_volcanic_rock', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.burning_volcanic_rock.1")));
    })
    tooltip.addAdvanced('somebosses:vampire_bait', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.vampire_bait.1")));
    })
    tooltip.addAdvanced('somebosses:slab_of_command', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.slab_of_command.1")));
    })
    tooltip.addAdvanced('somebosses:bone_of_curse', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.bone_of_curse.1")));
    })
    tooltip.addAdvanced('somebosses:cactus_relic', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.cactus_relic.1")));
    })
    tooltip.addAdvanced('somebosses:prismarine_eye', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.prismarine_eye.1")));
    })
    tooltip.addAdvanced('somebosses:disgusting_pendant', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.disgusting_pendant.1")));
    })
    tooltip.addAdvanced('somebosses:necromancy_staff', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.necromancy_staff.1")));
    })
    tooltip.addAdvanced('somebosses:one_eyed_wrait_in_a_bottle', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.one_eyed_wrait_in_a_bottle.1")));
    })
    tooltip.addAdvanced('somebosses:token_of_the_ninja', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.token_of_the_ninja.1")));
    })
    tooltip.addAdvanced('somebosses:cursed_spring_water', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.cursed_spring_water.1")));
    })
    tooltip.addAdvanced('somebosses:chaos_insignia', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.chaos_insignia.1")));
    })
    tooltip.addAdvanced('somebosses:dark_magic_gauntlet', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.dark_magic_gauntlet.1")));
    })
    tooltip.addAdvanced('somebosses:frozen_shield_plate', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.frozen_shield_plate.1")));
    })
    tooltip.addAdvanced('somebosses:ice_lantern', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.ice_lantern.1")));
    })
    tooltip.addAdvanced('somebosses:furnace_torch', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.furnace_torch.1")));
    })
    tooltip.addAdvanced('somebosses:power_generator_core', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.power_generator_core.1")));
    })

    tooltip.addAdvanced('kubejs:candy_bag', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.candy_bag.1")));
    })
    
    tooltip.addAdvanced('kubejs:eye_of_dragon', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.eye_of_dragon.1")));
    })


    tooltip.addAdvanced('art_of_forging:potent_mixture', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("kubejs.tooltips.potent_mixture.1")));
    })

    


    tooltip.addAdvanced('kubejs:organ_charm', (item, advanced, text) => {
        let lineNum = 1
        if (item.nbt?.organ?.id) {
            text.add(lineNum++, [Text.gold(Text.translatable("kubejs.tooltips.organ_charm.1")), Text.yellow(Text.translate(Item.of(item.nbt.organ.id).descriptionId))]);
            text.add(lineNum++, [Text.gold(Text.translatable("kubejs.tooltips.organ_charm.2")), Text.yellow(Text.translate(Item.of(item.nbt.targetOrgan).descriptionId))]);
        }
        if (item.nbt?.type == 'kill') {
            text.add(lineNum++, [Text.gray(Text.translatable("kubejs.tooltips.organ_charm.3")), Text.gray(`${item.nbt.killTask.counter}/${item.nbt.killTask.killAmount}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.4")), Text.gray(`${getMobNameByType(item.nbt.killTask.mobType)}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.5"))]);
        }
        if (item.nbt?.type == 'diet') {
            text.add(lineNum++, [Text.gray(Text.translatable("kubejs.tooltips.organ_charm.6")), Text.gray(`${item.nbt.dietTask.foodTypeList.length}/${item.nbt.dietTask.foodTypeAmount}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.7")), Text.gray(`${item.nbt.dietTask.minHunger}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.8"))]);
        }
        if (item.nbt?.type == 'bear') {
            text.add(lineNum++, [Text.gray(Text.translatable("kubejs.tooltips.organ_charm.9")), Text.gray(`${item.nbt.bearTask.minDamage}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.10")), Text.gray(`${item.nbt.bearTask.counter.toFixed(2)}/${item.nbt.bearTask.bearAmount}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.11"))]);
        }
        if (item.nbt?.type == 'mining') {
            let blockList = []
            if (item.nbt.miningTask.targetblock) {
                item.nbt.miningTask.targetblock.forEach(ctx => {
                    blockList.push(Text.translate(Item.of(ctx).descriptionId).string)
                })
            }
            text.add(lineNum++, [Text.gold(Text.translatable("kubejs.tooltips.organ_charm.12")), Text.yellow(blockList.join('/'))])

            text.add(lineNum++, [Text.gray(Text.translatable("kubejs.tooltips.organ_charm.13")), Text.gray(`${item.nbt.miningTask.counter}/${item.nbt.miningTask.miningAmount}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.14"))]);
        }
        if (item.nbt?.type == 'damage') {
            let typeName = Text.translatable("kubejs.tooltips.organ_charm.15")
            switch (item.nbt.damageTask?.type) {
                case ('melee'):
                    typeName = Text.translatable("kubejs.tooltips.organ_charm.16")
                    break;
                case ('projectile'):
                    typeName = Text.translatable("kubejs.tooltips.organ_charm.17")
                    break;
                case ('magic'):
                    typeName = Text.translatable("kubejs.tooltips.organ_charm.18")
                    break;
            }
            text.add(lineNum++, [Text.gray(Text.translatable("kubejs.tooltips.organ_charm.19")), Text.gray(`${item.nbt.damageTask.minDamage}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.20")), Text.gray(typeName), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.21")), Text.gray(`${item.nbt.damageTask.counter.toFixed(2)}/${item.nbt.damageTask.damageAmount}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.22"))]);
        }
        if (item.nbt?.type == 'warp') {
            text.add(lineNum++, [Text.gray(Text.translatable("kubejs.tooltips.organ_charm.23")), Text.gold(`${item.nbt.warpTask.warpMin}`), Text.gray(Text.translatable("kubejs.tooltips.organ_charm.24"))]);
        }
        if (item.nbt?.status == 1) {
            text.add(lineNum++, [Text.red(Text.translatable("kubejs.tooltips.organ_charm.25"))]);
        }
    })
})

/**
 * @param {string} mobType 
 */
function getMobNameByType(mobType) {
    if (!mobType) {
        return Text.of(Text.translatable("kubejs.tooltips.mob_name.1")).string
    }
    return Text.translate('entity.' + mobType.replace(':', '.')).string
}
