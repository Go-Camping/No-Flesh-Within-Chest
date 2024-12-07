// priority: 1
Platform.mods.kubejs.name = 'No Flesh Within Chest'
global.ORGAN_LIST = []

global.OPERATION_ADD = 'addition'
global.OPERATION_MULTI_TOTAL = 'multiply_total'
global.OPERATION_MULTI_BASE = 'multiply_base'

global.HEALTH_UP = { key: 'minecraft:generic.max_health', name: 'kubejsMaxHealth', operation: 'addition' }
global.ATTACK_UP = { key: 'minecraft:generic.attack_damage', name: 'kubejsAttackDamage', operation: 'addition' }
global.TEMP_ATTACK_UP = { key: 'minecraft:generic.attack_damage', name: 'kubejsTempAttackDamage', operation: 'addition' }
global.COOLDOWN_REDUCTION = { key: 'irons_spellbooks:cooldown_reduction', name: 'kubejsCooldownReduction', operation: 'addition' }
global.SPELL_POWER = { key: 'irons_spellbooks:spell_power', name: 'kubejsSpellPower', operation: 'addition' }
global.ICE_SPELL_POWER = { key: 'irons_spellbooks:ice_spell_power', name: 'kubejsIceSpellPower', operation: 'addition' }
global.FIRE_SPELL_POWER = { key: 'irons_spellbooks:fire_spell_power', name: 'kubejsFireSpellPower', operation: 'addition' }
global.CANDY_SPELL_POWER = { key: 'kubejs:candy_spell_power', name: 'kubejsCandySpellPower', operation: 'addition' }
global.ARMOR_TOUGHNESS = { key: 'minecraft:generic.armor_toughness', name: 'kubejsArmorToughness', operation: 'addition' }
global.ARMOR = { key: 'minecraft:generic.armor', name: 'kubejsArmor', operation: 'addition' }
global.ATTACK_SPEED = { key: 'minecraft:generic.attack_speed', name: 'kubejsAttackSpeed', operation: 'addition' }
global.MOVEMENT_SPEED = { key: 'minecraft:generic.movement_speed', name: 'kubejsMovementSpeed', operation: 'addition' }
global.MANA_REGEN = { key: 'irons_spellbooks:mana_regen', name: 'kubejsManaRegen', operation: 'addition' }
global.MAX_MANA = { key: 'irons_spellbooks:max_mana', name: 'kubejsMaxMana', operation: 'addition' }
global.KNOCKBACK_RESISTANCE = { key: 'minecraft:generic.knockback_resistance', name: 'kubejsKnockbackResistance', operation: 'addition' }
global.ATTACK_RANGE = { key: 'forge:attack_range', name: 'kubejsAttackRange', operation: 'addition' }
global.REACH_DISTANCE = { key: 'forge:reach_distance', name: 'kubejsReachRange', operation: 'addition' }
global.CRITICAL_HIT = { key: 'obscure_api:critical_hit', name: 'kubejsCriticalHit', operation: 'addition' }
global.CRITICAL_DAMAGE = { key: 'obscure_api:critical_damage', name: 'kubejsCriticalDamage', operation: 'addition' }
global.PARRY = { key: 'obscure_api:parry', name: 'kubejsParry', operation: 'addition' }
global.DODGE = { key: 'obscure_api:dodge', name: 'kubejsDodge', operation: 'addition' }
global.REGENERATION = { key: 'obscure_api:regeneration', name: 'kubejsRegeneration', operation: 'addition' }
global.PENETRATION = { key: 'obscure_api:penetration', name: 'kubejsPenetration', operation: 'addition' }
global.SUMMON_DAMAGE = { key: 'irons_spellbooks:summon_damage', name: 'kubejsSummonDamage', operation: 'addition' }
global.BLOOD_SPELL_DAMAGE = { key: 'irons_spellbooks:blood_spell_power', name: 'kubejsBloodSpellDamage', operation: 'addition' }
global.HOLY_SPELL_DAMAGE = { key: 'irons_spellbooks:holy_spell_power', name: 'kubejsHolySpellDamage', operation: 'addition' }
global.LUCK = { key: 'minecraft:generic.luck', name: 'kubejsLuck', operation: 'addition' }
global.LUCK_MULTI_BASE = { key: 'minecraft:generic.luck', name: 'kubejsLuckMultiBase', operation: 'multiply_base' }
global.ATTACK_UP_MULTI_BASE = { key: 'minecraft:generic.attack_damage', name: 'kubejsAttackDamageMultiBase', operation: 'multiply_base' }
global.ARMOR_MULTI_BASE = { key: 'minecraft:generic.armor', name: 'kubejsArmorMultiBase', operation: 'multiply_base' }


global.ATTRIBUTE_MAP = {
    'kubejsAttackDamage': global.ATTACK_UP,
    'kubejsMaxHealth': global.HEALTH_UP,
    'kubejsTempAttackDamage': global.TEMP_ATTACK_UP,
    'kubejsCooldownReduction': global.COOLDOWN_REDUCTION,
    'kubejsSpellPower': global.SPELL_POWER,
    'kubejsIceSpellPower': global.ICE_SPELL_POWER,
    'kubejsFireSpellPower': global.FIRE_SPELL_POWER,
    'kubejsArmorToughness': global.ARMOR_TOUGHNESS,
    'kubejsArmor': global.ARMOR,
    'kubejsAttackSpeed': global.ATTACK_SPEED,
    'kubejsMovementSpeed': global.MOVEMENT_SPEED,
    'kubejsManaRegen': global.MANA_REGEN,
    'kubejsMaxMana': global.MAX_MANA,
    'kubejsKnockbackResistance': global.KNOCKBACK_RESISTANCE,
    'kubejsAttackRange': global.ATTACK_RANGE,
    'kubejsReachRange': global.REACH_DISTANCE,
    'kubejsCriticalHit': global.CRITICAL_HIT,
    'kubejsCriticalDamage': global.CRITICAL_DAMAGE,
    'kubejsParry': global.PARRY,
    'kubejsDodge': global.DODGE,
    'kubejsRegeneration': global.REGENERATION,
    'kubejsPenetration': global.PENETRATION,
    'kubejsSummonDamage': global.SUMMON_DAMAGE,
    'kubejsBloodSpellDamage': global.BLOOD_SPELL_DAMAGE,
    'kubejsHolySpellDamage': global.HOLY_SPELL_DAMAGE,
    'kubejsLuck': global.LUCK,
    'kubejsLuckMultiBase': global.LUCK_MULTI_BASE,
    'kubejsAttackDamageMultiBase': global.ATTACK_UP_MULTI_BASE,
    'kubejsArmorMultiBase': global.ARMOR_MULTI_BASE,
    'kubejsCandySpellPower': global.CANDY_SPELL_POWER,
}

global.TYPE_MAP = {
    'kubejs:appendix': Text.aqua(Text.translatable("kubejs.tooltips.appendix")),
    'kubejs:heart': Text.aqua(Text.translatable("kubejs.tooltips.heart")),
    'kubejs:intestine': Text.aqua(Text.translatable("kubejs.tooltips.intestine")),
    'kubejs:kidney': Text.aqua(Text.translatable("kubejs.tooltips.kidney")),
    'kubejs:liver': Text.aqua(Text.translatable("kubejs.tooltips.liver")),
    'kubejs:lung': Text.aqua(Text.translatable("kubejs.tooltips.lung")),
    'kubejs:muscle': Text.aqua(Text.translatable("kubejs.tooltips.muscle")),
    'kubejs:rib': Text.gray(Text.translatable("kubejs.tooltips.rib")),
    'kubejs:spine': Text.of(Text.translatable("kubejs.tooltips.spine")).color('#cff9ff'),
    'kubejs:spleen': Text.aqua(Text.translatable("kubejs.tooltips.spleen")),
    'kubejs:pancreas': Text.aqua(Text.translatable("kubejs.tooltips.pancreas")),
    'kubejs:stomach': Text.aqua(Text.translatable("kubejs.tooltips.stomach")),
    'kubejs:infinity': Text.lightPurple(Text.translatable("kubejs.tooltips.infinity")),
    'kubejs:machine': Text.gray(Text.translatable("kubejs.tooltips.machine")),
    'kubejs:magic': Text.of(Text.translatable("kubejs.tooltips.magic")).color('#00eded'),
    'kubejs:candy': Text.of(Text.translatable("kubejs.tooltips.candy")).color('#e8a0dc'),
    'kubejs:rose': Text.darkRed(Text.translatable("kubejs.tooltips.rose")),
    'kubejs:resource': Text.gold(Text.translatable("kubejs.tooltips.resource")),
    'kubejs:revolution': Text.of(Text.translatable("kubejs.tooltips.revolution")).color('#deaa00'),
    'kubejs:relics': Text.of(Text.translatable("kubejs.tooltips.relics")).color('#ffe100'),
    'kubejs:legends': Text.of(Text.translatable("kubejs.tooltips.legends")).color('#d6e5ff'),
    'kubejs:evolution': Text.green(Text.translatable("kubejs.tooltips.evolution")),
    'kubejs:food': Text.of(Text.translatable("kubejs.tooltips.food")).color('#f1b500'),
    'kubejs:huge': Text.of(Text.translatable("kubejs.tooltips.huge")).color('#a900fd'),
    'kubejs:warp': Text.darkPurple(Text.translatable("kubejs.tooltips.warp")),
    'kubejs:prehistory': Text.of(Text.translatable("kubejs.tooltips.prehistory")).color('#d6d124'),
    'kubejs:dragon': Text.of(Text.translatable("kubejs.tooltips.dragon")).color('#bc00bc'),
    'kubejs:void': Text.of(Text.translatable("kubejs.tooltips.void")).color('#c2bec2'),
    'kubejs:fantasy': Text.of(Text.translatable("kubejs.tooltips.fantasy")).color('#cd9b9b'),
    'kubejs:infected': Text.of(Text.translatable("kubejs.tooltips.infected")).color('#00ba03'),
    'kubejs:botany': Text.of(Text.translatable("kubejs.tooltips.botany")).color('#0ed400'),
    'kubejs:loot_entity': Text.gold(Text.translatable("kubejs.tooltips.loot_entity")),
    'kubejs:loot_entity_only': Text.gold(Text.translatable("kubejs.tooltips.loot_entity_only")),
    'kubejs:loot_chest': Text.gold(Text.translatable("kubejs.tooltips.loot_chest")),
    'kubejs:loot_chest_only': Text.gold(Text.translatable("kubejs.tooltips.loot_chest_only")),
    'kubejs:active_only': Text.gold(Text.translatable("kubejs.tooltips.active_only")),
    'kubejs:active': Text.gold(Text.translatable("kubejs.tooltips.active")),
    'kubejs:rclick_only': Text.gold(Text.translatable("kubejs.tooltips.rclick_only")),
    'kubejs:rclick': Text.gold(Text.translatable("kubejs.tooltips.rclick")),
    'kubejs:player_tick_only': Text.gold(Text.translatable("kubejs.tooltips.player_tick_only")),
    'kubejs:player_tick': Text.gold(Text.translatable("kubejs.tooltips.player_tick")),
    'kubejs:key_pressed': Text.gold(Text.translatable("kubejs.tooltips.key_pressed")),
    'kubejs:damage_only': Text.gold(Text.translatable("kubejs.tooltips.damage_only")),
    'kubejs:damage': Text.gold(Text.translatable("kubejs.tooltips.damage")),
    'kubejs:eat_effect_only': Text.gold(Text.translatable("kubejs.tooltips.eat_effect_only")),
    'kubejs:eat_effect': Text.gold(Text.translatable("kubejs.tooltips.eat_effect")),
    'kubejs:break_only': Text.gold(Text.translatable("kubejs.tooltips.break_only")),
    'kubejs:break': Text.gold(Text.translatable("kubejs.tooltips.break")),
    'kubejs:bear_only': Text.gold(Text.translatable("kubejs.tooltips.bear_only")),
    'kubejs:bear': Text.gold(Text.translatable("kubejs.tooltips.bear")),
    'kubejs:enchant_only': Text.gold(Text.translatable("kubejs.tooltips.enchant_only")),
    'kubejs:enchant': Text.gold(Text.translatable("kubejs.tooltips.enchant")),
    'kubejs:auto_active': Text.gold(Text.translatable("kubejs.tooltips.auto_active")),
}


global.SCORE_MAP = {
    'chestcavity:filtration': Text.translatable("kubejs.chestcavity.filtration"),
    'chestcavity:breath_recovery': Text.translatable("kubejs.chestcavity.breath_recovery"),
    'chestcavity:nutrition': Text.translatable("kubejs.chestcavity.nutrition"),
    'chestcavity:nerves': Text.translatable("kubejs.chestcavity.nerves"),
    'chestcavity:strength': Text.translatable("kubejs.chestcavity.strength"),
    'chestcavity:health': Text.translatable("kubejs.chestcavity.health"),
    'chestcavity:breath_capacity': Text.translatable("kubejs.chestcavity.breath_capacity"),
    'chestcavity:detoxification': Text.translatable("kubejs.chestcavity.detoxification"),
    'chestcavity:speed': Text.translatable("kubejs.chestcavity.speed"),
    'chestcavity:endurance': Text.translatable("kubejs.chestcavity.endurance"),
    'chestcavity:luck': Text.translatable("kubejs.chestcavity.luck"),
    'chestcavity:defense': Text.translatable("kubejs.chestcavity.defense"),
    'chestcavity:digestion': Text.translatable("kubejs.chestcavity.digestion"),
    'chestcavity:metabolism': Text.translatable("kubejs.chestcavity.metabolism"),
    'chestcavity:fire_resistant': Text.translatable("kubejs.chestcavity.fire_resistant"),
    'chestcavity:buoyant': Text.translatable("kubejs.chestcavity.buoyant"),
    'chestcavity:glowing': Text.translatable("kubejs.chestcavity.glowing"),
    'chestcavity:knockback_resistant': Text.translatable("kubejs.chestcavity.knockback_resistant"),
    'chestcavity:water_breath': Text.translatable("kubejs.chestcavity.water_breath"),
    'chestcavity:explosive': Text.translatable("kubejs.chestcavity.explosive"),
    'chestcavity:pyromancy': Text.translatable("kubejs.chestcavity.pyromancy"),
    'chestcavity:hydroallergenic': Text.translatable("kubejs.chestcavity.hydroallergenic"),
    'chestcavity:photosynthesis': Text.translatable("kubejs.chestcavity.photosynthesis"),
    'chestcavity:ghastly': Text.translatable("kubejs.chestcavity.ghastly"),
    'chestcavity:withered': Text.translatable("kubejs.chestcavity.withered"),
    'chestcavity:dragon_bombs': Text.translatable("kubejs.chestcavity.dragon_bombs"),
    'chestcavity:buff_purging': Text.translatable("kubejs.chestcavity.buff_purging"),
    'chestcavity:herbivorous_digestion': Text.translatable("kubejs.chestcavity.herbivorous_digestion"),
    'chestcavity:herbivorous_nutrition': Text.translatable("kubejs.chestcavity.herbivorous_nutrition"),
    'chestcavity:carnivorous_digestion': Text.translatable("kubejs.chestcavity.carnivorous_digestion"),
    'chestcavity:carnivorous_nutrition': Text.translatable("kubejs.chestcavity.carnivorous_nutrition"),
    'chestcavity:swim_speed': Text.translatable("kubejs.chestcavity.swim_speed"),
    'chestcavity:launching': Text.translatable("kubejs.chestcavity.launching"),
    'chestcavity:furnace_powered': Text.translatable("kubejs.chestcavity.furnace_powered"),
    'chestcavity:iron_repair': Text.translatable("kubejs.chestcavity.iron_repair"),
    'chestcavity:crystalsynthesis': Text.translatable("kubejs.chestcavity.crystalsynthesis"),
    'chestcavity:rot_digestion': Text.translatable("kubejs.chestcavity.rot_digestion"),
    'chestcavity:rot_nutrition': Text.translatable("kubejs.chestcavity.rot_nutrition"),

    'chestcavity:forceful_spit': Text.translatable("kubejs.chestcavity.forceful_spit"),
    'chestcavity:silk': Text.translatable("kubejs.chestcavity.silk"),
    'chestcavity:venomous': Text.translatable("kubejs.chestcavity.venomous"),
    'chestcavity:leaping': Text.translatable("kubejs.chestcavity.leaping"),
    'chestcavity:hydrophobia': Text.translatable("kubejs.chestcavity.hydrophobia"),
    'chestcavity:dragon_breath': Text.translatable("kubejs.chestcavity.dragon_breath"),
    'chestcavity:creepy': Text.translatable("kubejs.chestcavity.creepy"),
    'chestcavity:shulker_bullets': Text.translatable("kubejs.chestcavity.shulker_bullets"),
    'chestcavity:grazing': Text.translatable("kubejs.chestcavity.grazing"),
    'chestcavity:arrow_dodging': Text.translatable("kubejs.chestcavity.arrow_dodging"),
    'chestcavity:impact_resistant': Text.translatable("kubejs.chestcavity.impact_resistant"),
    'chestcavity:rotgut': Text.translatable("kubejs.chestcavity.rotgut"),
    'chestcavity:ease_of_access': Text.translatable("kubejs.chestcavity.ease_of_access"),
}

global.SCORE_HOVER_MAP = {
    'chestcavity:filtration': Text.translatable("kubejs.chestcavity.hover.filtration"),
    'chestcavity:breath_recovery': Text.translatable("kubejs.chestcavity.hover.breath_recovery"),
    'chestcavity:nutrition': Text.translatable("kubejs.chestcavity.hover.nutrition"),
    'chestcavity:nerves': Text.translatable("kubejs.chestcavity.hover.nerves"),
    'chestcavity:strength': Text.translatable("kubejs.chestcavity.hover.strength"),
    'chestcavity:health': Text.translatable("kubejs.chestcavity.hover.health"),
    'chestcavity:breath_capacity': Text.translatable("kubejs.chestcavity.hover.breath_capacity"),
    'chestcavity:detoxification': Text.translatable("kubejs.chestcavity.hover.detoxification"),
    'chestcavity:speed': Text.translatable("kubejs.chestcavity.hover.speed"),
    'chestcavity:endurance': Text.translatable("kubejs.chestcavity.hover.endurance"),
    'chestcavity:luck': Text.translatable("kubejs.chestcavity.hover.luck"),
    'chestcavity:defense': Text.translatable("kubejs.chestcavity.hover.defense"),
    'chestcavity:digestion': Text.translatable("kubejs.chestcavity.hover.digestion"),
    'chestcavity:metabolism': Text.translatable("kubejs.chestcavity.hover.metabolism"),
    'chestcavity:fire_resistant': Text.translatable("kubejs.chestcavity.hover.fire_resistant"),
    'chestcavity:buoyant': Text.translatable("kubejs.chestcavity.hover.buoyant"),
    'chestcavity:glowing': Text.translatable("kubejs.chestcavity.hover.glowing"),
    'chestcavity:knockback_resistant': Text.translatable("kubejs.chestcavity.hover.knockback_resistant"),
    'chestcavity:water_breath': Text.translatable("kubejs.chestcavity.hover.water_breath"),
    'chestcavity:explosive': Text.translatable("kubejs.chestcavity.hover.explosive"),
    'chestcavity:pyromancy': Text.translatable("kubejs.chestcavity.hover.pyromancy"),
    'chestcavity:hydroallergenic': Text.translatable("kubejs.chestcavity.hover.hydroallergenic"),
    'chestcavity:photosynthesis': Text.translatable("kubejs.chestcavity.hover.photosynthesis"),
    'chestcavity:ghastly': Text.translatable("kubejs.chestcavity.hover.ghastly"),
    'chestcavity:withered': Text.translatable("kubejs.chestcavity.hover.withered"),
    'chestcavity:dragon_bombs': Text.translatable("kubejs.chestcavity.hover.dragon_bombs"),
    'chestcavity:buff_purging': Text.translatable("kubejs.chestcavity.hover.buff_purging"),
    'chestcavity:herbivorous_digestion': Text.translatable("kubejs.chestcavity.hover.herbivorous_digestion"),
    'chestcavity:herbivorous_nutrition': Text.translatable("kubejs.chestcavity.hover.herbivorous_nutrition"),
    'chestcavity:carnivorous_digestion': Text.translatable("kubejs.chestcavity.hover.carnivorous_digestion"),
    'chestcavity:carnivorous_nutrition': Text.translatable("kubejs.chestcavity.hover.carnivorous_nutrition"),
    'chestcavity:swim_speed': Text.translatable("kubejs.chestcavity.hover.swim_speed"),
    'chestcavity:launching': Text.translatable("kubejs.chestcavity.hover.launching"),
    'chestcavity:furnace_powered': Text.translatable("kubejs.chestcavity.hover.furnace_powered"),
    'chestcavity:iron_repair': Text.translatable("kubejs.chestcavity.hover.iron_repair"),
    'chestcavity:crystalsynthesis': Text.translatable("kubejs.chestcavity.hover.crystalsynthesis"),
    'chestcavity:rot_digestion': Text.translatable("kubejs.chestcavity.hover.rot_digestion"),
    'chestcavity:rot_nutrition': Text.translatable("kubejs.chestcavity.hover.rot_nutrition"),
    'chestcavity:forceful_spit': Text.translatable("kubejs.chestcavity.hover.forceful_spit"),
    'chestcavity:silk': Text.translatable("kubejs.chestcavity.hover.silk"),
    'chestcavity:venomous': Text.translatable("kubejs.chestcavity.hover.venomous"),
    'chestcavity:leaping': Text.translatable("kubejs.chestcavity.hover.leaping"),
    'chestcavity:hydrophobia': Text.translatable("kubejs.chestcavity.hover.hydrophobia"),
    'chestcavity:dragon_breath': Text.translatable("kubejs.chestcavity.hover.dragon_breath"),
    'chestcavity:creepy': Text.translatable("kubejs.chestcavity.hover.creepy"),
    'chestcavity:shulker_bullets': Text.translatable("kubejs.chestcavity.hover.shulker_bullets"),
    'chestcavity:grazing': Text.translatable("kubejs.chestcavity.hover.grazing"),
    'chestcavity:arrow_dodging': Text.translatable("kubejs.chestcavity.hover.arrow_dodging"),
    'chestcavity:impact_resistant': Text.translatable("kubejs.chestcavity.hover.impact_resistant"),
    'chestcavity:rotgut': Text.translatable("kubejs.chestcavity.hover.rotgut"),
    'chestcavity:ease_of_access': Text.translatable("kubejs.chestcavity.hover.ease_of_access"),
}

global.organCharmNbtMap = {
    'kubejs:muscle_template': { type: 'kill', killTask: { mobType: 'minecraft:zombie', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:muscle_iron' },
    'kubejs:muscle_iron': { type: 'kill', killTask: { mobType: 'minecraft:zombie', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:muscle_gold' },
    'kubejs:muscle_gold': { type: 'kill', killTask: { mobType: 'minecraft:zombie', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:muscle_diamond' },

    'kubejs:telescopic_arm': { type: 'kill', killTask: { mobType: 'somebosses:hand_head', killAmount: 1, counter: 0 }, targetOrgan: 'kubejs:telescopic_attack_arm' },

    'kubejs:lung_template': { type: 'kill', killTask: { mobType: 'minecraft:spider', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:lung_iron' },
    'kubejs:lung_iron': { type: 'kill', killTask: { mobType: 'minecraft:spider', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:lung_gold' },
    'kubejs:lung_gold': { type: 'kill', killTask: { mobType: 'minecraft:spider', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:lung_diamond' },

    'kubejs:spine_template': { type: 'kill', killTask: { mobType: 'minecraft:skeleton', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:spine_iron' },
    'kubejs:spine_iron': { type: 'kill', killTask: { mobType: 'minecraft:skeleton', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:spine_gold' },
    'kubejs:spine_gold': { type: 'kill', killTask: { mobType: 'minecraft:skeleton', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:spine_diamond' },

    'kubejs:appendix_template': { type: 'kill', killTask: { mobType: 'minecraft:creeper', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:appendix_iron' },
    'kubejs:appendix_iron': { type: 'kill', killTask: { mobType: 'minecraft:creeper', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:appendix_gold' },
    'kubejs:appendix_gold': { type: 'kill', killTask: { mobType: 'minecraft:creeper', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:appendix_diamond' },

    'kubejs:stomach_template': { type: 'diet', dietTask: { minHunger: 1, foodTypeAmount: 3, foodTypeList: [] }, targetOrgan: 'kubejs:stomach_iron' },
    'kubejs:stomach_iron': { type: 'diet', dietTask: { minHunger: 2, foodTypeAmount: 5, foodTypeList: [] }, targetOrgan: 'kubejs:stomach_gold' },
    'kubejs:stomach_gold': { type: 'diet', dietTask: { minHunger: 3, foodTypeAmount: 10, foodTypeList: [] }, targetOrgan: 'kubejs:stomach_diamond' },

    'kubejs:intestine_template': { type: 'diet', dietTask: { minHunger: 1, foodTypeAmount: 3, foodTypeList: [] }, targetOrgan: 'kubejs:intestine_iron' },
    'kubejs:intestine_iron': { type: 'diet', dietTask: { minHunger: 2, foodTypeAmount: 5, foodTypeList: [] }, targetOrgan: 'kubejs:intestine_gold' },
    'kubejs:intestine_gold': { type: 'diet', dietTask: { minHunger: 3, foodTypeAmount: 10, foodTypeList: [] }, targetOrgan: 'kubejs:intestine_diamond' },

    'kubejs:spleen_template': { type: 'damage', damageTask: { minDamage: 3, damageAmount: 400, counter: 0, type: "magic" }, targetOrgan: 'kubejs:spleen_iron' },
    'kubejs:spleen_iron': { type: 'damage', damageTask: { minDamage: 8, damageAmount: 900, counter: 0, type: "magic" }, targetOrgan: 'kubejs:spleen_gold' },
    'kubejs:spleen_gold': { type: 'damage', damageTask: { minDamage: 12, damageAmount: 1600, counter: 0, type: "magic" }, targetOrgan: 'kubejs:spleen_diamond' },

    'kubejs:rib_template': { type: 'bear', bearTask: { minDamage: 2, bearAmount: 100, counter: 0 }, targetOrgan: 'kubejs:rib_iron' },
    'kubejs:rib_iron': { type: 'bear', bearTask: { minDamage: 3, bearAmount: 300, counter: 0 }, targetOrgan: 'kubejs:rib_gold' },
    'kubejs:rib_gold': { type: 'bear', bearTask: { minDamage: 5, bearAmount: 500, counter: 0 }, targetOrgan: 'kubejs:rib_diamond' },

    'kubejs:kidney_template': { type: 'bear', bearTask: { minDamage: 2, bearAmount: 100, counter: 0 }, targetOrgan: 'kubejs:kidney_iron' },
    'kubejs:kidney_iron': { type: 'bear', bearTask: { minDamage: 3, bearAmount: 300, counter: 0 }, targetOrgan: 'kubejs:kidney_gold' },
    'kubejs:kidney_gold': { type: 'bear', bearTask: { minDamage: 5, bearAmount: 500, counter: 0 }, targetOrgan: 'kubejs:kidney_diamond' },

    'kubejs:liver_template': { type: 'damage', damageTask: { minDamage: 3, damageAmount: 500, counter: 0, type: "projectile" }, targetOrgan: 'kubejs:liver_iron' },
    'kubejs:liver_iron': { type: 'damage', damageTask: { minDamage: 8, damageAmount: 1000, counter: 0, type: "projectile" }, targetOrgan: 'kubejs:liver_gold' },
    'kubejs:liver_gold': { type: 'damage', damageTask: { minDamage: 12, damageAmount: 1800, counter: 0, type: "projectile" }, targetOrgan: 'kubejs:liver_diamond' },

    'kubejs:heart_template': { type: 'damage', damageTask: { minDamage: 3, damageAmount: 800, counter: 0, type: "melee" }, targetOrgan: 'kubejs:heart_iron' },
    'kubejs:heart_iron': { type: 'damage', damageTask: { minDamage: 8, damageAmount: 1500, counter: 0, type: "melee" }, targetOrgan: 'kubejs:heart_gold' },
    'kubejs:heart_gold': { type: 'damage', damageTask: { minDamage: 15, damageAmount: 3000, counter: 0, type: "melee" }, targetOrgan: 'kubejs:heart_diamond' },

    'kubejs:blade_of_heart': { type: 'bear', bearTask: { minDamage: 10, bearAmount: 150, counter: 0 }, targetOrgan: 'kubejs:heart_of_blade' },
    'kubejs:heart_of_blade': { type: 'damage', damageTask: { minDamage: 15, damageAmount: 3000, counter: 0, type: "melee" }, targetOrgan: 'kubejs:blade_of_heart' },

    'kubejs:stomach_diamond': { type: 'diet', dietTask: { minHunger: 4, foodTypeAmount: 30, foodTypeList: [] }, targetOrgan: 'kubejs:king_of_stomach' },

    'kubejs:stomach_tumor': { type: 'mining', miningTask: { targetblock: ['minecraft:diamond_block', 'minecraft:gold_block', 'minecraft:iron_block', 'minecraft:copper_block'], counter: 0, consume: true, miningAmount: 32 }, targetOrgan: 'kubejs:desire_of_midas' },

    'kubejs:doppelganger': { type: 'diet', dietTask: { minHunger: 4, foodTypeAmount: 13, foodTypeList: [] }, targetOrgan: 'kubejs:mini_vampire' },

    'kubejs:fish_in_chest': { type: 'warp', warpTask: { warpMin: 50 }, targetOrgan: 'kubejs:fish_in_warp' },
    'chestcavity:gas_bladder': { type: 'warp', warpTask: { warpMin: 30 }, targetOrgan: 'kubejs:warp_bubble' },
}