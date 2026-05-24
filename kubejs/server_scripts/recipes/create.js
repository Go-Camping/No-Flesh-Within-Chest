ServerEvents.recipes(event => {
	function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }
	function RollingRecipe(input, output) {
		this.type = 'createaddition:rolling'
		this.input = input
		this.result = output
	}


	event.recipes.create.mixing(Fluid.of('kubejs:syrup').withAmount(50), [Fluid.of('minecraft:water').withAmount(50), 'minecraft:sugar', 'hexerei:dried_mugwort_flowers', 'hexerei:dried_belladonna_flowers']).heated()

	event.recipes.create.filling('kubejs:hamimelon_organ', ['fruitsdelight:hamimelon', Fluid.of('kubejs:syrup').withAmount(1000)])
	event.recipes.create.filling('kubejs:red_ink', ['kubejs:bad_ink', Fluid.of('hexerei:blood_fluid').withAmount(1000)])

	event.recipes.create.deploying('kubejs:telescopic_tool_arm', ['kubejs:telescopic_arm', 'nameless_trinkets:light_gloves'])
	event.recipes.create.deploying('kubejs:telescopic_arm', ['create:extendo_grip', 'biomancy:living_flesh'])

	event.recipes.create.sandpaper_polishing('kubejs:revolution_cable', 'chestcavity:golem_cable')

	event.recipes.create.compacting('kubejs:huge_lung', ['kubejs:lung_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_appendix', ['kubejs:appendix_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_muscle', ['kubejs:muscle_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_heart', ['kubejs:heart_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_intestine', ['kubejs:intestine_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_rib', ['kubejs:rib_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_spine', ['kubejs:spine_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_spleen', ['kubejs:spleen_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_stomach', ['kubejs:stomach_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_kidney', ['kubejs:kidney_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()
	event.recipes.create.compacting('kubejs:huge_liver', ['kubejs:liver_template', 'biomancy:ageing_serum', 'biomancy:enlargement_serum']).superheated()

	event.recipes.create.mixing('create:chromatic_compound', [Fluid.of('hexerei:quicksilver_fluid').withAmount(1000), 'iceandfire:ghost_ingot', '8x iceandfire:pixie_dust', '16x minecraft:brown_dye', '16x minecraft:magenta_dye', '16x minecraft:light_blue_dye', '16x minecraft:orange_dye', '16x minecraft:cyan_dye', '16x minecraft:light_gray_dye', '16x minecraft:lime_dye']).superheated()

	event.recipes.create.mechanical_crafting('kubejs:revolution_gear', [
		' SSS ',
		'SWRWS',
		'SRCRS',
		'SWRWS',
		' SSS '
	], {
		S: 'create:iron_sheet',
		W: 'createaddition:iron_wire',
		R: 'createaddition:iron_rod',
		C: 'minecraft:iron_nugget'
	})

	event.recipes.create.mechanical_crafting('kubejs:chain_armor_piece', [
		'WSWSW',
		'SWSWS',
		'WSWSW',
		'SWSWS',
		'WSWSW'
	], {
		S: 'minecraft:iron_nugget',
		W: 'createaddition:iron_wire',
	})

	event.recipes.create.mechanical_crafting('kubejs:lamellar_armor_piece', [
		'WSWSW',
		'SWSWS',
		'WSWSW',
		'SWSWS',
		'WSWSW'
	], {
		S: 'create:iron_sheet',
		W: 'createaddition:iron_wire',
	})

	event.recipes.create.mechanical_crafting('kubejs:tamagotchi', [

		' SSS ',
		'SWBWS',
		'SDCDS',
		'SWEWS',
		'AAAAA'
	], {
		B: 'create:electron_tube',
		C: 'biomancy:creator_mix',
		D: 'create:precision_mechanism',
		E: 'createaddition:connector',
		S: 'minecraft:pink_dye',
		W: 'createaddition:copper_wire',
		A: 'create:polished_rose_quartz',
	})


	event.recipes.create.mechanical_crafting('kubejs:energy_bottle_max', [
		' AAA ',
		'ABEBA',
		'ABDBA',
		'ABEBA',
		'AAAAA'
	], {
		A: 'create:polished_rose_quartz',
		B: 'createaddition:modular_accumulator',
		D: 'nameless_trinkets:experience_battery',
		E: 'minecraft:netherite_ingot',
	})

	event.recipes.create.mechanical_crafting('kubejs:aegis', [
		' DDDD',
		'DDBBB',
		'DCBAB',
		'DDBBB',
		' DDDD'
	], {
		A: Item.of('goety:iron_hide_focus', '{"Soul Cost":24}'),
		B: 'graveyard:dark_iron_ingot',
		C: Item.of('goety:bulwark_focus', '{"Soul Cost":100}'),
		D: 'create:iron_sheet',
	})

	event.recipes.create.mechanical_crafting('kubejs:mace', [
		'   A   ',
		'BBBBBBB',
		'CDDDDDC',
		'BBBBBBB',
		'   E   ',
		'   E   ',
		'   E   ',
	], {
		A: 'tetra:forged_bolt',
		B: 'create:sturdy_sheet',
		C: 'art_of_forging:forged_steel_ingot',
		D: 'create:industrial_iron_block',
		E: 'createaddition:iron_rod'
	})

	event.recipes.create.mechanical_crafting('kubejs:machine_clockwork', [
		'     A ',
		'    A A',
		' E  BAB',
		'DDDDDC ',
		' E  BAB',
		'    A A',
		'     A '
	], {
		A: 'create:brass_sheet',
		B: 'createaddition:gold_wire',
		C: 'goety:animation_core',
		D: 'createaddition:brass_rod',
		E: 'create:brass_nugget'
	})

	event.recipes.create.mechanical_crafting('kubejs:revolution_bell', [
		' AAA ',
		'ACBCA',
		'ABEBA',
		'ACDCA',
		' ADA ',
		'  D  ',
		'  F  ',
	], {
		A: '#forge:plates/brass',
		B: '#createaddition:spools',
		C: '#forge:rods/brass',
		D: 'create:minecart_coupling',
		E: 'create:clockwork_bearing',
		F: '#minecraft:anvil'
	})

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:revolution_relay')
	], 'create:iron_sheet', [
		event.recipes.create.deploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_relay', 'minecraft:repeater']),
		event.recipes.create.deploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_relay', 'minecraft:redstone']),
		event.recipes.create.deploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_relay', 'minecraft:redstone_torch']),
	]).transitionalItem('kubejs:incomplete_revolution_relay').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:revolution_delay')
	], 'create:iron_sheet', [
		event.recipes.create.deploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_delay', 'minecraft:comparator']),
		event.recipes.create.deploying('kubejs:incomplete_revolution_delay', ['kubejs:incomplete_revolution_delay', 'minecraft:redstone']),
		event.recipes.create.deploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_delay', 'minecraft:redstone_torch']),
	]).transitionalItem('kubejs:incomplete_revolution_delay').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:candy_stomach')
	], 'kubejs:stomach_template', [
		event.recipes.create.deploying('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', '#bookwyrms:scale']),
		event.recipes.create.cutting('kubejs:incomplete_stomach_template', 'kubejs:incomplete_stomach_template'),
		event.recipes.create.deploying('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', 'biomancy:living_flesh']),
		event.recipes.create.deploying('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', '#forge:dyes/pink']),
		event.recipes.create.filling('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', Fluid.of('kubejs:syrup').withAmount(500)])
	]).transitionalItem('kubejs:incomplete_stomach_template').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:candy_heart')
	], 'kubejs:heart_template', [
		event.recipes.create.deploying('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', 'irons_spellbooks:arcane_essence']),
		event.recipes.create.cutting('kubejs:incomplete_heart_template', 'kubejs:incomplete_heart_template'),
		event.recipes.create.deploying('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', 'biomancy:living_flesh']),
		event.recipes.create.deploying('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', '#forge:dyes/pink']),
		event.recipes.create.filling('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', Fluid.of('kubejs:syrup').withAmount(500)])
	]).transitionalItem('kubejs:incomplete_heart_template').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:burning_heart')
	], 'chestcavity:blaze_core', [
		event.recipes.create.cutting('kubejs:incomplete_burning_heart', 'kubejs:incomplete_burning_heart'),
		event.recipes.create.deploying('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', 'chestcavity:active_blaze_rod']),
		event.recipes.create.deploying('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', 'alexsmobs:guster_eye']),
		event.recipes.create.deploying('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', 'kubejs:fire_gem']),
		event.recipes.create.filling('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', Fluid.of('minecraft:lava').withAmount(500)])
	]).transitionalItem('kubejs:incomplete_burning_heart').loops(3)


	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:furnace_core')
	], 'chestcavity:golem_core', [
		event.recipes.create.cutting('kubejs:incomplete_furnace_core', 'kubejs:incomplete_furnace_core'),
		event.recipes.create.deploying('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', 'minecraft:iron_block']),
		event.recipes.create.deploying('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', 'minecraft:blast_furnace']),
		event.recipes.create.deploying('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', 'createaddition:connector']),
		event.recipes.create.filling('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', Fluid.of('create:honey').withAmount(500)])
	]).transitionalItem('kubejs:incomplete_furnace_core').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:compressed_oxygen_implant').withChance(70.0),
		Item.of('create:copper_sheet').withChance(30.0)
	], Item.of('create:fluid_tank').strongNBT(), [
		event.recipes.create.deploying('kubejs:incomplete_compressed_oxygen_implant', ['kubejs:incomplete_compressed_oxygen_implant', 'chestcavity:gas_bladder']),
		event.recipes.create.deploying('kubejs:incomplete_compressed_oxygen_implant', ['kubejs:incomplete_compressed_oxygen_implant', 'createaddition:electrum_sheet']),
		event.recipes.create.deploying('kubejs:incomplete_compressed_oxygen_implant', ['kubejs:incomplete_compressed_oxygen_implant', 'create:iron_sheet']),
		event.recipes.create.deploying('kubejs:incomplete_compressed_oxygen_implant', ['kubejs:incomplete_compressed_oxygen_implant', 'createaddition:zinc_sheet'])
	]).transitionalItem('kubejs:incomplete_compressed_oxygen_implant').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:glass_wand').withChance(85.0),
		Item.of('minecraft:glass_pane').withChance(10.0),
		Item.of('minecraft:glass').withChance(5.0)
	], 'unusualprehistory:opal_block', [
		event.recipes.create.deploying('kubejs:incomplete_glass_wand', ['kubejs:incomplete_glass_wand', 'alexsmobs:rainbow_glass']),
		event.recipes.create.deploying('kubejs:incomplete_glass_wand', ['kubejs:incomplete_glass_wand', 'biomancy:unstable_compound']),
		event.recipes.create.deploying('kubejs:incomplete_glass_wand', ['kubejs:incomplete_glass_wand', 'biomancy:corrosive_additive'])
	]).transitionalItem('kubejs:incomplete_glass_wand').loops(6)

	event.recipes.create.crushing([Item.of('2x minecraft:raw_iron'), Item.of('minecraft:raw_gold').withChance(0.2), Item.of('minecraft:raw_copper').withChance(0.2), Item.of('create:raw_zinc').withChance(0.2), Item.of('2x minecraft:lapis_lazuli').withChance(0.1)], 'kubejs:common_mineral_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('3x kubejs:lime_powder'), Item.of('2x kubejs:lime_powder').withChance(0.3)], 'create:limestone').processingTime(100)

	event.recipes.create.crushing([Item.of('2x iceandfire:silver_ingot'), Item.of('2x createoreexcavation:raw_redstone').withChance(0.3), Item.of('2x createoreexcavation:raw_emerald').withChance(0.2), Item.of('createoreexcavation:raw_diamond').withChance(0.1), Item.of('minecraft:netherite_scrap').withChance(0.08)], 'kubejs:rare_mineral_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('2x minecraft:netherite_scrap'), Item.of('5x minecraft:blaze_powder').withChance(0.5), Item.of('5x create:powdered_obsidian').withChance(0.4), Item.of('5x minecraft:glowstone_dust').withChance(0.45), Item.of('8x minecraft:quartz').withChance(0.6), Item.of('kubejs:nether_star_shard')], 'minecraft:nether_star').processingTime(300)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rose_quartz_muscle').withChance(80.0),
		Item.of('create:rose_quartz').withChance(20.0)
	], 'kubejs:muscle_template', [
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_muscle', ['kubejs:incomplete_rose_quartz_muscle', 'biomancy:rejuvenation_serum']),
		event.recipes.create.cutting('kubejs:incomplete_rose_quartz_muscle', 'kubejs:incomplete_rose_quartz_muscle'),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_muscle', ['kubejs:incomplete_rose_quartz_muscle', 'minecraft:rose_bush']),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_muscle', ['kubejs:incomplete_rose_quartz_muscle', 'create:polished_rose_quartz'])
	]).transitionalItem('kubejs:incomplete_rose_quartz_muscle').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rose_quartz_liver').withChance(80.0),
		Item.of('create:rose_quartz').withChance(20.0)
	], 'kubejs:liver_template', [
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_liver', ['kubejs:incomplete_rose_quartz_liver', 'biomancy:cleansing_serum']),
		event.recipes.create.cutting('kubejs:incomplete_rose_quartz_liver', 'kubejs:incomplete_rose_quartz_liver'),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_liver', ['kubejs:incomplete_rose_quartz_liver', 'minecraft:rose_bush']),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_liver', ['kubejs:incomplete_rose_quartz_liver', 'create:polished_rose_quartz'])
	]).transitionalItem('kubejs:incomplete_rose_quartz_liver').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rose_quartz_heart').withChance(80.0),
		Item.of('create:rose_quartz').withChance(20.0)
	], 'kubejs:heart_template', [
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_heart', ['kubejs:incomplete_rose_quartz_heart', 'biomancy:absorption_boost']),
		event.recipes.create.cutting('kubejs:incomplete_rose_quartz_heart', 'kubejs:incomplete_rose_quartz_heart'),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_heart', ['kubejs:incomplete_rose_quartz_heart', 'minecraft:rose_bush']),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_heart', ['kubejs:incomplete_rose_quartz_heart', 'create:polished_rose_quartz'])
	]).transitionalItem('kubejs:incomplete_rose_quartz_heart').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rose_quartz_dialyzer').withChance(80.0),
		Item.of('create:rose_quartz').withChance(20.0)
	], 'kubejs:kidney_template', [
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_dialyzer', ['kubejs:incomplete_rose_quartz_dialyzer', 'biomancy:absorption_boost']),
		event.recipes.create.cutting('kubejs:incomplete_rose_quartz_dialyzer', 'kubejs:incomplete_rose_quartz_dialyzer'),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_dialyzer', ['kubejs:incomplete_rose_quartz_dialyzer', 'minecraft:rose_bush']),
		event.recipes.create.deploying('kubejs:incomplete_rose_quartz_dialyzer', ['kubejs:incomplete_rose_quartz_dialyzer', 'create:polished_rose_quartz'])
	]).transitionalItem('kubejs:incomplete_rose_quartz_dialyzer').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:lava_life_cycle_system').withChance(75.0),
		Item.of('chestcavity:iron_scrap').withChance(25.0)
	], 'art_of_forging:forged_steel_ingot', [
		event.recipes.create.pressing('kubejs:incomplete_lava_life_cycle_system', 'kubejs:incomplete_lava_life_cycle_system'),
		event.recipes.create.pressing('kubejs:incomplete_lava_life_cycle_system', 'kubejs:incomplete_lava_life_cycle_system'),
		event.recipes.create.deploying('kubejs:incomplete_lava_life_cycle_system', ['kubejs:incomplete_lava_life_cycle_system', 'create:fluid_tank']),
		event.recipes.create.deploying('kubejs:incomplete_lava_life_cycle_system', ['kubejs:incomplete_lava_life_cycle_system', 'create:precision_mechanism']),
		event.recipes.create.filling('kubejs:incomplete_lava_life_cycle_system', ['kubejs:incomplete_lava_life_cycle_system', Fluid.of('minecraft:lava').withAmount(1000)])
	]).transitionalItem('kubejs:incomplete_lava_life_cycle_system').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:revolution_steam_engine').withChance(90.0),
		Item.of('chestcavity:iron_scrap').withChance(10.0)
	], 'create:steam_engine', [
		event.recipes.create.deploying('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', 'art_of_forging:forged_steel_ingot']),
		event.recipes.create.deploying('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', 'kubejs:relic_metal_plate']),
		event.recipes.create.filling('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', Fluid.of('minecraft:water').withAmount(500)]),
		event.recipes.create.filling('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', Fluid.of('minecraft:lava').withAmount(500)])
	]).transitionalItem('kubejs:incomplete_revolution_steam_engine').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:cream_cookie_heart').withChance(50.0),
		Item.of('minecraft:cookie').withChance(50.0)
	], Ingredient.of('#kubejs:is_cookie_block'), [
		event.recipes.create.pressing('minecraft:cookie', 'minecraft:cookie'),
		event.recipes.create.cutting('minecraft:cookie', 'minecraft:cookie'),
		event.recipes.create.filling('minecraft:cookie', ['minecraft:cookie', Fluid.of('kubejs:cream').withAmount(500)]),
		event.recipes.create.pressing('minecraft:cookie', 'minecraft:cookie'),
		event.recipes.create.cutting('minecraft:cookie', 'minecraft:cookie')
	]).transitionalItem('minecraft:cookie').loops(1)

	event.recipes.create.crushing([Item.of('minecraft:emerald'), Item.of('minecraft:emerald').withChance(0.5)], 'geodes:emerald_crystal_block').processingTime(100)
	event.recipes.create.crushing([Item.of('4x minecraft:emerald'), Item.of('minecraft:emerald').withChance(0.3)], 'geodes:emerald_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('minecraft:lapis_lazuli'), Item.of('minecraft:lapis_lazuli').withChance(0.5)], 'geodes:lapis_crystal_block').processingTime(100)
	event.recipes.create.crushing([Item.of('4x minecraft:lapis_lazuli'), Item.of('minecraft:lapis_lazuli').withChance(0.3)], 'geodes:lapis_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('3x geodes:pyrite_chunk'), Item.of('geodes:pyrite_chunk').withChance(0.5)], 'geodes:pyrite').processingTime(100)

	event.recipes.create.crushing([Item.of('minecraft:quartz'), Item.of('minecraft:quartz').withChance(0.5)], 'geodes:quartz_crystal_block').processingTime(100)
	event.recipes.create.crushing([Item.of('4x minecraft:quartz'), Item.of('minecraft:quartz').withChance(0.3)], 'geodes:quartz_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('minecraft:diamond'), Item.of('minecraft:diamond').withChance(0.5)], 'geodes:diamond_crystal_block').processingTime(100)
	event.recipes.create.crushing([Item.of('4x minecraft:diamond'), Item.of('minecraft:diamond').withChance(0.3)], 'geodes:diamond_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('minecraft:echo_shard'), Item.of('minecraft:echo_shard').withChance(0.5)], 'geodes:echo_block').processingTime(100)
	event.recipes.create.crushing([Item.of('4x minecraft:echo_shard'), Item.of('minecraft:echo_shard').withChance(0.3)], 'geodes:echo_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('geodes:gypsum_shard'), Item.of('geodes:gypsum_shard').withChance(0.5)], 'geodes:gypsum_crystal_block').processingTime(100)
	event.recipes.create.crushing([Item.of('4x geodes:gypsum_shard'), Item.of('geodes:gypsum_shard').withChance(0.3)], 'geodes:gypsum_rose').processingTime(100)

	event.recipes.create.crushing([Item.of('hexerei:selenite_shard'), Item.of('hexerei:selenite_shard').withChance(0.5)], 'hexerei:selenite_block').processingTime(100)
	event.recipes.create.crushing([Item.of('4x hexerei:selenite_shard'), Item.of('hexerei:selenite_shard').withChance(0.3)], 'hexerei:selenite_cluster').processingTime(100)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:relic_metal_ingot').withChance(80.0),
		Item.of('tetra:metal_scrap').withChance(20.0)
	], 'art_of_forging:forged_steel_ingot', [
		event.recipes.create.deploying('kubejs:incomplete_relic_metal_ingot', ['kubejs:incomplete_relic_metal_ingot', 'kubejs:relic_metal_plate']),
		event.recipes.create.pressing('kubejs:incomplete_relic_metal_ingot', 'kubejs:incomplete_relic_metal_ingot'),
		event.recipes.create.deploying('kubejs:incomplete_relic_metal_ingot', ['kubejs:incomplete_relic_metal_ingot', 'kubejs:relic_metal_plate']),
		event.recipes.create.pressing('kubejs:incomplete_relic_metal_ingot', 'kubejs:incomplete_relic_metal_ingot'),
		event.recipes.create.deploying('kubejs:incomplete_relic_metal_ingot', ['kubejs:incomplete_relic_metal_ingot', 'kubejs:relic_metal_plate']),
		event.recipes.create.cutting('kubejs:incomplete_relic_metal_ingot', 'kubejs:incomplete_relic_metal_ingot')
	]).transitionalItem('kubejs:incomplete_relic_metal_ingot').loops(5)

	event.recipes.create.sandpaper_polishing('kubejs:polished_amber', 'unusualprehistory:amber_shard')

	event.recipes.create.splashing(['9x iceandfire:silver_nugget', Item.of('minecraft:glowstone_dust').withChance(0.3)], 'create:crushed_raw_silver')

	registerCustomRecipe(new RollingRecipe(Item.of('minecraft:tinted_glass'), Item.of('biomancy:vial').withCount(3)))
})
