ServerEvents.recipes(event => {
  // ── Vein Definitions ─────────────────────────────────────────────────────
  // Create Ore Excavation 1.20.1 API: veins must be defined separately from
  // drilling recipes. placement(spacing, separation, salt) controls spawn rate.
  // Migrated from the 4-parameter inline API used in 1.19.

  event.recipes.createoreexcavation
    .vein('{"text": "银矿"}', 'iceandfire:silver_ore')
    .alwaysInfinite()
    .placement(1024, 256, 11111)
    .biomeWhitelist('minecraft:is_overworld')
    .id('kubejs:vein_silver');

  event.recipes.createoreexcavation
    .vein('{"text": "青金石矿"}', 'minecraft:lapis_lazuli')
    .alwaysInfinite()
    .placement(512, 128, 22222)
    .biomeWhitelist('minecraft:is_overworld')
    .id('kubejs:vein_lapis');

  event.recipes.createoreexcavation
    .vein('{"text": "下界金矿"}', 'minecraft:gold_nugget')
    .alwaysInfinite()
    .placement(256, 64, 33333)
    .biomeWhitelist('minecraft:is_nether')
    .id('kubejs:vein_nether_gold');

  event.recipes.createoreexcavation
    .vein('{"text": "远古残骸矿"}', 'minecraft:ancient_debris')
    .alwaysInfinite()
    .placement(2048, 512, 44444)
    .biomeWhitelist('minecraft:is_nether')
    .id('kubejs:vein_netherite');

  event.recipes.createoreexcavation
    .vein('{"text": "奥术残骸矿"}', 'irons_spellbooks:arcane_debris')
    .alwaysInfinite()
    .placement(2048, 512, 55555)
    .biomeWhitelist('minecraft:is_overworld')
    .id('kubejs:vein_arcane');

  event.recipes.createoreexcavation
    .vein('{"text": "熔岩 (主世界)"}', 'minecraft:lava')
    .alwaysInfinite()
    .placement(256, 64, 66666)
    .biomeWhitelist('minecraft:is_overworld')
    .id('kubejs:vein_lava_overworld');

  event.recipes.createoreexcavation
    .vein('{"text": "熔岩 (下界)"}', 'minecraft:lava')
    .alwaysInfinite()
    .placement(128, 32, 77777)
    .biomeWhitelist('minecraft:is_nether')
    .id('kubejs:vein_lava_nether');

  event.recipes.createoreexcavation
    .vein('{"text": "水银"}', 'hexerei:quicksilver_fluid')
    .alwaysInfinite()
    .placement(1024, 256, 88888)
    .biomeWhitelist('minecraft:is_overworld')
    .id('kubejs:vein_quicksilver');

  // ── Drilling Recipes ──────────────────────────────────────────────────────
  // New signature: drilling(output(s), vein_id, extraction_time_at_32rpm)
  // Chance outputs now use coeutil.processingOutput(item, chance_0_to_1).

  event.recipes.createoreexcavation
    .drilling('iceandfire:silver_ore', 'kubejs:vein_silver', 600)
    .drill('createoreexcavation:diamond_drill')
    .stress(384)
    .id('kubejs:drilling_silver');

  event.recipes.createoreexcavation
    .drilling('minecraft:lapis_lazuli', 'kubejs:vein_lapis', 400)
    .stress(256)
    .id('kubejs:drilling_lapis');

  event.recipes.createoreexcavation
    .drilling('minecraft:gold_nugget', 'kubejs:vein_nether_gold', 100)
    .stress(192)
    .id('kubejs:drilling_nether_gold');

  event.recipes.createoreexcavation
    .drilling([
      coeutil.processingOutput('minecraft:ancient_debris', 0.3),
      coeutil.processingOutput('minecraft:gold_nugget', 0.8),
      coeutil.processingOutput('minecraft:netherrack', 0.8),
      coeutil.processingOutput('minecraft:magma_block', 0.5)
    ], 'kubejs:vein_netherite', 4000)
    .drill('createoreexcavation:netherite_drill')
    .stress(2048)
    .fluid('minecraft:lava 500')
    .id('kubejs:drilling_netherite');

  event.recipes.createoreexcavation
    .drilling([
      coeutil.processingOutput('irons_spellbooks:arcane_debris', 0.3),
      coeutil.processingOutput('irons_spellbooks:arcane_essence', 0.8),
      coeutil.processingOutput('irons_spellbooks:cinder_essence', 0.5)
    ], 'kubejs:vein_arcane', 4000)
    .drill('createoreexcavation:netherite_drill')
    .stress(2048)
    .fluid('hexerei:quicksilver_fluid 50')
    .id('kubejs:drilling_arcane');

  // ── Fluid Extraction Recipes ──────────────────────────────────────────────
  // New signature: extracting(fluid_output, vein_id, extraction_time_at_32rpm)

  event.recipes.createoreexcavation
    .extracting('minecraft:lava 500', 'kubejs:vein_lava_overworld', 100)
    .drill('createoreexcavation:diamond_drill')
    .stress(512)
    .id('extracting_lava_overworld');

  event.recipes.createoreexcavation
    .extracting('minecraft:lava 1000', 'kubejs:vein_lava_nether', 100)
    .drill('createoreexcavation:diamond_drill')
    .stress(512)
    .id('extracting_lava_nether');

  event.recipes.createoreexcavation
    .extracting('hexerei:quicksilver_fluid 250', 'kubejs:vein_quicksilver', 800)
    .drill('createoreexcavation:diamond_drill')
    .stress(640)
    .id('extracting_quicksilver');
})
