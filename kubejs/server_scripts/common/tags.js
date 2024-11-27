ServerEvents.tags('worldgen/structure', event => {
  event.add('kubejs:fortress_locator', 'minecraft:fortress')
  event.add('kubejs:graveyard', ['graveyard:altar', 'graveyard:crypt', 'graveyard:dead_tree', 'graveyard:giant_mushroom', 'graveyard:haunted_house', 'graveyard:large_graveyard', 'graveyard:lich_prison', 'graveyard:medium_graveyard', 'graveyard:memorial_tree', 'graveyard:mushroom_grave', 'graveyard:ruins', 'graveyard:small_desert_grave', 'graveyard:small_desert_graveyard', 'graveyard:small_grave', 'graveyard:small_graveyard', 'graveyard:small_mountain_grave', 'graveyard:small_savanna_grave', 'graveyard_biomes:mushroom_structure'])
})



ServerEvents.tags('item', event => {
  event.add('kubejs:rain_ritual', ['minecraft:apple', 'minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'create:honeyed_apple'])

  event.add('kubejs:chest_opener', ['chestcavity:chest_opener', 'kubejs:advanced_chest_opener'])

  event.add('kubejs:magnificent_focus', ['minecraft:nether_star'])
  event.add('kubejs:candy_focus', ['kubejs:candy_bag'])
  event.add('irons_spellbooks:school_focus', ['minecraft:nether_star', 'kubejs:candy_bag'])

  event.add('kubejs:isb_spell_book', ['irons_spellbooks:wimpy_spell_book', 'irons_spellbooks:legendary_spell_book', 'irons_spellbooks:netherite_spell_book', 'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:gold_spell_book', 'irons_spellbooks:iron_spell_book', 'irons_spellbooks:copper_spell_book', 'irons_spellbooks:rotten_spell_book', 'irons_spellbooks:blaze_spell_book', 'irons_spellbooks:dragonskin_spell_book', 'irons_spellbooks:druidic_spell_book', 'irons_spellbooks:villager_spell_book', 'irons_spellbooks:blood_staff', 'irons_spellbooks:evoker_spell_book', 'irons_spellbooks:necronomicon_spell_book', 'kubejs:command_spell_book'])

  event.add('curios:body', ['supplementaries:quiver'])


  event.add('kubejs:lung', ['chestcavity:lung', 'chestcavity:rotten_lung', 'chestcavity:animal_lung', 'chestcavity:llama_lung', 'chestcavity:fireproof_lung', 'chestcavity:small_animal_lung', 'chestcavity:insect_lung', 'chestcavity:ender_lung', 'chestcavity:dragon_lung', 'chestcavity:saltwater_lung', 'chestcavity:gas_bladder'])

  event.add('kubejs:intestine', ['chestcavity:carnivore_intestine', 'chestcavity:herbivore_intestine', 'chestcavity:insect_intestine', 'chestcavity:ender_intestine', 'chestcavity:intestine', 'chestcavity:rotten_intestine', 'chestcavity:small_animal_intestine', 'chestcavity:small_carnivore_intestine', 'chestcavity:small_herbivore_intestine', 'chestcavity:animal_intestine', 'chestcavity:fireproof_intestine'])

  event.add('kubejs:is_cookie', ['extradelight:apple_cookie', 'extradelight:gingerbread_cookie', 'extradelight:glow_berry_cookie', 'extradelight:sugar_cookie', 'extradelight:pumpkin_cookie', 'farmersdelight:honey_cookie', 'minecraft:cookie', 'farmersdelight:sweet_berry_cookie', 'extradelight:sugar_cookie_steve', 'extradelight:sugar_cookie_alex', 'extradelight:sugar_cookie_villager', 'extradelight:sugar_cookie_emerald', 'extradelight:sugar_cookie_pickaxe', 'extradelight:sugar_cookie_diamond', 'extradelight:sugar_cookie_sword', 'extradelight:sugar_cookie_creeper'])
  event.add('kubejs:is_cookie_block', ['extradelight:chocolate_chip_cookie_block_item', 'extradelight:gingerbread_cookie_block_item', 'extradelight:sweet_berry_cookie_block_item', 'extradelight:apple_cookie_block_item', 'extradelight:sugar_cookie_block_item', 'extradelight:pumpkin_cookie_block_item', 'extradelight:honey_cookie_block_item', 'extradelight:glow_berry_cookie_block_item'])
  event.add('forge:bones/dragon', ['iceandfire:dragonbone'])
  event.add('forge:bones/wither', ['iceandfire:witherbone'])
  event.add('biomancy:cannot_be_eaten_by_cradle', ['weaponmaster:wm_broadswordlarge', 'weaponmaster:wm_broadsword', 'weaponmaster:wm_rapier', 'weaponmaster:wm_rapierlarge'])
  event.add('iceandfire:scales/myrmex', ['iceandfire:myrmex_jungle_chitin', 'iceandfire:myrmex_desert_chitin'])
  event.add('iceandfire:scales/deathworm', ['iceandfire:deathworm_chitin_white', 'iceandfire:deathworm_chitin_red', 'iceandfire:deathworm_chitin_yellow'])
  event.add('iceandfire:dragon_food_meat', ['minecraft:rabbit', 'minecraft:cooked_rabbit', 'chestcavity:raw_butchered_meat', 'chestcavity:cooked_butchered_meat', 'chestcavity:raw_man_meat', 'chestcavity:cooked_man_meat', 'alexsmobs:kangaroo_meat', 'alexsmobs:cooked_kangaroo_meat', 'unusualprehistory:cooked_coty', 'unusualprehistory:raw_coty', 'unusualprehistory:cooked_mammoth', 'unusualprehistory:raw_mammoth', 'bookwyrms:book_wyrm_cooked', 'bookwyrms:book_wyrm_raw', 'unusualprehistory:cooked_stetha', 'unusualprehistory:raw_stetha', 'unusualprehistory:cooked_austro', 'unusualprehistory:raw_austro', 'unusualprehistory:raw_scau', 'unusualprehistory:cooked_scau', 'alexsmobs:cooked_catfish', 'alexsmobs:raw_catfish', 'minecraft:cod', 'minecraft:cooked_cod', 'minecraft:cooked_salmon', 'minecraft:salmon'])

  event.add('kubejs:machine', ['chestcavity:golem_cable', 'chestcavity:golem_plating', 'chestcavity:golem_core', 'chestcavity:inner_furnace', 'chestcavity:piston_muscle'])

  event.add('forge:beef/oxtail', ['minecraft:cooked_beef'])

  event.add('forge:sausage/cooked', ['chestcavity:rich_mini_sausage', 'chestcavity:rich_sausage', 'chestcavity:rich_toxic_sausage', 'chestcavity:rich_dragon_sausage', 'chestcavity:alien_sausage', 'chestcavity:dragon_sausage', 'kubejs:brown_sauce_braised_intestines', 'chestcavity:sausage', 'chestcavity:mini_sausage', 'chestcavity:rich_human_sausage', 'chestcavity:rich_alien_sausage', 'chestcavity:human_sausage', 'chestcavity:toxic_sausage'])

  event.add('forge:sausage', ['chestcavity:raw_sausage', 'chestcavity:sausage', 'chestcavity:raw_rich_sausage', 'chestcavity:rich_sausage', 'chestcavity:raw_mini_sausage', 'chestcavity:mini_sausage', 'chestcavity:raw_rich_mini_sausage', 'chestcavity:rich_mini_sausage', 'chestcavity:rotten_sausage', 'chestcavity:raw_toxic_sausage', 'chestcavity:toxic_sausage', 'chestcavity:raw_rich_toxic_sausage', 'chestcavity:rich_toxic_sausage', 'chestcavity:raw_human_sausage', 'chestcavity:human_sausage', 'chestcavity:raw_rich_human_sausage', 'chestcavity:rich_human_sausage', 'chestcavity:raw_alien_sausage', 'chestcavity:alien_sausage', 'chestcavity:raw_rich_alien_sausage', 'chestcavity:rich_alien_sausage', 'chestcavity:raw_dragon_sausage', 'chestcavity:dragon_sausage', 'chestcavity:raw_rich_dragon_sausage', 'chestcavity:rich_dragon_sausage', 'kubejs:brown_sauce_braised_intestines'])

  event.add('forge:rabbit/ground/raw', ['minecraft:rabbit'])

  const baseorgan = event.get('chestcavity:salvageable').getObjectIds()
  baseorgan.forEach(organ => {
    event.add('kubejs:organ', organ)
  })

})