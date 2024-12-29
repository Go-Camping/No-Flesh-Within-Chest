// priority: 800
ServerEvents.recipes(event => {
    event.remove({ mod: 'nameless_trinkets' })
    event.remove({ mod: 'somebosses' })
    event.remove({ output: 'supplementaries:candy' })
    event.remove({ output: 'moblassos:hostile_lasso' })
    event.remove({ output: 'morebows:ender_bow' })
    event.remove({ output: 'lightmanscurrency:coinmint' })
    event.remove({ output: 'irons_spellbooks:dev_staff' })
    event.remove({ output: 'goety:warped_wartful_egg' })
    event.remove({ output: 'gateways:gate_pearl' })
    event.remove({ output: 'cataclysm:meat_shredder' })
    event.remove({ output: 'extraarmor:copper_helmet' })
    event.remove({ output: 'extraarmor:copper_chestplate' })
    event.remove({ output: 'extraarmor:copper_leggings' })
    event.remove({ output: 'extraarmor:copper_boots' })
    event.remove({ output: 'extraarmor:blacksmith_hammer' })
    event.remove({ output: 'alexsmobs:transmutation_table' })
    event.remove({ output: 'weaponmaster:workstation' })
    event.remove({ output: 'twilightforest:uncrafting_table' })
    event.remove({ output: 'cold_sweat:boiler' })
    event.remove({ output: 'twilightforest:uncrafting_table' })

    event.shaped('weaponmaster:workstation', [
        ['minecraft:lectern', 'minecraft:writable_book', '#minecraft:anvil'],
        ['minecraft:smooth_stone', '#forge:storage_blocks', 'minecraft:smooth_stone'],
    ])

    event.shaped(Item.of('extraarmor:copper_helmet', 1), [
        'LOL',
        'L L'
    ],
        {
            L: 'minecraft:copper_ingot',
            O: 'minecraft:raw_copper'
        })

    event.shaped(Item.of('extraarmor:copper_chestplate', 1), [
        'L L',
        'LOL',
        'LLL'
    ],
        {
            L: 'minecraft:copper_ingot',
            O: 'minecraft:raw_copper'
        })

    event.shaped(Item.of('extraarmor:copper_leggings', 1), [
        'LOL',
        'L L',
        'L L'
    ],
        {
            L: 'minecraft:copper_ingot',
            O: 'minecraft:raw_copper'
        })

    event.shaped(Item.of('extraarmor:copper_boots', 1), [
        'O O',
        'L L'
    ],
        {
            L: 'minecraft:copper_ingot',
            O: 'minecraft:raw_copper'
        })

    event.shaped(Item.of('kubejs:organ_recycler', 1), [
        'OOO',
        'OCO',
        'OMO'
    ],
        {
            C: '#kubejs:organ',
            O: 'lightmanscurrency:coin_iron',
            M: 'wares:delivery_table'
        })
            
    event.shaped('cataclysm:meat_shredder', [
        ['', 'twilightforest:fiery_ingot', 'goety:philosophers_stone'],
        ['', 'twilightforest:charm_of_keeping_3', 'minecraft:nether_star'],
        ['cataclysm:witherite_ingot', '', '']
    ])

    event.shaped('dimdungeons:block_key_charger', [
        ['hexerei:selenite_shard', 'hexerei:wax_blend', 'hexerei:selenite_shard'],
        ['minecraft:end_stone', 'minecraft:end_crystal', 'minecraft:end_stone'],
        ['#forge:obsidian', '#forge:obsidian', '#forge:obsidian']
    ])

    event.shaped('minecraft:elytra', [
        ['', 'alexsmobs:banana_slug_slime', ''],
        ['minecraft:phantom_membrane', 'createaddition:gold_wire', 'minecraft:phantom_membrane'],
        ['', 'alexsmobs:banana_slug_slime', '']
    ])

    event.shaped('kubejs:archivist_eyeglass', [
        ['', '#forge:ingots/gold', ''],
        ['createaddition:gold_wire', '#forge:glass_panes/colorless', '#forge:ingots/gold'],
        ['createaddition:gold_wire', '', '']
    ])

    event.shaped('kubejs:silk_for_cutting', [
        ['minecraft:glass', '#forge:string', 'minecraft:glass'],
        ['#forge:string', '#forge:dusts/glowstone', '#forge:string'],
        ['minecraft:glass', '#forge:string', 'minecraft:glass']
    ])

    event.shaped('kubejs:blood_extractor', [
        ['create:iron_sheet', 'create:iron_sheet', 'create:iron_sheet'],
        ['create:iron_sheet', 'chestcavity:chest_opener', '#forge:dusts/glowstone'],
        ['minecraft:glass_pane', 'chestcavity:golem_cable', 'create:iron_sheet']
    ])

    event.shapeless('summoningrituals:altar', ['minecraft:wither_skeleton_skull', '#hexerei:candles', '#hexerei:candles', '#hexerei:candles', 'createaddition:electrum_sheet', 'minecraft:lectern'])

    event.shapeless('kubejs:disenchantment_paper', ['minecraft:enchanted_book', 'alexsmobs:mysterious_worm', 'goety:unholy_blood'])

    event.shaped('irons_spellbooks:scroll', [
        ['', 'kubejs:dark_stardust_fragment', ''],
        ['kubejs:dark_stardust_fragment', 'irons_spellbooks:scroll', 'kubejs:dark_stardust_fragment'],
        ['', 'kubejs:dark_stardust_fragment', '']])
        .modifyResult((grid, stack) => {
            /**@type {Internal.ItemStack} */
            let scroll = grid.find('irons_spellbooks:scroll', 0)
            if (!scroll.hasNBT()) return
            if (!scroll.nbt.ISB_Spells?.data || !scroll.nbt.ISB_Spells.data[0]) {
                return
            }
            let curScrollLevel = scroll.nbt.ISB_Spells.data[0].getInt('level') + 1
            if (curScrollLevel >= 15) {
                return
            }
            let outputNbt = scroll.nbt.copy()
            outputNbt.ISB_Spells.data[0].putInt('level', curScrollLevel)
            stack = Item.of(scroll.id, 1, outputNbt)
            return stack
        })

    event.shapeless('kubejs:paradise_regained', ['kubejs:god_consciousness', 'kubejs:god_consciousness', 'kubejs:god_consciousness'])
        .modifyResult((grid, stack) => {
            let nbt1 = grid.find('kubejs:god_consciousness', 0).nbt
            let nbt2 = grid.find('kubejs:god_consciousness', 1).nbt
            let nbt3 = grid.find('kubejs:god_consciousness', 2).nbt
            if ((nbt1?.mobType != nbt2?.mobType) && (nbt2?.mobType != nbt3?.mobType) && (nbt3?.mobType != nbt1?.mobType)) {
                stack = Item.of('kubejs:paradise_regained')
                return stack;
            }
            return;
        });

    event.shapeless('kubejs:infinity_force', ['kubejs:infinity_force', 'kubejs:infinity_force'])
        .modifyResult((grid, stack) => {
            let item1 = grid.find('kubejs:infinity_force', 0)
            let item2 = grid.find('kubejs:infinity_force', 1)
            if ((item1.nbt?.forgeTimes ?? 0) == (item2.nbt?.forgeTimes ?? 0)) {
                let forgeTimes = item1.nbt?.forgeTimes ?? 0
                stack = Item.of('kubejs:infinity_force', { forgeTimes: forgeTimes + 1 })
                return stack;
            }
            return;
        });

    event.shapeless('kubejs:lucky_cookie', ['minecraft:paper', 'minecraft:cookie'])
    event.shapeless(Item.of('kubejs:eye_of_village', 3), ['minecraft:ender_pearl', 'minecraft:emerald'])
    event.shapeless(Item.of('kubejs:eye_of_fortress', 3), ['minecraft:ender_pearl', 'minecraft:magma_cream'])
    event.shapeless(Item.of('kubejs:eye_of_dragon', 3), ['minecraft:ender_pearl', 'iceandfire:dragonbone'])
    event.shapeless('kubejs:mosquito_repellent', ['irons_spellbooks:magic_cloth', 'chestcavity:cooked_alien_organ_meat'])

    event.shapeless('chestcavity:sausage_skin', ['#kubejs:intestine'])

    event.shapeless(Item.of('chestcavity:appendix').withName(Text.gray(Text.translatable("kubejs.recipe.tip.1"))), [Ingredient.of(['@chestcavity', '#kubejs:organ']), 'biomancy:healing_additive'])
        .modifyResult((grid, stack) => {
            for (let i = 0; i <= 9; i++) {
                let organ = grid.get(i)
                if (organ && organ.hasNBT() && organ.nbt.contains('chestcavity:organ_compatibility')) {
                    return Item.of(organ.id);
                }
            }
            return;
        });


    event.shapeless('kubejs:candy_bag', ['kubejs:candy', 'kubejs:ice_candy', 'kubejs:water_candy', 'kubejs:fire_candy', 'kubejs:wind_candy'])

    event.shapeless('kubejs:lost_paradise', ['kubejs:paradise_regained', 'kubejs:god_agreement'])

    event.shaped('kubejs:empty_organ_charm', [
        ['#forge:glass', '#minecraft:logs', '#forge:glass'],
        ['#forge:glass', 'minecraft:ghast_tear', '#forge:glass'],
        ['#forge:glass', '#forge:glass', '#forge:glass']])

    event.shaped('kubejs:friend_to_the_end', [
        ['lightmanscurrency:coin_gold', '#forge:gems/diamond', 'lightmanscurrency:coin_gold'],
        ['lightmanscurrency:coin_gold', '', 'lightmanscurrency:coin_gold'],
        ['lightmanscurrency:coin_gold', 'lightmanscurrency:coin_gold', 'lightmanscurrency:coin_gold']])

    event.shaped('irons_spellbooks:silver_ring', [
        ['iceandfire:silver_ingot', 'iceandfire:silver_ingot', 'iceandfire:silver_ingot'],
        ['iceandfire:silver_ingot', '', 'iceandfire:silver_ingot'],
        ['iceandfire:silver_ingot', 'iceandfire:silver_ingot', 'iceandfire:silver_ingot']])

    event.shaped('kubejs:color_palette', [
        ['create:iron_sheet', 'create:iron_sheet', 'create:iron_sheet'],
        ['createaddition:electrum_sheet', 'create:clipboard', 'createaddition:electrum_sheet'],
        ['#forge:dyes/blue', '#forge:dyes/red', '#forge:dyes/green']])

    event.shaped('kubejs:rapier_wand', [
        ['', 'hexerei:selenite_shard', ''],
        ['', 'hexerei:selenite_shard', ''],
        ['hexerei:moon_dust', 'nameless_trinkets:moon_stone', 'hexerei:moon_dust']])


    event.shaped('kubejs:ceremonial_knife', [
        ['', 'iceandfire:silver_ingot', ''],
        ['', 'biomancy:bone_fragments', ''],
        ['biomancy:bone_fragments', 'alexsmobs:skelewag_sword', 'biomancy:bone_fragments']])

    event.shaped('kubejs:artist_wand', [
        ['', '', Item.of('graveyard:vial_of_blood', '{Blood:0.8000001f}').strongNBT()],
        ['createaddition:electrum_wire', 'minecraft:white_wool', ''],
        ['minecraft:stick', 'createaddition:electrum_wire', '']])

    event.smelting('minecraft:iron_ingot', 'kubejs:common_mineral_cluster', '5.0')
    event.blasting('minecraft:iron_ingot', 'kubejs:common_mineral_cluster', '5.0')

    event.smelting('iceandfire:silver_ingot', 'kubejs:rare_mineral_cluster', '10.0')
    event.blasting('iceandfire:silver_ingot', 'kubejs:rare_mineral_cluster', '10.0')

    event.smelting('iceandfire:silver_ingot', 'create:crushed_raw_silver', '0.1')
    event.blasting('iceandfire:silver_ingot', 'create:crushed_raw_silver', '0.1')

    event.shaped('kubejs:doppelganger', [
        ['', 'nameless_trinkets:reverse_card', ''],
        ['minecraft:totem_of_undying', 'meetyourfight:phantoplasm', 'minecraft:totem_of_undying']])

    event.shaped('kubejs:bunny_hoppers', [
        ['minecraft:rabbit_hide', 'nameless_trinkets:unknown_fragment', 'minecraft:rabbit_hide'],
        ['minecraft:rabbit_hide', '', 'minecraft:rabbit_hide'],
        ['minecraft:rabbit_foot', '', 'minecraft:rabbit_foot']])

    event.shaped('kubejs:prismarine_crown', [
        ['', 'iceandfire:siren_tear', ''],
        ['', 'kubejs:broken_prismarine_crown', ''],
        ['', 'twilightforest:charm_of_life_2', '']])

    event.shaped('kubejs:jet_propeller', [
        ['create:iron_sheet', '', 'create:iron_sheet'],
        ['createaddition:bioethanol_bucket', 'createaddition:small_light_connector', 'createaddition:bioethanol_bucket'],
        ['create:sturdy_sheet', '', 'create:sturdy_sheet']])

    event.shaped(Item.of('kubejs:operation_box', '{inventory:[{Count:1b,Slot:0b,id:"kubejs:relic_metal_plate",tag:{}},{Count:1b,Slot:8b,id:"kubejs:relic_metal_plate",tag:{}},{Count:1b,Slot:18b,id:"kubejs:relic_metal_plate",tag:{}},{Count:1b,Slot:26b,id:"kubejs:relic_metal_plate",tag:{}}]}'), [
        ['kubejs:relic_metal_plate', '#forge:shears', 'kubejs:relic_metal_plate'],
        ['create:wrench', 'wares:cardboard_box', '#forge:tools/knives'],
        ['kubejs:relic_metal_plate', 'chestcavity:chest_opener', 'kubejs:relic_metal_plate']])

    event.shaped('extraarmor:blacksmith_hammer', [
        ['minecraft:iron_ingot', 'minecraft:blackstone', 'minecraft:iron_ingot'],
        ['', 'minecraft:stick', ''],
        ['', 'minecraft:stick', '']])

    event.shapeless('kubejs:advanced_chest_opener', ['#forge:dyes/cyan', 'chestcavity:chest_opener', '#forge:dyes/cyan'])



    event.shaped('cold_sweat:boiler', [
        ['#forge:cobblestone', '#forge:cobblestone', '#forge:cobblestone'],
        ['#forge:cobblestone', '', '#forge:cobblestone'],
        ['#cold_sweat:boiler_craftable_deepslate', 'supplementaries:flint_block', '#cold_sweat:boiler_craftable_deepslate']])
})