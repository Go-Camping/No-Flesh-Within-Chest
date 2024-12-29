// priority: 1000
const resourceCount = 'resourceCount'
const resourceCountMax = 'resourceCountMax'
const defaultResourceMax = 100
const warpCount = 'warpCount'
const warpCountMax = 'warpCountMax'
const defaultWarpMax = 100
const organActive = 'organActive'
const criticalPunch = 'criticalPunch'
const criticalPunchMaxCount = 10

const bossTypeList = [
    'somebosses:aesegull',
    'somebosses:prismarine_watcher',
    'somebosses:froverlord',
    'somebosses:volcanium',
    'somebosses:merciless_assasin',
    'somebosses:dark_mask',
    'somebosses:knight_garent',
    'somebosses:vulcan',
    'somebosses:ancient_wizard',
    'somebosses:man_of_water',
    'somebosses:flaming_berserker',
    'somebosses:electric_head',
    'somebosses:frost_magma',
    'somebosses:stone_guard',
    'somebosses:crimson_vampire',
    'somebosses:skeleton_demon',
    'somebosses:mono_eyed_skeleton',
    'somebosses:hand_head',
    'somebosses:ender_ordnance',
    'somebosses:nameless_one',
    'somebosses:sand_giant',
    "somebosses:rib_golem",
    'cataclysm:netherite_monstrosity',
    'cataclysm:ender_guardian',
    'cataclysm:ignis',
    'cataclysm:the_harbinger',
    'cataclysm:the_leviathan',
    'cataclysm:ancient_remnant',
    'bosses_of_mass_destruction:void_blossom',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:gauntlet',
    'bosses_of_mass_destruction:obsidilith',
    'meetyourfight:bellringer',
    'meetyourfight:rosalyne',
    'meetyourfight:swampjaw',
    'meetyourfight:dame_fortuna',
    'invasioncodered:gashslit',
    'irons_spellbooks:dead_king_corpse',
    "goety:apostle",
    "goety:vizier",
    "graveyard:lich",
    "minecraft:ender_dragon",
    "minecraft:wither",
    'twilightforest:naga',
    'twilightforest:lich',
    'twilightforest:hydra',
    'twilightforest:ur_ghast',
    // 'twilightforest:yeti_alpha',
    'twilightforest:snow_queen',
    'twilightforest:knight_phantom',
    'twilightforest:minoshroom',
]

const bossesOfMassDestructionBossTypeList = [
    'bosses_of_mass_destruction:void_blossom',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:gauntlet',
    'bosses_of_mass_destruction:obsidilith',
]
const worldOfBossTypeList = [
    'somebosses:aesegull',
    'somebosses:prismarine_watcher',
    'somebosses:froverlord',
    'somebosses:volcanium',
    'somebosses:merciless_assasin',
    'somebosses:dark_mask',
    'somebosses:knight_garent',
    'somebosses:vulcan',
    'somebosses:ancient_wizard',
    'somebosses:man_of_water',
    'somebosses:flaming_berserker',
    'somebosses:electric_head',
    'somebosses:frost_magma',
    'somebosses:stone_guard',
    'somebosses:crimson_vampire',
    'somebosses:skeleton_demon',
    'somebosses:mono_eyed_skeleton',
    'somebosses:hand_head',
    'somebosses:ender_ordnance',
    'somebosses:nameless_one',
    'somebosses:sand_giant',
    "somebosses:rib_golem",
]


const tumorAttriButeByD8 = [
    { name: 'chestcavity:filtration', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:breath_recovery', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:nutrition', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:nerves', multi: 1, max: 5 },
    { name: 'chestcavity:strength', multi: 1, max: 5 },
    { name: 'chestcavity:breath_capacity', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:detoxification', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:speed', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:endurance', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:defense', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:digestion', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:metabolism', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:fire_resistant', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:knockback_resistant', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:water_breath', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:burning_point', multi: 1, max: 8 },
    { name: 'chestcavity:freezing_point', multi: 1, max: 8 },
]

const tumorAttriButeByNeuron = [
    { name: 'chestcavity:filtration', multi: 0.5, max: 3 },
    { name: 'chestcavity:breath_recovery', multi: 0.5, max: 3 },
    { name: 'chestcavity:nutrition', multi: 0.5, max: 3 },
    { name: 'chestcavity:nerves', multi: 1, max: 6 },
    { name: 'chestcavity:strength', multi: 1, max: 6 },
    { name: 'chestcavity:breath_capacity', multi: 0.5, max: 3 },
    { name: 'chestcavity:detoxification', multi: 0.5, max: 3 },
    { name: 'chestcavity:speed', multi: 0.5, max: 3 },
    { name: 'chestcavity:endurance', multi: 0.5, max: 3 },
    { name: 'chestcavity:defense', multi: 0.5, max: 3 },
    { name: 'chestcavity:digestion', multi: 0.5, max: 3 },
    { name: 'chestcavity:metabolism', multi: 0.5, max: 3 },
    { name: 'chestcavity:fire_resistant', multi: 0.5, max: 3 },
    { name: 'chestcavity:knockback_resistant', multi: 0.5, max: 3 },
    { name: 'chestcavity:water_breath', multi: 0.5, max: 3 },
    { name: 'chestcavity:health', multi: 0.5, max: 3 },
    { name: 'chestcavity:burning_point', multi: 1, max: 10 },
    { name: 'chestcavity:freezing_point', multi: 1, max: 10 },
]

const potooBeakSoundMap = {
    'metal': { soundEvent: 'kubejs:beak_metal', pitch: 1, minimumVolume: 0.5 },
    'mangrove_roots': { soundEvent: 'kubejs:beak_mangrove_roots', pitch: 1, minimumVolume: 0.5 },
}

const difficultLevelDef = [
    { healthMulti: 1, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 2, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 3, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 5, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 10, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 20, attackMulti: 2, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 30, attackMulti: 3, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 50, attackMulti: 4, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 100, attackMulti: 5, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 300, attackMulti: 6, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 500, attackMulti: 7, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 1000, attackMulti: 8, armorMulti: 3, toughnessMulti: 3 },
]

const curseEnchantList = [
    'cursery:curse_electrified',
    'cursery:curse_switchy',
    'cursery:curse_illusion',
    'cursery:curse_undead',
    'cursery:curse_laddering',
    'cursery:curse_hungryhealth',
    'cursery:curse_slowness',
    'cursery:curse_poison',
    'cursery:curse_steelfeet',
    'cursery:curse_heavy_enchant',
    'cursery:curse_recoil',
    'cursery:curse_stubby',
    'cursery:curse_hurtful',
    'cursery:curse_loose',
    'cursery:curse_weakness',
    'cursery:curse_hungry',
    'cursery:curse_anvil',
    'cursery:curse_blindness',
    "chestcavity:malpractice",
    'minecraft:vanishing_curse',
    'minecraft:binding_curse',
]

const grudgeCurseEnchantList = [
    'cursery:curse_electrified',
    'cursery:curse_switchy',
    'cursery:curse_illusion',
    'cursery:curse_undead',
    'cursery:curse_laddering',
    'cursery:curse_hungryhealth',
    'cursery:curse_slowness',
    'cursery:curse_poison',
    'cursery:curse_steelfeet',
    'cursery:curse_heavy_enchant',
    'cursery:curse_recoil',
    'cursery:curse_stubby',
    'cursery:curse_hurtful',
    'cursery:curse_loose',
    'cursery:curse_weakness',
    'cursery:curse_hungry',
    'cursery:curse_anvil',
    'cursery:curse_blindness',
    "chestcavity:malpractice",
]

const trinketList = ['nameless_trinkets:reforger', 'nameless_trinkets:true_heart_of_the_sea', 'nameless_trinkets:dragons_eye', 'nameless_trinkets:spider_legs', 'nameless_trinkets:sleeping_pills', 'nameless_trinkets:moon_stone', 'nameless_trinkets:nelumbo', 'nameless_trinkets:dark_nelumbo', 'nameless_trinkets:super_magnet', 'nameless_trinkets:rage_mind', 'nameless_trinkets:puffer_fish_liver', 'nameless_trinkets:lucky_rock', 'nameless_trinkets:vampire_blood', 'nameless_trinkets:speed_force', 'nameless_trinkets:tick', 'nameless_trinkets:ghast_eye', 'nameless_trinkets:cracked_crown', 'nameless_trinkets:ethereal_wings', 'nameless_trinkets:blindfold', 'nameless_trinkets:ice_cube', 'nameless_trinkets:blaze_nucleus', 'nameless_trinkets:wooden_stick', 'nameless_trinkets:tear_of_the_sea', 'nameless_trinkets:gods_crown', 'nameless_trinkets:fertilizer', 'nameless_trinkets:sigil_of_baphomet', 'nameless_trinkets:amphibious_hands', 'nameless_trinkets:fragile_cloud', 'nameless_trinkets:light_gloves', 'nameless_trinkets:fate_emerald', 'nameless_trinkets:scarab_amulet', 'nameless_trinkets:pocket_lightning_rod', 'nameless_trinkets:fractured_nullstone', 'nameless_trinkets:electric_paddle', 'nameless_trinkets:reverse_card', 'nameless_trinkets:missing_page', 'nameless_trinkets:broken_magnet', 'nameless_trinkets:experience_magnet', 'nameless_trinkets:experience_battery', 'nameless_trinkets:what_magnet', 'nameless_trinkets:callus']


const coeVeinList = [
    'createoreexcavation:drilling/coal',
    'createoreexcavation:drilling/copper',
    'createoreexcavation:drilling/diamond',
    'createoreexcavation:drilling/emerald',
    'createoreexcavation:drilling/glowstone',
    'createoreexcavation:drilling/gold',
    'createoreexcavation:drilling/hardened_diamond',
    'createoreexcavation:drilling/iron',
    'createoreexcavation:drilling/quartz',
    'createoreexcavation:drilling/redstone',
    'createoreexcavation:drilling/zinc',
    'createoreexcavation:drilling/water',
    'kubejs:drilling_arcane',
    'kubejs:drilling_lapis',
    'kubejs:drilling_nether_gold',
    'kubejs:drilling_netherite',
    'kubejs:drilling_silver',
    'minecraft:extracting_lava_nether',
    'minecraft:extracting_quicksilver',
    'minecraft:extracting_lava_overworld'
]

const treasureDetectorTableMap = {
    'minecraft:overworld': {
        0: "minecraft:chests/abandoned_mineshaft",
        5: "minecraft:chests/simple_dungeon",
        10: "minecraft:chests/desert_pyramid",
        15: "minecraft:chests/buried_treasure",
        20: "minecraft:chests/ancient_city",
        25: "dungeons_arise:chests/aviary/aviary_treasure",
        '-1': "dungeons_arise:chests/foundry/foundry_treasure"
    },
    'minecraft:the_nether': {
        0: "minecraft:chests/nether_fortress/fort_inside_generic",
        8: "minecraft:chests/bastion_bridge",
        12: "minecraft:chests/bastion_treasure",
        '-1': "dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure"
    },
    'minecraft:the_end': {
        0: "minecraft:chests/end_city_treasure",
        '-1': "minecraft:chests/end_city_treasure"
    }
}

const machineChestLootTable = ['kubejs:platelet_dispatcher', 'kubejs:lowlight_vision', 'kubejs:revolution_relay', 'kubejs:revolution_delay', 'kubejs:rose_quartz_muscle', 'kubejs:revolution_cable', 'kubejs:revolution_gear', 'kubejs:rose_quartz_dialyzer', 'kubejs:rose_quartz_liver', 'kubejs:rose_quartz_heart', 'kubejs:revolution_steam_engine', 'kubejs:lava_life_cycle_system', 'kubejs:energy_bottle_max', 'kubejs:aegis', 'kubejs:mace', 'kubejs:machine_clockwork', 'kubejs:tamagotchi', 'kubejs:jet_propeller', 'kubejs:platelet_dispatcher', 'kubejs:compressed_oxygen_implant']

const warpFoodMap = {
    'cataclysm:blessed_amethyst_crab_meat': {
        count: -3,
        chance: 1,
    },
    'minecraft:enchanted_golden_apple': {
        count: -1,
        chance: 1,
    },
    'chestcavity:raw_man_meat': {
        count: 1,
        chance: 0.1,
    },
    'extradelight:bad_food': {
        count: 1,
        chance: 0.05,
    },
}

const tagWorth = {
    '#kubejs:organ': 1,
    '#kubejs:stomach': 10,
    '#kubejs:eat_effect': 30,
    '#kubejs:infinity': 300,
    '#kubejs:damage_only': 100,
    '#kubejs:active_only': 100,
    '#kubejs:loot_entity_only': 500, 
    '#kubejs:muscle': 10,
    '#kubejs:rose': 50,
    '#kubejs:active': 50,
    '#kubejs:heart': 50,
    '#kubejs:liver': 10,
    '#kubejs:kidney': 40,
    '#kubejs:machine': 30,
    '#kubejs:revolution': 50,
    '#kubejs:rclick_only': 80,
    '#kubejs:player_tick_only': 100,
    '#kubejs:lung': 40,
    '#kubejs:resource': 100,
    '#kubejs:key_pressed': 100,
    '#kubejs:spleen': 40,
    '#kubejs:player_tick': 30,
    '#kubejs:eat_effect_only': 60,
    '#kubejs:candy': 100,
    '#kubejs:pancreas': 30,
    '#kubejs:magic': 80,
    '#kubejs:overmagic_only': 100,
    '#kubejs:spine': 50,
    '#kubejs:bear': 90,
    '#kubejs:break_only': 70,
    '#kubejs:break': 50,
    '#kubejs:appendix': 100,
    '#kubejs:legends': 800,
    '#kubejs:evolution': 50,
    '#kubejs:bear_only': 150,
    '#kubejs:loot_chest_only': 500,
    '#kubejs:enchant_only': 400,
    '#kubejs:warp': 300,
    '#kubejs:organ_count_only': 70,
    '#kubejs:relics': 5,
    '#kubejs:rib': 20,
    '#kubejs:intestine': 15,
    '#kubejs:on_fire_check': 50,
    '#kubejs:auto_active': 100,
    '#kubejs:exclued_lucky_block': 77,
    '#kubejs:food': 30,
    '#kubejs:infected': -10,
    '#kubejs:fantasy': 5,
    '#kubejs:huge': 50,
    '#kubejs:prehistory': 100,
    '#kubejs:dragon': 500,
}