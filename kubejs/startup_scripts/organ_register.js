// priority: 100
StartupEvents.registry('item', event => {
    /**
     * 
     * @param {Organ} organ 
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.organs")
        if (organ.ctrlTextLines.length > 0) {
            builder.tag('chestcavity:active')
        }
        if (organ.altTextLines.length > 0) {
            builder.tag('chestcavity:special')
        }
        return builder
    }

    /**
     * 器官注册
     */
    // 贪婪之胃
    registerOrgan(new Organ('kubejs:greedy_stomach')
        .addScore('digestion', 0.5)
        .addScore('endurance', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.greedy_stomach.1", Text.gold(30)).gray()])
        .build())
        .texture('kubejs:item/organs/common/stomach')
        .tag('kubejs:stomach')
        .tag('kubejs:eat_effect');

    // 无尽节律之心
    registerOrgan(new Organ('kubejs:infinity_beats')
        .addScore('health', -2)
        .addScore('defense', -2)
        .addScore('breath_recovery', -2)
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.infinity_beats.1", Text.yellow(4)).gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.infinity_beats.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.infinity_beats.3").gray()])
        .build())
        .texture('kubejs:item/organs/infinity/infinity_beats')
        .tag('kubejs:infinity')
        .tag('itemborders:diamond')
        .tag('kubejs:damage_only');

    // 无尽之力
    registerOrgan(new Organ('kubejs:infinity_force')
        .addScore('health', -2)
        .addScore('defense', -2)
        .addScore('breath_recovery', -2)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.infinity_force.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.infinity_force.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.infinity_force.3").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.infinity_force.4").gray()])
        .build())
        .texture('kubejs:item/organs/infinity/infinity_force')
        .tag('kubejs:infinity')
        .tag('kubejs:active_only')
        .tag('itemborders:diamond')
        .tag('kubejs:loot_entity_only');

    // 玫瑰石英肌束
    registerOrgan(new Organ('kubejs:rose_quartz_muscle')
        .addScore('strength', 1.5)
        .addScore('nerves', -0.25)
        .addScore('hydroallergenic', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.rose_quartz_muscle.1"))])
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_muscle')
        .tag('kubejs:muscle')
        .tag('itemborders:gold')
        .tag('kubejs:rose')
        .tag('kubejs:active');

    // 玫瑰石英心脏
    registerOrgan(new Organ('kubejs:rose_quartz_heart')
        .addScore('health', 1.5)
        .addScore('nerves', -0.25)
        .addScore('hydroallergenic', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.rose_quartz_heart.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.rose_quartz_heart.2"))])
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_heart')
        .tag('kubejs:heart')
        .tag('itemborders:gold')
        .tag('kubejs:rose')
        .tag('kubejs:active');

    // 玫瑰石英肝脏
    registerOrgan(new Organ('kubejs:rose_quartz_liver')
        .addScore('detoxification', 1.5)
        .addScore('nerves', -0.25)
        .addScore('hydroallergenic', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.rose_quartz_liver.1"))])
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_liver')
        .tag('kubejs:liver')
        .tag('itemborders:gold')
        .tag('kubejs:rose')
        .tag('kubejs:active');

    //玫瑰石英透析器
    registerOrgan(new Organ('kubejs:rose_quartz_dialyzer')
        .addScore('filtration', 1.5)
        .addScore('nerves', -0.25)
        .addScore('hydroallergenic', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.rose_quartz_dialyzer.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.rose_quartz_dialyzer.2"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.rose_quartz_dialyzer.3"))])
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_dialyzer')
        .tag('kubejs:kidney')
        .tag('kubejs:machine')
        .tag('itemborders:gold')
        .tag('kubejs:rose')
        .tag('kubejs:active_only');

    // 革命机械系列
    // 熔炉核心
    registerOrgan(new Organ('kubejs:furnace_core')
        .addScore('hydroallergenic', 1)
        .addScore('knockback_resistant', 3)
        .addScore('health', 2)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.furnace_core.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.furnace_core.2"), Text.gold(20).gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.furnace_core.3").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.furnace_core.4").gray()])
        .build())
        .texture('kubejs:item/organs/machine/furnace_core')
        .tag('kubejs:heart')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:machine')
        .tag('kubejs:rclick_only');

    // 心火核心
    registerOrgan(new Organ('kubejs:burning_heart')
        .addScore('speed', 1.5)
        .addScore('hydroallergenic', 1)
        .addScore('health', 1)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.burning_heart.1").gray()])
        .addTextLines('default', [Text.translatable("kubejs.tooltips.burning_heart.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.burning_heart.3", Text.gold(20)).gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.burning_heart.4", Text.gold(5)).gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.burning_heart.5").gray()])
        .build())
        .texture('kubejs:item/organs/machine/burning_heart')
        .tag('kubejs:heart')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:machine')
        .tag('kubejs:rclick_only');

    // 革命之钟
    registerOrgan(new Organ('kubejs:revolution_bell')
        .addScore('metabolism', -0.5)
        .addScore('strength', 1.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.revolution_bell.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.revolution_bell.2"))])
        .build())
        .texture('kubejs:item/organs/machine/revolution_bell')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:machine');

    // 烈火加压器
    registerOrgan(new Organ('kubejs:blaze_pressurizer')
        .addScore('endurance', 1.5)
        .addScore('strength', 1)
        .addScore('defense', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.blaze_pressurizer.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blaze_pressurizer.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blaze_pressurizer.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blaze_pressurizer.4"))])
        .build())
        .texture('kubejs:item/organs/machine/blaze_pressurizer')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:machine');

    // 革命线缆
    registerOrgan(new Organ('kubejs:revolution_cable')
        .addScore('nerves', 0.75)
        .addScore('endurance', 1)
        .addScore('strength', -1)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.revolution_cable.1", Text.gold(2)).gray()])
        .build())
        .texture('kubejs:item/organs/machine/revolution_cable')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:machine')
        .tag('kubejs:active');

    // 革命齿轮
    registerOrgan(new Organ('kubejs:revolution_gear')
        .addScore('defense', 1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.revolution_gear.1", Text.gold(1)).gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.revolution_gear.5", Text.gold(2)).gray()])
        .build())
        .texture('kubejs:item/organs/machine/revolution_gear')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:machine');

    // todo 改造到这里
    // 革命继电器
    registerOrgan(new Organ('kubejs:revolution_relay')
        .addScore('speed', -0.5)
        .addScore('nerves', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.revolution_relay.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.revolution_relay.2")), Text.gold(1), Text.gray(Text.translatable("kubejs.tooltips.revolution_relay.3")), Text.red(Text.translatable("kubejs.tooltips.revolution_relay.4")), Text.gray(Text.translatable("kubejs.tooltips.revolution_relay.5")), Text.gold(Text.translatable("kubejs.tooltips.revolution_relay.6")), Text.gray(Text.translatable("kubejs.tooltips.revolution_relay.7"))])
        .build())
        .texture('kubejs:item/organs/machine/revolution_relay')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:machine');

    // 革命断路器
    registerOrgan(new Organ('kubejs:revolution_delay')
        .addScore('speed', -0.5)
        .addScore('nerves', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.revolution_delay.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.revolution_delay.2")), Text.gold(1), Text.gray(Text.translatable("kubejs.tooltips.revolution_delay.3")), Text.red(Text.translatable("kubejs.tooltips.revolution_delay.4")), Text.gold(Text.translatable("kubejs.tooltips.revolution_delay.5")), Text.gray(Text.translatable("kubejs.tooltips.revolution_delay.6"))])
        .build())
        .texture('kubejs:item/organs/machine/revolution_delay')
        .tag('kubejs:revolution')
        .tag('itemborders:gold')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:compressed_oxygen_implant')
        .addScore('filtration', -0.75)
        .addScore('speed', -0.5)
        .addScore('breath_recovery', 5)
        .addScore('burning_point', 2)
        .addScore('freezing_point', -2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.compressed_oxygen_implant.1"))])
        .build())
        .texture('kubejs:item/organs/machine/compressed_oxygen_implant')
        .tag('kubejs:lung')
        .tag('itemborders:iron')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:lowlight_vision')
        .addScore('nerves', -0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.lowlight_vision.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lowlight_vision.2"))])
        .build())
        .texture('kubejs:item/organs/machine/lowlight_vision')
        .tag('itemborders:iron')
        .tag('kubejs:resource')
        .tag('kubejs:key_pressed')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:jet_propeller')
        .addScore('speed', 2.5)
        .addScore('breath_recovery', -1.75)
        .addScore('defense', 0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.jet_propeller.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.jet_propeller.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.jet_propeller.3"))])
        .build())
        .texture('kubejs:item/organs/machine/jet_propeller')
        .tag('itemborders:iron')
        .tag('kubejs:resource')
        .tag('kubejs:key_pressed')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:aegis')
        .addScore('speed', -2)
        .addScore('detoxification', -1.5)
        .addScore('defense', 2.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.aegis.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.aegis.2"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.aegis.3"))])
        .build())
        .texture('kubejs:item/organs/machine/aegis')
        .tag('itemborders:iron')
        .tag('kubejs:active_only')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:mace')
        .addScore('strength', 1.75)
        .addScore('knockback_resistant', 1)
        .addScore('endurance', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.mace.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mace.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mace.3"))])
        .build())
        .texture('kubejs:item/organs/machine/mace')
        .tag('itemborders:iron')
        .tag('kubejs:damage_only')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:platelet_dispatcher')
        .addScore('metabolism', 3)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.platelet_dispatcher.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.platelet_dispatcher.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.platelet_dispatcher.3"))])
        .build())
        .texture('kubejs:item/organs/machine/platelet_dispatcher')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:machine')
        .tag('kubejs:spleen')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:machine_clockwork')
        .addScore('health', 1.25)
        .addScore('speed', -0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.machine_clockwork.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.machine_clockwork.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.machine_clockwork.3"))])
        .build())
        .texture('kubejs:item/organs/machine/machine_clockwork')
        .tag('kubejs:player_tick')
        .tag('kubejs:resource')
        .tag('kubejs:machine')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:lava_life_cycle_system')
        .addScore('strength', 1.5)
        .addScore('filtration', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.lava_life_cycle_system.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lava_life_cycle_system.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lava_life_cycle_system.3"))])
        .build())
        .texture('kubejs:item/organs/machine/lava_life_cycle_system')
        .tag('kubejs:damage_only')
        .tag('kubejs:machine')
        .tag('kubejs:resource')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:tamagotchi')
        .addScore('luck', 1.5)
        .addScore('nerves', 1.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.tamagotchi.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.tamagotchi.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.tamagotchi.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.tamagotchi.4")), Text.darkPurple(Text.translatable("kubejs.tooltips.warp_count"))])
        .build())
        .texture('kubejs:item/organs/machine/tamagotchi')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:eat_effect_only')
        .tag('kubejs:machine')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:energy_bottle_max')
        .addScore('detoxification', 1.5)
        .addScore('metabolism', 1.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.energy_bottle_max.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.energy_bottle_max.2")), Text.darkRed(Text.translatable("kubejs.tooltips.rose")), Text.gray(Text.translatable("kubejs.tooltips.energy_bottle_max.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.energy_bottle_max.4")), Text.gold(Text.translatable("effect.kubejs.flaring_heart")), Text.gold('/'), Text.gold(Text.translatable("effect.kubejs.burning_heart")), Text.gray(Text.translatable("kubejs.tooltips.energy_bottle_max.5"))])
        .build())
        .texture('kubejs:item/organs/rose_quartz/energy_bottle_max')
        .tag('kubejs:machine')
        .tag('kubejs:damage_only')
        .tag('kubejs:resource')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:revolution_steam_engine')
        .addScore('endurance', 0.5)
        .addScore('fire_resistant', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.revolution_steam_engine.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.revolution_steam_engine.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.revolution_steam_engine.3"))])
        .build())
        .texture('kubejs:item/organs/machine/revolution_steam_engine')
        .tag('kubejs:rclick_only')
        .tag('kubejs:revolution')
        .tag('kubejs:resource')
        .tag('kubejs:machine')
        .tag('itemborders:diamond');

    // 糖果心与魔法使系列物品
    // 糖果系列器官
    registerOrgan(new Organ('kubejs:candy_heart')
        .addScore('health', 1.75)
        .addScore('nutrition', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.candy_heart.1")), Text.red(Text.translatable("kubejs.tooltips.candy_heart.2")), Text.gray(Text.translatable("kubejs.tooltips.candy_heart.3")), Text.of(Text.translatable("kubejs.tooltips.candy_heart.4")).color('#e8a0dc'), Text.gray(Text.translatable("kubejs.tooltips.candy_heart.5"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_heart.6"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_heart.7"))])
        .build())
        .texture('kubejs:item/organs/candy/candy_heart')
        .tag('kubejs:heart')
        .tag('kubejs:candy');

    registerOrgan(new Organ('kubejs:candy_stomach')
        .addScore('nutrition', 1.5)
        .addScore('digestion', 2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.candy_stomach.1")), Text.of(Text.translatable("kubejs.tooltips.candy_stomach.2")).color('#e8a0dc')])
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.candy_stomach.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_stomach.4")), Text.of(Text.translatable("kubejs.tooltips.candy_stomach.5")).color('#e8a0dc'), Text.gray(Text.translatable("kubejs.tooltips.candy_stomach.6"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_stomach.7"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_stomach.8")), Text.gold(Text.translatable("kubejs.tooltips.candy_stomach.9"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_stomach.10"))])
        .build())
        .texture('kubejs:item/organs/candy/candy_stomach')
        .tag('kubejs:stomach')
        .tag('kubejs:candy')
        .tag('kubejs:eat_effect_only');

    registerOrgan(new Organ('kubejs:candy_pancreas')
        .addScore('endurance', 1.5)
        .addScore('health', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.candy_pancreas.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_pancreas.2")), Text.gold(Text.translatable("kubejs.tooltips.candy_pancreas.3")), Text.gray(Text.translatable("kubejs.tooltips.candy_pancreas.4"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.candy_pancreas.5"))])
        .build())
        .texture('kubejs:item/organs/candy/candy_pancreas')
        .tag('kubejs:pancreas')
        .tag('kubejs:candy');

    // 魔法使系列
    registerOrgan(new Organ('kubejs:plastic_heart')
        .addScore('health', 1.5)
        .addScore('endurance', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.plastic_heart.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.plastic_heart.2"))])
        .build())
        .texture('kubejs:item/organs/magic/plastic_heart')
        .tag('kubejs:magic')
        .tag('kubejs:heart')
        .tag('kubejs:overmagic_only')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:magic_hippocampus')
        .addScore('nerves', 1)
        .addScore('luck', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.magic_hippocampus.1"))])
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.magic_hippocampus.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.magic_hippocampus.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.magic_hippocampus.4"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.magic_hippocampus.5"))])
        .build())
        .texture('kubejs:item/organs/magic/magic_hippocampus')
        .tag('kubejs:magic')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:magic_muscle')
        .addScore('strength', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.magic_muscle.1"))])
        .build())
        .texture('kubejs:item/organs/magic/magic_muscle')
        .tag('kubejs:magic')
        .tag('kubejs:muscle')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:magic_spine')
        .addScore('nerves', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.magic_spine.1"))])
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.magic_spine.2"))])
        .build())
        .texture('kubejs:item/organs/magic/magic_spine')
        .tag('kubejs:magic')
        .tag('kubejs:spine')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:magic_vision')
        .addScore('nerves', -0.5)
        .addScore('metabolism', 1.25)
        .addScore('luck', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.magic_vision.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.magic_vision.2"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.magic_vision.3"))])
        .build())
        .texture('kubejs:item/organs/magic/magic_vision')
        .tag('kubejs:magic')
        .tag('kubejs:active')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:color_palette')
        .addScore('speed', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.color_palette.1")), Text.gold(Text.translatable("kubejs.tooltips.color_palette.2")), Text.gray(Text.translatable("kubejs.tooltips.color_palette.3")), Text.gold(Text.translatable("kubejs.tooltips.color_palette.4")), Text.gray(Text.translatable("kubejs.tooltips.color_palette.5")), Text.green(Text.translatable("kubejs.tooltips.color_palette.6")), Text.gray(Text.translatable("kubejs.tooltips.color_palette.7")), Text.blue(Text.translatable("kubejs.tooltips.color_palette.8"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.color_palette.9")), Text.gold(Text.translatable("kubejs.tooltips.color_palette.10")), Text.gray(Text.translatable("kubejs.tooltips.color_palette.11"))])
        .build())
        .texture('kubejs:item/organs/magic/color_palette')
        .tag('itemborders:gold')
        .tag('kubejs:magic')
        .tag('kubejs:damage_only');

    registerOrgan(new Organ('kubejs:red_ink')
        .addScore('strength', -0.25)
        .addScore('nutrition', 1.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.red_ink.1"))])
        .build())
        .texture('kubejs:item/organs/magic/red_ink')
        .tag('itemborders:gold')
        .tag('kubejs:magic')
        .tag('kubejs:bear');


    registerOrgan(new Organ('kubejs:blood_moon_wand')
        .addScore('nerves', 1.25)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blood_moon_wand.1"))])
        .build())
        .texture('kubejs:item/organs/magic/blood_moon_wand')
        .modifyAttribute('irons_spellbooks:blood_spell_power', 'kubejsBloodSpellPowerWeaponBoost', 0.3, 'addition')
        .tag('itemborders:diamond')
        .tag('kubejs:magic')
        .tag('kubejs:active');


    // 资源系列
    registerOrgan(new Organ('kubejs:ore_lung')
        .addScore('health', -0.25)
        .addScore('nerves', -0.25)
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ore_lung.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ore_lung.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ore_lung.3"))])
        .build())
        .texture('kubejs:item/organs/resource/ore_lung')
        .tag('kubejs:lung')
        .tag('kubejs:resource')
        .tag('itemborders:iron')
        .tag('kubejs:break_only');

    registerOrgan(new Organ('kubejs:desire_of_midas')
        .addScore('strength', -1)
        .addScore('breath_recovery', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.desire_of_midas.1")), Text.gold(Text.translatable("kubejs.tooltips.desire_of_midas.2")), Text.gray(Text.translatable("kubejs.tooltips.desire_of_midas.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.desire_of_midas.4")), Text.gold(Text.translatable("kubejs.tooltips.desire_of_midas.5")), Text.gray(Text.translatable("kubejs.tooltips.desire_of_midas.6")), Text.gold(Text.translatable("kubejs.tooltips.desire_of_midas.7"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.desire_of_midas.8")), Text.gold(Text.translatable("kubejs.tooltips.desire_of_midas.9")), Text.gray(Text.translatable("kubejs.tooltips.desire_of_midas.10"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.desire_of_midas.11"))])
        .build())
        .texture('kubejs:item/organs/resource/desire_of_midas')
        .tag('itemborders:gold')
        .tag('kubejs:resource')
        .tag('kubejs:active')
        .tag('kubejs:break_only');

    registerOrgan(new Organ('kubejs:diamond_bottle')
        .addScore('breath_recovery', -0.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.diamond_bottle.6"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.diamond_bottle.1")), Text.gold(Text.translatable("kubejs.tooltips.diamond_bottle.2")), Text.gray(Text.translatable("kubejs.tooltips.diamond_bottle.3")), Text.gold(Text.translatable("kubejs.tooltips.diamond_bottle.4")), Text.gray(Text.translatable("kubejs.tooltips.diamond_bottle.5"))])
        .build())
        .texture('kubejs:item/organs/resource/diamond_bottle')
        .tag('itemborders:diamond')
        .tag('kubejs:resource')
        .tag('kubejs:break');

    registerOrgan(new Organ('kubejs:redstone_furnace')
        .addScore('health', 1.25)
        .addScore('defense', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.redstone_furnace.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.redstone_furnace.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.redstone_furnace.3"))])
        .build())
        .texture('kubejs:item/organs/resource/redstone_furnace')
        .tag('kubejs:active')
        .tag('kubejs:heart')
        .tag('kubejs:resource')
        .tag('itemborders:red')
        .tag('kubejs:rclick_only');

    registerOrgan(new Organ('kubejs:silk_for_cutting')
        .addScore('knockback_resistant', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.silk_for_cutting.1"))])
        .build())
        .texture('kubejs:item/organs/others/silk_for_cutting')
        .tag('kubejs:muscle')
        .tag('kubejs:break_only');

    registerOrgan(new Organ('kubejs:holy_eyeball')
        .addScore('filtration', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.holy_eyeball.1")), Text.yellow(Text.translatable("kubejs.tooltips.holy_eyeball.2")), Text.yellow(Text.translatable("kubejs.tooltips.holy_eyeball.3"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.holy_eyeball.1")), Text.yellow(Text.translatable("kubejs.tooltips.holy_eyeball.4")), Text.yellow(Text.translatable("kubejs.tooltips.holy_eyeball.5"))])
        .build())
        .texture('kubejs:item/organs/others/holy_eyeball')
        .tag('kubejs:magic')
        .tag('kubejs:muscle')
        .tag('itemborders:gold')
        .tag('kubejs:active');


    registerOrgan(new Organ('kubejs:excited_appendix')
        .addScore('explosive', 2)
        .addScore('creepy', 1)
        .addScore('luck', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.excited_appendix.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.excited_appendix.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.excited_appendix.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.excited_appendix.4"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.excited_appendix.5"))])
        .build())
        .texture('kubejs:item/organs/others/excited_appendix')
        .tag('kubejs:appendix')
        .tag('kubejs:key_pressed');


    // 传说系列
    // 二重身
    registerOrgan(new Organ('kubejs:doppelganger')
        .addScore('health', -1)
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.doppelganger.1"))])
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.doppelganger.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.doppelganger.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.doppelganger.4")), Text.gold(Text.translatable("kubejs.tooltips.doppelganger.5")), Text.gray(Text.translatable("kubejs.tooltips.doppelganger.6"))])
        .build())
        .texture('kubejs:item/organs/legends/doppelganger')
        .tag('kubejs:legends')
        .tag('kubejs:evolution')
        .tag('kubejs:bear_only')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:lost_paradise')
        .addScore('health', 4)
        .addScore('strength', 4)
        .addScore('nerves', 2)
        .addScore('speed', -1)
        .addScore('endurance', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.lost_paradise.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.lost_paradise.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lost_paradise.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lost_paradise.4"))])
        .build())
        .texture('kubejs:item/organs/legends/lost_paradise')
        .rarity('epic')
        .tag('kubejs:legends')
        .tag('kubejs:damage_only')
        .tag('kubejs:loot_entity_only')
        .tag('kubejs:loot_chest_only')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:paradise_regained')
        .addScore('health', -1)
        .addScore('strength', -1)
        .addScore('speed', 1)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.paradise_regained.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.paradise_regained.2"))])
        .build())
        .texture('kubejs:item/organs/legends/paradise_regained')
        .rarity('epic')
        .tag('kubejs:legends')
        .tag('kubejs:loot_entity_only')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:pandora_inactive')
        .addScore('crystalsynthesis', 0.25)
        .addScore('speed', 1)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.pandora_inactive.1"))])
        .addTextLines('default', [Text.darkPurple(Text.translatable("kubejs.tooltips.pandora_inactive.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.pandora_inactive.3")), Text.gold(Text.translatable("kubejs.tooltips.pandora_inactive.4")), Text.gray(Text.translatable("kubejs.tooltips.pandora_inactive.5")), Text.gold(Text.translatable("kubejs.tooltips.pandora_inactive.6"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.pandora_inactive.7")), Text.gold(Text.translatable("kubejs.tooltips.pandora_inactive.8")), Text.gray(Text.translatable("kubejs.tooltips.pandora_inactive.9")), Text.gold(Text.translatable("kubejs.tooltips.pandora_inactive.10"))])
        .build())
        .texture('kubejs:item/organs/legends/pandora_inactive')
        .rarity('epic')
        .tag('kubejs:legends')
        .tag('kubejs:evolution')
        .tag('kubejs:enchant_only')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:the_third_eye')
        .addScore('nerves', 0.5)
        .addScore('luck', -1.5)
        .addScore('crystalsynthesis', 0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.the_third_eye.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.the_third_eye.2"))])
        .build())
        .texture('kubejs:item/organs/warp/the_third_eye')
        .rarity('epic')
        .tag('kubejs:warp')
        .tag('kubejs:damage_only')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:prismarine_crown')
        .addScore('swim_speed', 2)
        .addScore('water_breath', 2)
        .addScore('luck', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.prismarine_crown.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.prismarine_crown.2"))])
        .build())
        .texture('kubejs:item/organs/legends/prismarine_crown')
        .tag('kubejs:legends')
        .tag('kubejs:active_only')
        .tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:illithids')
        .addScore('health', -0.5)
        .addScore('nerves', 1.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.illithids.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.illithids.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.illithids.3"))])
        .build())
        .texture('kubejs:item/organs/warp/illithids')
        .tag('kubejs:warp')
        .tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:fish_in_warp')
        .addScore('speed', 0.5)
        .addScore('endurance', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.fish_in_warp.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.fish_in_warp.2"))])
        .build())
        .texture('kubejs:item/organs/warp/fish_in_warp')
        .tag('kubejs:warp')
        .tag('kubejs:organ_count_only');

    registerOrgan(new Organ('kubejs:disenchantment_paper')
        .addScore('health', -0.5)
        .addScore('nerves', -0.5)
        .addScore('speed', -2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.disenchantment_paper.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.disenchantment_paper.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.disenchantment_paper.3"))])
        .build())
        .texture('kubejs:item/organs/warp/disenchantment_paper')
        .tag('kubejs:warp')
        .tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:warp_bubble')
        .addScore('breath_recovery', -1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.warp_bubble.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.warp_bubble.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.warp_bubble.3"))])
        .build())
        .texture('kubejs:item/organs/warp/warp_bubble')
        .tag('kubejs:bear_only')
        .tag('kubejs:warp');

    // 扭曲器官
    registerOrgan(new Organ('kubejs:pandora_active')
        .addScore('crystalsynthesis', 0.25)
        .addScore('speed', 1)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.pandora_active.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.pandora_active.2")), Text.darkRed(Text.translatable("kubejs.tooltips.pandora_active.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.pandora_active.4"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.pandora_active.5"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.pandora_active.6")), Text.darkPurple(Text.translatable("kubejs.tooltips.warp_count"))])
        .build())
        .texture('kubejs:item/organs/warp/pandora_active')
        .rarity('epic')
        .tag('kubejs:warp')
        .tag('kubejs:enchant_only');

    // boss遗物器官
    registerOrgan(new Organ('kubejs:relic_metal_plate')
        .addScore('health', 0.25)
        .addScore('nerves', 0.25)
        .addScore('breath_recovery', 0.25)
        .addScore('strength', 0.25)
        .addScore('filtration', 0.25)
        .addScore('detoxification', 0.25)
        .addScore('defense', 0.125)
        .addScore('nutrition', 0.125)
        .addScore('endurance', 0.25)
        .addScore('digestion', 0.125)
        .addScore('metabolism', 0.125)
        .addScore('breath_capacity', 0.125)
        .addScore('speed', 0.25)
        .addScore('burning_point', 1)
        .addScore('freezing_point', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.relic_metal_plate.1"))])
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.relic_metal_plate.2"))])
        .build())
        .texture('kubejs:item/organs/relics/relic_metal_plate')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:storm_metal_plate')
        .addScore('health', 0.5)
        .addScore('nerves', 0.5)
        .addScore('breath_recovery', 0.5)
        .addScore('strength', 0.5)
        .addScore('filtration', 0.5)
        .addScore('detoxification', 0.5)
        .addScore('defense', 0.25)
        .addScore('nutrition', 0.25)
        .addScore('endurance', 0.5)
        .addScore('digestion', 0.25)
        .addScore('metabolism', 0.5)
        .addScore('breath_capacity', 0.5)
        .addScore('speed', 0.5)
        .addScore('burning_point', 2)
        .addScore('freezing_point', -2)
        .addTextLines('default', [Text.darkPurple(Text.translatable("kubejs.tooltips.storm_metal_plate.1"))])
        .build())
        .texture('kubejs:item/organs/relics/storm_metal_plate')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:parasitic_elf')
        .addScore('health', 1)
        .addScore('speed', -1)
        .addScore('hydrophobia', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.parasitic_elf.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.parasitic_elf.2")), Text.gold(Text.translatable("kubejs.tooltips.parasitic_elf.3")), Text.gray(Text.translatable("kubejs.tooltips.parasitic_elf.4"))])
        .build())
        .texture('kubejs:item/organs/relics/parasitic_elf')
        .tag('kubejs:relics')
        .tag('kubejs:damage_only');

    registerOrgan(new Organ('kubejs:love_between_lava_and_ice')
        .addScore('health', 1.5)
        .addScore('fire_resistant', 0.5)
        .addScore('burning_point', 5)
        .addScore('freezing_point', -5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.2")), Text.blue(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.3")), Text.gray(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.4")), Text.yellow(0.2), Text.aqua(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.5"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.6")), Text.darkRed(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.7")), Text.gray(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.8")), Text.yellow(0.2), Text.red(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.9"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.love_between_lava_and_ice.10"))])
        .build())
        .texture('kubejs:item/organs/relics/love_between_lava_and_ice')
        .tag('kubejs:heart')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:leviathan_spine')
        .addScore('nerves', 1.75)
        .addScore('swim_speed', 2)
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.leviathan_spine.1"))])
        .build())
        .texture('kubejs:item/organs/relics/leviathan_spine')
        .tag('kubejs:spine')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:leviathan_rib')
        .addScore('defense', 1.75)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.leviathan_rib.1")), Text.gold(2), Text.gray(Text.translatable("kubejs.tooltips.leviathan_rib.2"))])
        .build())
        .texture('kubejs:item/organs/relics/leviathan_rib')
        .tag('kubejs:rib')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:heart_of_blade')
        .addScore('health', -0.75)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.heart_of_blade.1")), Text.gold(Text.translatable("kubejs.tooltips.heart_of_blade.2")), Text.gray(Text.translatable("kubejs.tooltips.heart_of_blade.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.heart_of_blade.4"))])
        .build())
        .texture('kubejs:item/organs/relics/heart_of_blade')
        .tag('kubejs:heart')
        .tag('kubejs:bear_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:blade_of_heart')
        .addScore('defense', -1)
        .addScore('strength', 1.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blade_of_heart.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blade_of_heart.2")), Text.gold(Text.translatable("kubejs.tooltips.blade_of_heart.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.blade_of_heart.4"))])
        .build())
        .texture('kubejs:item/organs/relics/blade_of_heart')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:bone_soul')
        .addScore('defense', 0.5)
        .addScore('strength', 1)
        .addScore('endurance', -0.5)
        .addTextLines('default', [Text.red(Text.translatable("kubejs.tooltips.bone_soul.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.bone_soul.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.bone_soul.3")), Text.gold(Text.translatable("kubejs.tooltips.bone_soul.4")), Text.gray(Text.translatable("kubejs.tooltips.bone_soul.5")), Text.red(Text.translatable("kubejs.tooltips.bone_soul.6"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.bone_soul.7"))])
        .build())
        .texture('kubejs:item/organs/relics/bone_soul')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:flower_heart')
        .addScore('health', 1)
        .addScore('photosynthesis', 3)
        .addScore('metabolism', 0.5)
        .addScore('hydroallergenic', -1)
        .addScore('burning_point', 5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.flower_heart.1"))])
        .build())
        .texture('kubejs:item/organs/relics/flower_heart')
        .tag('kubejs:heart')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:wither_and_fall')
        .addScore('health', -0.5)
        .addScore('photosynthesis', 0.5)
        .addScore('defense', -1.5)
        .addScore('nerves', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.wither_and_fall.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.wither_and_fall.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.wither_and_fall.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.wither_and_fall.4"))])
        .build())
        .texture('kubejs:item/organs/relics/wither_and_fall')
        .tag('kubejs:heart')
        .tag('kubejs:key_pressed')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:melty_blood')
        .addScore('strength', 1.5)
        .addScore('speed', 1.0)
        .addScore('nerves', -0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.melty_blood.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.melty_blood.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.melty_blood.3"))])
        .build())
        .texture('kubejs:item/organs/relics/melty_blood')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:aesegull_rib_left')
        .addScore('defense', 1.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_left.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_left.2")), Text.gold(Text.translatable("kubejs.tooltips.aesegull_rib_left.3")), Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_left.4")), Text.gold(3), Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_left.5"))])
        .build())
        .texture('kubejs:item/organs/relics/aesegull_rib_left')
        .tag('kubejs:rib')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:aesegull_rib_right')
        .addScore('defense', 1.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_right.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_right.2")), Text.gold(Text.translatable("kubejs.tooltips.aesegull_rib_right.3")), Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_right.4")), Text.gold(3), Text.gray(Text.translatable("kubejs.tooltips.aesegull_rib_right.5"))])
        .build())
        .texture('kubejs:item/organs/relics/aesegull_rib_right')
        .tag('kubejs:rib')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:mockery')
        .addScore('nerves', -0.25)
        .addScore('strength', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.mockery.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mockery.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mockery.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mockery.4"))])
        .build())
        .texture('kubejs:item/organs/relics/mockery')
        .tag('kubejs:damage_only')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:sarcasm')
        .addScore('nerves', -0.25)
        .addScore('defense', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.sarcasm.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.sarcasm.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.sarcasm.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.sarcasm.4"))])
        .build())
        .texture('kubejs:item/organs/relics/sarcasm')
        .tag('kubejs:bear_only')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:cursed_soul')
        .addScore('strength', -1)
        .addScore('nerves', 1.25)
        .addScore('detoxification', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.cursed_soul.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.cursed_soul.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.cursed_soul.3"))])
        .build())
        .texture('kubejs:item/organs/relics/cursed_soul')
        .tag('kubejs:bear_only')
        .tag('kubejs:warp')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:forbidden_fruit')
        .addScore('detoxification', 1.75)
        .addScore('health', 0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.forbidden_fruit.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.forbidden_fruit.2")), Text.red(Text.translatable("kubejs.tooltips.forbidden_fruit.3")), Text.gray(Text.translatable("kubejs.tooltips.forbidden_fruit.4"))])
        .build())
        .texture('kubejs:item/organs/relics/forbidden_fruit')
        .tag('kubejs:liver')
        .tag('kubejs:warp')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:executioner_blade_pieces')
        .addScore('strength', 1.75)
        .addScore('health', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.executioner_blade_pieces.1")), Text.red(Text.translatable("kubejs.tooltips.executioner_blade_pieces.2")), Text.gray(Text.translatable("kubejs.tooltips.executioner_blade_pieces.3")), Text.gold(Text.translatable("kubejs.tooltips.executioner_blade_pieces.4")), Text.gray(Text.translatable("kubejs.tooltips.executioner_blade_pieces.5"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.executioner_blade_pieces.6"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.executioner_blade_pieces.7"))])
        .build())
        .texture('kubejs:item/organs/relics/executioner_blade_pieces')
        .tag('kubejs:muscle')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:bloody_bone_arrow')
        .addScore('strength', 1.5)
        .addScore('health', -0.5)
        .addScore('speed', -1.0)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.bloody_bone_arrow.1")), Text.red(Text.translatable("kubejs.tooltips.bloody_bone_arrow.2")), Text.gray(Text.translatable("kubejs.tooltips.bloody_bone_arrow.3")), Text.gold(Text.translatable("kubejs.tooltips.bloody_bone_arrow.4"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.bloody_bone_arrow.5"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.bloody_bone_arrow.6"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.bloody_bone_arrow.7"))])
        .build())
        .texture('kubejs:item/organs/relics/bloody_bone_arrow')
        .tag('kubejs:rib')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:heavy_hammer_muscle')
        .addScore('strength', 1.5)
        .addScore('swim_speed', -1)
        .addScore('fire_resistant', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.heavy_hammer_muscle.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.heavy_hammer_muscle.2")), Text.gold(Text.translatable("kubejs.tooltips.heavy_hammer_muscle.3")), Text.gray(Text.translatable("kubejs.tooltips.heavy_hammer_muscle.4"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.heavy_hammer_muscle.5"))])
        .build())
        .texture('kubejs:item/organs/relics/heavy_hammer_muscle')
        .tag('kubejs:muscle')
        .tag('kubejs:machine')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:redstone_chipset')
        .addScore('nerves', 1.5)
        .addScore('fire_resistant', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.redstone_chipset.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.redstone_chipset.2"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.redstone_chipset.3"))])
        .build())
        .texture('kubejs:item/organs/relics/redstone_chipset')
        .tag('kubejs:machine')
        .tag('kubejs:active_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:demon_eyeball')
        .addScore('luck', -1)
        .addScore('fire_resistant', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.demon_eyeball.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.demon_eyeball.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.demon_eyeball.3")), Text.gold(Text.translatable("kubejs.tooltips.demon_eyeball.4")), Text.gray(Text.translatable("kubejs.tooltips.demon_eyeball.5"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.demon_eyeball.6"))])
        .build())
        .texture('kubejs:item/organs/relics/demon_eyeball')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:sand_bone')
        .addScore('defense', 1)
        .addScore('fire_resistant', 1)
        .addScore('strength', 1.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.sand_bone.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.sand_bone.2"))])
        .build())
        .texture('kubejs:item/organs/relics/sand_bone')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:ancient_chip')
        .addScore('nerves', 1.25)
        .addScore('strength', 0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ancient_chip.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ancient_chip.2"))])
        .build())
        .texture('kubejs:item/organs/relics/ancient_chip')
        .tag('kubejs:damage_only')
        .tag('kubejs:machine')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:ring_for_home')
        .addScore('nerves', -0.25)
        .addScore('speed', -0.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ring_for_home.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ring_for_home.2"))])
        .build())
        .texture('kubejs:item/organs/relics/ring_for_home')
        .tag('kubejs:eat_effect_only')
        .tag('kubejs:magic')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:embers_liver')
        .addScore('detoxification', 1)
        .addScore('fire_resistant', 1)
        .addScore('hydroallergenic', 2)
        .addScore('strength', -1.5)
        .addScore('burning_point', 20)
        .addScore('freezing_point', 5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.embers_liver.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.embers_liver.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.embers_liver.3"))])
        .build())
        .texture('kubejs:item/organs/relics/embers_liver')
        .tag('kubejs:liver')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:netherite_muscle')
        .addScore('strength', 2.25)
        .addScore('fire_resistant', 1)
        .addScore('digestion', -1)
        .addScore('iron_repair', 1)
        .addScore('burning_point', 5).addScore('freezing_point', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.netherite_muscle.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.netherite_muscle.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.netherite_muscle.3"))])
        .build())
        .texture('kubejs:item/organs/relics/netherite_muscle')
        .tag('kubejs:muscle')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:ender_guard_eyeball')
        .addScore('hydrophobia', 1)
        .addScore('luck', -1)
        .addScore('crystalsynthesis', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ender_guard_eyeball.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ender_guard_eyeball.2"))])
        .build())
        .texture('kubejs:item/organs/relics/ender_guard_eyeball')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:harbinger_lung')
        .addScore('breath_recovery', 1)
        .addScore('breath_capacity', 1)
        .addScore('withered', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.harbinger_lung.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.harbinger_lung.2"))])
        .build())
        .texture('kubejs:item/organs/relics/harbinger_lung')
        .tag('kubejs:machine')
        .tag('kubejs:resource')
        .tag('kubejs:bear_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:bad_ink')
        .addScore('strength', -1)
        .addScore('filtration', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.bad_ink.1"))])
        .build())
        .texture('kubejs:item/organs/relics/bad_ink')
        .tag('kubejs:magic')
        .tag('kubejs:relics')
        .tag('kubejs:active');

    registerOrgan(new Organ('kubejs:freezing_intestine')
        .addScore('digestion', 1.25)
        .addScore('nutrition', 1.75)
        .addScore('burning_point', -5)
        .addScore('freezing_point', -10)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.freezing_intestine.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.freezing_intestine.2"))])
        .build())
        .texture('kubejs:item/organs/relics/freezing_intestine')
        .tag('kubejs:intestine')
        .tag('kubejs:bear_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:void_worm_stomach')
        .addScore('digestion', 2.5)
        .addScore('nutrition', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.void_worm_stomach.1"))])
        .build())
        .texture('kubejs:item/organs/relics/void_worm_stomach')
        .tag('kubejs:stomach')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:warden_core')
        .addScore('health', 2.0)
        .addScore('endurance', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.warden_core.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.warden_core.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.warden_core.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.warden_core.4"))])
        .build())
        .texture('kubejs:item/organs/relics/warden_core')
        .tag('kubejs:key_pressed')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:sculk_pieces')
        .addScore('detoxification', 1.75)
        .addScore('metabolism', 1.5)
        .addScore('filtration', 1)
        .build())
        .texture('kubejs:item/organs/relics/sculk_pieces')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:warden_rib')
        .addScore('defense', 2)
        .addScore('knockback_resistant', 1)
        .build())
        .texture('kubejs:item/organs/relics/warden_rib')
        .tag('kubejs:rib')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:warden_muscle')
        .addScore('strength', 2)
        .addScore('speed', 0.5)
        .build())
        .texture('kubejs:item/organs/relics/warden_muscle')
        .tag('kubejs:muscle')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:sculk_soul')
        .addScore('nerves', 1.5)
        .addScore('speed', 0.5)
        .build())
        .texture('kubejs:item/organs/relics/sculk_soul')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:vulcan_furnace')
        .addScore('strength', 1.75)
        .addScore('defense', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.vulcan_furnace.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.vulcan_furnace.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.vulcan_furnace.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.vulcan_furnace.4"))])
        .build())
        .texture('kubejs:item/organs/relics/vulcan_furnace')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:active')
        .tag('kubejs:resource')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:amethyst_magic_core')
        .addScore('health', 1.5)
        .addScore('nerves', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.amethyst_magic_core.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.amethyst_magic_core.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.amethyst_magic_core.3"))])
        .build())
        .texture('kubejs:item/organs/relics/amethyst_magic_core')
        .tag('kubejs:key_pressed')
        .tag('kubejs:heart')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:origin_knight_core')
        .addScore('health', 0.5)
        .addScore('defense', 2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.origin_knight_core.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.origin_knight_core.2"))])
        .build())
        .texture('kubejs:item/organs/relics/origin_knight_core')
        .tag('kubejs:damage_only')
        .tag('kubejs:heart')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:fish_in_chest')
        .addScore('health', 0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.fish_in_chest.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.fish_in_chest.2"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.fish_in_chest.3"))])
        .build())
        .texture('kubejs:item/organs/relics/fish_in_chest')
        .tag('kubejs:active_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:broken_prismarine_crown')
        .addScore('glowing', 1)
        .addScore('water_breath', 2)
        .addScore('swim_speed', 2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.broken_prismarine_crown.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.broken_prismarine_crown.2"))])
        .build())
        .texture('kubejs:item/organs/relics/broken_prismarine_crown')
        .tag('kubejs:active_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:immortal_volcanic_rock')
        .addScore('hydroallergenic', 3)
        .addScore('swim_speed', -1)
        .addScore('burning_point', 10)
        .addScore('freezing_point', -10)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.immortal_volcanic_rock.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.immortal_volcanic_rock.2"))])
        .build())
        .texture('kubejs:item/organs/relics/immortal_volcanic_rock')
        .tag('kubejs:relics')
        .tag('kubejs:on_fire_check');

    registerOrgan(new Organ('kubejs:frenzy_blast_furance')
        .addScore('hydrophobia', 1)
        .addScore('endurance', 1.25)
        .addScore('digestion', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.frenzy_blast_furance.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.frenzy_blast_furance.2"))])
        .build())
        .texture('kubejs:item/organs/relics/frenzy_blast_furance')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:blood_crystal')
        .addScore('crystalsynthesis', 1.5)
        .addScore('glowing', 1)
        .addScore('impact_resistant', 2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.blood_crystal.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blood_crystal.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.blood_crystal.3"))])
        .build())
        .texture('kubejs:item/organs/relics/blood_crystal')
        .tag('kubejs:key_pressed')
        .tag('kubejs:relics');

    // 碎片
    registerOrgan(new Organ('kubejs:nether_star_shard')
        .addScore('fire_resistant', 0.5)
        .addScore('strength', 1)
        .addScore('defense', 1)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.nether_star_shard.1"))])
        .build())
        .texture('kubejs:item/organs/shard/nether_star_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:sloth_shard')
        .addScore('health', 3.5)
        .addScore('speed', -3)
        .addScore('defense', 3)
        .addScore('metabolism', -1.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.sloth_shard.1"))])
        .build())
        .texture('kubejs:item/organs/shard/sloth_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:wrath_shard')
        .addScore('strength', 3)
        .addScore('nerves', -0.5)
        .addScore('defense', -2)
        .addScore('launching', 4.0)
        .addScore('burning_point', 5)
        .addScore('freezing_point', 10)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.wrath_shard.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.wrath_shard.2"))])
        .build())
        .texture('kubejs:item/organs/shard/wrath_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:envy_shard')
        .addScore('filtration', -1.5)
        .addScore('breath_recovery', 2)
        .addScore('endurance', -2.5)
        .addScore('speed', 2)
        .addScore('burning_point', -3).addScore('freezing_point', -3)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.envy_shard.1"))])
        .build())
        .texture('kubejs:item/organs/shard/envy_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:gluttony_shard')
        .addScore('health', -2.5)
        .addScore('digestion', 3)
        .addScore('nutrition', 2)
        .addScore('speed', -1.5)
        .addScore('burning_point', 10)
        .addScore('freezing_point', -10)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.gluttony_shard.1"))])
        .build())
        .texture('kubejs:item/organs/shard/gluttony_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:greed_shard')
        .addScore('luck', 5)
        .addScore('knockback_resistant', -2.5)
        .addScore('impact_resistant', -2.5)
        .addScore('fire_resistant', -1.5)
        .addScore('burning_point', -3)
        .addScore('freezing_point', 3)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.greed_shard.1"))])
        .build())
        .texture('kubejs:item/organs/shard/greed_shard')
        .tag('itemborders:gold')
        .tag('kubejs:loot_entity_only');

    registerOrgan(new Organ('kubejs:lust_shard')
        .addScore('nerves', 2.5)
        .addScore('buff_purging', 2)
        .addScore('endurance', -2.5)
        .addScore('health', -1)
        .addScore('burning_point', 6)
        .addScore('freezing_point', 6)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lust_shard.1"))])
        .build())
        .texture('kubejs:item/organs/shard/lust_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:pride_shard')
        .addScore('crystalsynthesis', 1.5)
        .addScore('dragon_breath', 2)
        .addScore('defense', -3.5)
        .addScore('detoxification', 3.5)
        .addScore('burning_point', 6)
        .addScore('freezing_point', -6)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.pride_shard.1"))])
        .build())
        .texture('kubejs:item/organs/shard/pride_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    // 位置器官
    registerOrgan(new Organ('kubejs:stomach_tumor')
        .addScore('endurance', 0.5)
        .addScore('digestion', 1)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.stomach_tumor.1")), Text.gold(3), Text.gray(Text.translatable("kubejs.tooltips.stomach_tumor.2")), Text.gold(8), Text.gray(Text.translatable("kubejs.tooltips.stomach_tumor.3"))])
        .build())
        .texture('kubejs:item/organs/others/stomach_tumor')
        .tag('kubejs:stomach')
        .tag('kubejs:active');

    // 杂项
    registerOrgan(new Organ('kubejs:telescopic_arm')
        .addScore('speed', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.telescopic_arm.1")), Text.gold(1), Text.gray(Text.translatable("kubejs.tooltips.telescopic_arm.2"))])
        .build())
        .texture('kubejs:item/organs/machine/telescopic_arm')
        .tag('itemborders:iron')
        .tag('kubejs:machine')
        .tag('kubejs:active_only')
        .tag('kubejs:evolution');

    registerOrgan(new Organ('kubejs:telescopic_tool_arm')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.telescopic_tool_arm.1")), Text.gold(2), Text.gray(Text.translatable("kubejs.tooltips.telescopic_tool_arm.2"))])
        .build())
        .texture('kubejs:item/organs/machine/telescopic_arm')
        .tag('itemborders:gold')
        .tag('kubejs:machine')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:telescopic_attack_arm')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.telescopic_attack_arm.1")), Text.gold(1), Text.gray(Text.translatable("kubejs.tooltips.telescopic_attack_arm.2"))])
        .build())
        .texture('kubejs:item/organs/machine/telescopic_attack_arm')
        .tag('itemborders:gold')
        .tag('kubejs:machine')
        .tag('kubejs:active_only');

    registerOrgan(new Organ('kubejs:lamellar_armor_piece')
        .addScore('defense', 2.5)
        .addScore('speed', -1)
        .build())
        .texture('kubejs:item/organs/machine/lamellar_armor_piece')
        .tag('itemborders:iron')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:chain_armor_piece')
        .addScore('defense', 2)
        .addScore('speed', -0.5)
        .build())
        .texture('kubejs:item/organs/machine/chain_armor_piece')
        .tag('itemborders:iron')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:long_lasting_pill')
        .addScore('strength', -1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.long_lasting_pill.1"))])
        .build())
        .texture('kubejs:item/organs/others/long_lasting_pill')
        .tag('itemborders:iron')
        .tag('kubejs:evolution')
        .tag('kubejs:auto_active');

    registerOrgan(new Organ('kubejs:long_lasting_pill_gold')
        .addScore('luck', 1)
        .addScore('speed', 1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.long_lasting_pill_gold.1"))])
        .build())
        .texture('kubejs:item/organs/others/long_lasting_pill')
        .tag('itemborders:gold')
        .tag('kubejs:auto_active');

    registerOrgan(new Organ('kubejs:d8')
        .addScore('luck', 1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.d8.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.green(Text.translatable("kubejs.tooltips.d8.2"))])
        .build())
        .texture('kubejs:item/organs/others/d8')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:loot_chest_only');

    registerOrgan(new Organ('kubejs:genesis')
        .addScore('luck', 10)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.genesis.1"))])
        .build())
        .texture('kubejs:item/organs/legends/genesis')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:exclued_lucky_block')
        .tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:go_camping')
        .addScore('luck', 2)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.go_camping.1"))])
        .build())
        .texture('kubejs:item/organs/legends/go_camping')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:is_rabbit')
        .addScore('luck', 2)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.is_rabbit.1"))])
        .build())
        .texture('kubejs:item/organs/magic/is_rabbit')
        .tag('itemborders:gold')
        .tag('kubejs:magic')
        .tag('kubejs:player_tick_only');


    // 食物系列
    registerOrgan(new Organ('kubejs:hamimelon_organ')
        .addScore('health', 1)
        .addScore('endurance', 1.5)
        .addScore('luck', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.hamimelon_organ.1"))])
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.hamimelon_organ.2"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.hamimelon_organ.3")), Text.of(Text.translatable("kubejs.tooltips.hamimelon_organ.4")).color('#f1b500'), Text.gray(Text.translatable("kubejs.tooltips.hamimelon_organ.5")), Text.gold(2), Text.gray(Text.translatable("kubejs.tooltips.hamimelon_organ.6"))])
        .build())
        .food(food => { food.hunger(6).saturation(0.8) })
        .texture('kubejs:item/organs/food/hamimelon_organ')
        .tag('itemborders:gold')
        .tag('kubejs:food')
        .tag('kubejs:active');

    registerOrgan(new Organ('kubejs:watermelon_organ')
        .addScore('health', 1.25)
        .addScore('speed', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.watermelon_organ.1"))])
        .build())
        .food(food => { food.hunger(4).saturation(0.8) })
        .texture('kubejs:item/organs/food/watermelon_organ')
        .tag('itemborders:iron')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:lucky_cookie_organ')
        .addScore('luck', 2.5)
        .addScore('speed', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.lucky_cookie_organ.1"))])
        .build())
        .food(food => {
            food.hunger(2).saturation(2).alwaysEdible().eaten(event => {
                if (!event.player) return
                event.server.runCommandSilent(`/title ${event.player.name.getString()} title {"text":"§6${Text.translatable(randomGet(luckyCookieSentence)).getString()}§7"}`)
                if (Math.random() < 0.02) {
                    event.player.give(Item.of('kubejs:golden_lucky_cookie_organ'))
                }
            })
        })
        .texture('kubejs:item/organs/food/lucky_cookie')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:golden_lucky_cookie_organ')
        .addScore('luck', 3)
        .addScore('speed', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.golden_lucky_cookie_organ.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.golden_lucky_cookie_organ.2"))])
        .build())
        .food(food => { food.hunger(6).saturation(1.5) })
        .texture('kubejs:item/organs/food/golden_lucky_cookie_organ')
        .tag('itemborders:gold')
        .tag('kubejs:damage_only')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:cream_cookie_heart')
        .addScore('health', 1.75)
        .addScore('defense', -1)
        .addScore('luck', 1.5)
        .addScore('burning_point', 5)
        .addScore('freezing_point', -5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.cream_cookie_heart.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.cream_cookie_heart.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red(Text.translatable("kubejs.tooltips.cream_cookie_heart.3"))])
        .build())
        .food(food => { food.hunger(8).saturation(1) })
        .texture('kubejs:item/organs/food/cream_cookie_heart')
        .tag('itemborders:gold')
        .tag('kubejs:food')
        .tag('kubejs:eat_effect_only');

    registerOrgan(new Organ('kubejs:mini_slime')
        .addScore('defense', -0.25)
        .addScore('endurance', 1.75)
        .addScore('luck', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.mini_slime.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mini_slime.2"))])
        .build())
        .food(food => { food.hunger(6).saturation(0.5) })
        .texture('kubejs:item/organs/food/mini_slime')
        .tag('kubejs:active')
        .tag('itemborders:diamond')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:mini_vampire')
        .addScore('health', -0.5)
        .addScore('speed', 1)
        .addScore('fire_resistant', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.mini_vampire.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mini_vampire.2"))])
        .build())
        .food(food => { food.hunger(2).saturation(2) })
        .texture('kubejs:item/organs/food/mini_vampire')
        .tag('kubejs:player_tick_only')
        .tag('itemborders:diamond')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:king_of_stomach')
        .addScore('digestion', 2)
        .addScore('nutrition', 2)
        .addScore('fire_resistant', -5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.king_of_stomach.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.king_of_stomach.2"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.king_of_stomach.3"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.king_of_stomach.4"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.king_of_stomach.5"))])
        .build())
        .texture('kubejs:item/organs/food/king_of_stomach')
        .tag('kubejs:active_only')
        .tag('itemborders:diamond')
        .tag('kubejs:stomach')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:chicken_heart')
        .addScore('health', 1.75)
        .addScore('burning_point', -5)
        .addScore('freezing_point', -5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.chicken_heart.1"))])
        .build())
        .food(food => { food.hunger(8).saturation(1) })
        .texture('kubejs:item/organs/food/chicken_heart')
        .tag('kubejs:heart')
        .tag('kubejs:active_only')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:chicken_kidney')
        .addScore('detoxification', 0.5)
        .addScore('filtration', 1.75)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.chicken_kidney.1"))])
        .build())
        .food(food => { food.hunger(6).saturation(1) })
        .texture('kubejs:item/organs/food/chicken_kidney')
        .tag('kubejs:kidney')
        .tag('kubejs:active')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:chicken_lung')
        .addScore('breath_recovery', 1.5)
        .addScore('breath_capacity', 1.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.chicken_lung.1"))])
        .build())
        .food(food => { food.hunger(6).saturation(1) })
        .texture('kubejs:item/organs/food/chicken_lung')
        .tag('kubejs:lung')
        .tag('kubejs:active')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    registerOrgan(new Organ('kubejs:chicken_strip')
        .addScore('luck', 0.5)
        .addScore('strength', 1.5)
        .build())
        .food(food => { food.hunger(4).saturation(1) })
        .texture('kubejs:item/organs/food/chicken_strip')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    // 肿瘤系列器官
    registerOrgan(new Organ('kubejs:origin_of_tumor')
        .addScore('luck', 2.0)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.origin_of_tumor.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.origin_of_tumor.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.origin_of_tumor.3"))])
        .build())
        .texture('kubejs:item/organs/infected/origin_of_tumor')
        .tag('itemborders:diamond')
        .tag('kubejs:eat_effect_only')
        .tag('kubejs:infected');

    registerOrgan(new Organ('kubejs:worm_neuron')
        .addScore('nerves', 1.25)
        .addScore('health', -0.5)
        .addScore('nutrition', -2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.worm_neuron.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.worm_neuron.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.worm_neuron.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.worm_neuron.4"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.worm_neuron.5"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.worm_neuron.6"))])
        .build())
        .texture('kubejs:item/organs/infected/worm_neuron')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:warp')
        .tag('kubejs:infected');

    // alex
    registerOrgan(new Organ('kubejs:sunbird_crystals')
        .addScore('luck', 1.75)
        .addScore('buoyant', 0.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.sunbird_crystals.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.sunbird_crystals.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.sunbird_crystals.3"))])
        .build())
        .texture('kubejs:item/organs/alex/sunbird_crystals')
        .tag('itemborders:gold')
        .tag('kubejs:key_pressed')
        .tag('kubejs:damage_only');

    registerOrgan(new Organ('kubejs:enderiophage_heart')
        .addScore('hydrophobia', 1)
        .addScore('health', 0.5)
        .addScore('metabolism', 1.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.enderiophage_heart.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.enderiophage_heart.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.enderiophage_heart.3"))])
        .build())
        .texture('kubejs:item/organs/alex/enderiophage_heart')
        .tag('itemborders:gold')
        .tag('kubejs:key_pressed')
        .tag('kubejs:heart');

    registerOrgan(new Organ('kubejs:whale_lung')
        .addScore('breath_capacity', 2.5)
        .addScore('water_breath', 0.5)
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.whale_lung.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.whale_lung.2"))])
        .build())
        .texture('kubejs:item/organs/alex/whale_lung')
        .tag('kubejs:active_only')
        .tag('itemborders:gold')
        .tag('kubejs:lung');

    registerOrgan(new Organ('kubejs:mantis_shrimp_fist')
        .addScore('strength', 2)
        .addScore('speed', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.mantis_shrimp_fist.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mantis_shrimp_fist.2"))])
        .build())
        .texture('kubejs:item/organs/alex/mantis_shrimp_fist')
        .tag('kubejs:player_tick')
        .tag('itemborders:gold')
        .tag('kubejs:muscle');

    registerOrgan(new Organ('kubejs:tusk')
        .addScore('defense', 2)
        .addScore('strength', 0.5)
        .addScore('speed', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.tusk.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.tusk.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.tusk.3"))])
        .build())
        .texture('kubejs:item/organs/alex/tusk')
        .tag('kubejs:damage_only')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:viviparous_crinoidea')
        .addScore('hydrophobia', -3)
        .addScore('hydroallergenic', -3)
        .addScore('strength', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.viviparous_crinoidea.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.viviparous_crinoidea.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.viviparous_crinoidea.3"))])
        .build())
        .texture('kubejs:item/organs/alex/viviparous_crinoidea')
        .tag('kubejs:key_pressed')
        .tag('itemborders:diamond')
        .tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:egg_of_straddler')
        .addScore('metabolism', 1.75)
        .addScore('launching', 0.5)
        .addScore('leaping', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.egg_of_straddler.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.egg_of_straddler.2"))])
        .build())
        .texture('kubejs:item/organs/alex/egg_of_straddler')
        .tag('kubejs:player_tick')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:soul_vulture_feather')
        .addScore('buoyant', 1)
        .addScore('speed', 1)
        .addScore('strength', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.soul_vulture_feather.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.soul_vulture_feather.2"))])
        .build())
        .texture('kubejs:item/organs/alex/soul_vulture_feather')
        .tag('kubejs:damage_only')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:fossil_gallbladder')
        .addScore('strength', 2)
        .addScore('leaping', -0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.fossil_gallbladder.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.fossil_gallbladder.2"))])
        .build())
        .texture('kubejs:item/organs/alex/fossil_gallbladder')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:weird_paperman')
        .addScore('health', -0.5)
        .addScore('breath_recovery', -1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.weird_paperman.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.weird_paperman.2"))])
        .build())
        .texture('kubejs:item/organs/alex/weird_paperman')
        .tag('kubejs:bear_only')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:potoo_beak')
        .addScore('strength', 1.25)
        .addScore('speed', 1.0)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.potoo_beak.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.potoo_beak.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.darkGray(Text.translatable("kubejs.tooltips.potoo_beak.3"))])
        .build())
        .texture('kubejs:item/organs/alex/potoo_beak')
        .tag('kubejs:key_pressed')
        .tag('itemborders:gold');

    registerOrgan(new Organ('kubejs:treasure_detector_feather')
        .addScore('luck', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.treasure_detector_feather.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.treasure_detector_feather.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.treasure_detector_feather.3"))])
        .build())
        .texture('kubejs:item/organs/alex/treasure_detector_feather')
        .tag('kubejs:key_pressed')
        .tag('itemborders:gold');


    registerOrgan(new Organ('kubejs:warped_heart').addScore('health', 2.0).addScore('nerves', -0.75).build()).texture('kubejs:item/organs/alex/warped_heart').tag('kubejs:heart');

    registerOrgan(new Organ('kubejs:warped_spine').addScore('nerves', 1.25).build()).texture('kubejs:item/organs/alex/warped_spine').tag('kubejs:spine');

    registerOrgan(new Organ('kubejs:feather').addScore('speed', 1).addScore('defense', -1).build()).texture('kubejs:item/organs/alex/feather');

    registerOrgan(new Organ('kubejs:mollusk_muscle').addScore('strength', 1.25).addScore('speed', 0.375).build()).texture('kubejs:item/organs/alex/mollusk_muscle').tag('kubejs:muscle');

    registerOrgan(new Organ('kubejs:giant_squid_whisker').addScore('strength', 0.5).addScore('speed', 1.25).build()).texture('kubejs:item/organs/alex/giant_squid_whisker').tag('kubejs:muscle');

    registerOrgan(new Organ('kubejs:mimic_octopus_skin').addScore('defense', 1.25).addScore('speed', 0.25).build()).texture('kubejs:item/organs/alex/mimic_octopus_skin');

    registerOrgan(new Organ('kubejs:fish_spine').addScore('nerves', 1).build()).texture('kubejs:item/organs/alex/fish_spine').tag('kubejs:spine');

    registerOrgan(new Organ('kubejs:fish_bone').addScore('defense', 0.75).addScore('speed', 0.75).build()).texture('kubejs:item/organs/alex/fish_bone').tag('kubejs:rib');

    registerOrgan(new Organ('kubejs:fish_intestine').addScore('digestion', 1.25).build()).texture('kubejs:item/organs/alex/fish_intestines').tag('kubejs:intestine');

    registerOrgan(new Organ('kubejs:mosquito_repellent').addScore('fire_resistant', 1.25).addScore('strength', 1).addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.mosquito_repellent.1"))]).build()).texture('kubejs:item/organs/alex/mosquito_repellent').tag('kubejs:bear_only');

    registerOrgan(new Organ('kubejs:nether_rib').addScore('defense', 1.25).addScore('fire_resistant', 0.5).build()).texture('kubejs:item/organs/nether/nether_rib').tag('kubejs:rib');

    registerOrgan(new Organ('kubejs:nether_muscle').addScore('strength', 1.25).addScore('fire_resistant', 0.5).build()).texture('kubejs:item/organs/nether/nether_muscle').tag('kubejs:muscle');

    registerOrgan(new Organ('kubejs:nether_heart').addScore('health', 0.75).addScore('fire_resistant', 1).build()).texture('kubejs:item/organs/nether/nether_heart').tag('kubejs:heart');

    registerOrgan(new Organ('kubejs:nether_spine').addScore('nerves', 1.25).build()).texture('kubejs:item/organs/nether/nether_spine').tag('kubejs:spine');

    registerOrgan(new Organ('kubejs:crimson_mosquito_mouthparts').addScore('strength', 0.5).addScore('defense', -1).build()).texture('kubejs:item/organs/nether/crimson_mosquito_mouthparts');

    // 纪念器官
    registerOrgan(new Organ('kubejs:hard_bone').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.hard_bone.1"))]).addScore('defense', 2).addScore('strength', 1).build()).texture('minecraft:item/bone').tag('kubejs:rib').tag('itemborders:diamond');

    // 模板器官
    registerOrgan(new Organ('kubejs:lung_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.lung_template.1"))]).addScore('breath_recovery', 0.75).addScore('breath_capacity', 0.75).addScore('endurance', 0.75).build()).texture('kubejs:item/organs/template/lung_template').tag('kubejs:lung').tag('kubejs:evolution');

    registerOrgan(new Organ('kubejs:muscle_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.muscle_template.1"))]).addScore('strength', 0.75).addScore('speed', 0.75).build()).texture('kubejs:item/organs/template/muscle_template').tag('kubejs:muscle').tag('kubejs:evolution');

    registerOrgan(new Organ('kubejs:heart_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.heart_template.1"))]).addScore('health', 0.75).addScore('burning_point', 6).addScore('freezing_point', -6).build()).texture('kubejs:item/organs/template/heart_template').tag('kubejs:evolution').tag('kubejs:heart');

    registerOrgan(new Organ('kubejs:intestine_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.intestine_template.1"))]).addScore('nutrition', 0.75).build()).texture('kubejs:item/organs/template/intestine_template').tag('kubejs:evolution').tag('kubejs:intestine');

    registerOrgan(new Organ('kubejs:rib_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.rib_template.1"))]).addScore('defense', 0.75).build()).texture('kubejs:item/organs/template/rib_template').tag('kubejs:rib').tag('kubejs:evolution');

    registerOrgan(new Organ('kubejs:spine_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.spine_template.1"))]).addScore('defense', 0.375).addScore('nerves', 0.75).build()).texture('kubejs:item/organs/template/spine_template').tag('kubejs:evolution').tag('kubejs:spine');

    registerOrgan(new Organ('kubejs:spleen_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.spleen_template.1"))]).addScore('metabolism', 0.75).build()).texture('kubejs:item/organs/template/spleen_template').tag('kubejs:evolution').tag('kubejs:spleen');

    registerOrgan(new Organ('kubejs:stomach_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.stomach_template.1"))]).addScore('digestion', 0.75).addScore('burning_point', -6).addScore('freezing_point', 6).build()).texture('kubejs:item/organs/template/stomach_template').tag('kubejs:evolution').tag('kubejs:stomach');

    registerOrgan(new Organ('kubejs:kidney_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.kidney_template.1"))]).addScore('filtration', 0.75).build()).texture('kubejs:item/organs/template/kidney_template').tag('kubejs:evolution').tag('kubejs:kidney');

    registerOrgan(new Organ('kubejs:liver_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.liver_template.1"))]).addScore('detoxification', 0.75).build()).texture('kubejs:item/organs/template/liver_template').tag('kubejs:evolution').tag('kubejs:liver');

    registerOrgan(new Organ('kubejs:appendix_template').addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.appendix_template.1"))]).addScore('luck', 0.75).build()).texture('kubejs:item/organs/template/appendix_template').tag('kubejs:evolution').tag('kubejs:appendix');

    // 基本器官
    registerOrgan(new Organ('kubejs:muscle_iron').addScore('strength', 1.25).addScore('speed', 1.25).build()).texture('kubejs:item/organs/common/muscle').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:muscle');

    registerOrgan(new Organ('kubejs:spleen_iron').addScore('metabolism', 1.25).build()).texture('kubejs:item/organs/common/spleen').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:spleen');

    registerOrgan(new Organ('kubejs:appendix_iron').addScore('luck', 1.25).build()).texture('kubejs:item/organs/common/appendix').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:appendix');

    registerOrgan(new Organ('kubejs:kidney_iron').addScore('filtration', 1.25).build()).texture('kubejs:item/organs/common/kidney').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:kidney');

    registerOrgan(new Organ('kubejs:liver_iron').addScore('detoxification', 1.25).build()).texture('kubejs:item/organs/common/liver').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:liver');

    registerOrgan(new Organ('kubejs:rib_iron').addScore('defense', 1.25).build()).texture('kubejs:item/organs/common/rib').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:rib');

    registerOrgan(new Organ('kubejs:intestine_iron').addScore('nutrition', 1.25).build()).texture('kubejs:item/organs/common/intestine').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:intestine');

    registerOrgan(new Organ('kubejs:lung_iron').addScore('breath_recovery', 1.25).addScore('breath_capacity', 1.25).addScore('endurance', 1.25).build()).texture('kubejs:item/organs/common/lung').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:lung');

    registerOrgan(new Organ('kubejs:stomach_iron').addScore('digestion', 1.25).addScore('burning_point', -5).addScore('freezing_point', 5).build()).texture('kubejs:item/organs/common/stomach').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:stomach');

    registerOrgan(new Organ('kubejs:heart_iron').addScore('health', 1.25).addScore('burning_point', 8).addScore('freezing_point', -8).build()).texture('kubejs:item/organs/common/heart').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:heart');

    registerOrgan(new Organ('kubejs:spine_iron').addScore('defense', 0.625).addScore('nerves', 1.25).build()).texture('kubejs:item/organs/common/spine').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:spine');

    registerOrgan(new Organ('kubejs:muscle_gold').addScore('strength', 1.5).addScore('speed', 1.5).build()).texture('kubejs:item/organs/common/muscle').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:muscle');

    registerOrgan(new Organ('kubejs:spleen_gold').addScore('metabolism', 1.5).build()).texture('kubejs:item/organs/common/spleen').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:spleen');

    registerOrgan(new Organ('kubejs:appendix_gold').addScore('luck', 1.5).build()).texture('kubejs:item/organs/common/appendix').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:appendix');

    registerOrgan(new Organ('kubejs:kidney_gold').addScore('filtration', 1.5).build()).texture('kubejs:item/organs/common/kidney').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:kidney');

    registerOrgan(new Organ('kubejs:liver_gold').addScore('detoxification', 1.5).build()).texture('kubejs:item/organs/common/liver').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:liver');

    registerOrgan(new Organ('kubejs:rib_gold').addScore('defense', 1.5).build()).texture('kubejs:item/organs/common/rib').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:rib');

    registerOrgan(new Organ('kubejs:intestine_gold').addScore('nutrition', 1.5).build()).texture('kubejs:item/organs/common/intestine').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:intestine');

    registerOrgan(new Organ('kubejs:lung_gold').addScore('breath_recovery', 1.5).addScore('breath_capacity', 1.5).addScore('endurance', 1.5).build()).texture('kubejs:item/organs/common/lung').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:lung');

    registerOrgan(new Organ('kubejs:stomach_gold').addScore('digestion', 1.5).addScore('burning_point', -3).addScore('freezing_point', 3).build()).texture('kubejs:item/organs/common/stomach').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:stomach');

    registerOrgan(new Organ('kubejs:heart_gold').addScore('health', 1.5).addScore('burning_point', 12).addScore('freezing_point', -12).build()).texture('kubejs:item/organs/common/heart').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:heart');

    registerOrgan(new Organ('kubejs:spine_gold').addScore('defense', 0.75).addScore('nerves', 1.5).build()).texture('kubejs:item/organs/common/spine').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:spine');

    registerOrgan(new Organ('kubejs:muscle_diamond').addScore('strength', 2).addScore('speed', 2).build()).texture('kubejs:item/organs/common/muscle').tag('itemborders:diamond').tag('kubejs:muscle');

    registerOrgan(new Organ('kubejs:spleen_diamond').addScore('metabolism', 2).build()).texture('kubejs:item/organs/common/spleen').tag('itemborders:diamond').tag('kubejs:spleen');

    registerOrgan(new Organ('kubejs:appendix_diamond').addScore('luck', 2).build()).texture('kubejs:item/organs/common/appendix').tag('itemborders:diamond').tag('kubejs:appendix');

    registerOrgan(new Organ('kubejs:kidney_diamond').addScore('filtration', 2).build()).texture('kubejs:item/organs/common/kidney').tag('itemborders:diamond').tag('kubejs:kidney');

    registerOrgan(new Organ('kubejs:liver_diamond').addScore('detoxification', 2).build()).texture('kubejs:item/organs/common/liver').tag('itemborders:diamond').tag('kubejs:liver');

    registerOrgan(new Organ('kubejs:rib_diamond').addScore('defense', 2).build()).texture('kubejs:item/organs/common/rib').tag('itemborders:diamond').tag('kubejs:rib');

    registerOrgan(new Organ('kubejs:intestine_diamond').addScore('nutrition', 2).build()).texture('kubejs:item/organs/common/intestine').tag('itemborders:diamond').tag('kubejs:intestine');

    registerOrgan(new Organ('kubejs:lung_diamond').addScore('breath_recovery', 2).addScore('breath_capacity', 2).addScore('endurance', 2).build()).texture('kubejs:item/organs/common/lung').tag('itemborders:diamond').tag('kubejs:lung');

    registerOrgan(new Organ('kubejs:stomach_diamond').addScore('digestion', 2).addScore('freezing_point', 1).build()).texture('kubejs:item/organs/common/stomach').tag('itemborders:diamond').tag('kubejs:stomach').tag('kubejs:evolution');

    registerOrgan(new Organ('kubejs:heart_diamond').addScore('health', 2).addScore('burning_point', 15).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/common/heart').tag('itemborders:diamond').tag('kubejs:heart');

    registerOrgan(new Organ('kubejs:spine_diamond').addScore('defense', 1).addScore('nerves', 2).build()).texture('kubejs:item/organs/common/spine').tag('itemborders:diamond').tag('kubejs:spine');

    // 模板器官
    registerOrgan(new Organ('kubejs:huge_lung').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_lung.1"))]).addScore('breath_recovery', 2.5).addScore('breath_capacity', 2.5).addScore('endurance', 2.5).build()).texture('kubejs:item/organs/template/lung_template').tag('kubejs:lung').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_muscle').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_muscle.1"))]).addScore('strength', 2.5).addScore('speed', 2.5).build()).texture('kubejs:item/organs/template/muscle_template').tag('kubejs:muscle').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_heart').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_heart.1"))]).addScore('health', 2.5).build()).texture('kubejs:item/organs/template/heart_template').tag('kubejs:heart').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_intestine').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_intestine.1"))]).addScore('nutrition', 2.5).build()).texture('kubejs:item/organs/template/intestine_template').tag('kubejs:intestine').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_rib').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_rib.1"))]).addScore('defense', 2.5).build()).texture('kubejs:item/organs/template/rib_template').tag('kubejs:rib').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_spine').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_spine.1"))]).addScore('defense', 1.25).addScore('nerves', 2.5).build()).texture('kubejs:item/organs/template/spine_template').tag('kubejs:spine').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_spleen').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_spleen.1"))]).addScore('metabolism', 2.5).build()).texture('kubejs:item/organs/template/spleen_template').tag('kubejs:spleen').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_stomach').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_stomach.1"))]).addScore('digestion', 2.5).build()).texture('kubejs:item/organs/template/stomach_template').tag('kubejs:stomach').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_kidney').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_kidney.1"))]).addScore('filtration', 2.5).build()).texture('kubejs:item/organs/template/kidney_template').tag('kubejs:kidney').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_liver').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_liver.1"))]).addScore('detoxification', 2.5).build()).texture('kubejs:item/organs/template/liver_template').tag('kubejs:liver').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    registerOrgan(new Organ('kubejs:huge_appendix').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.huge_appendix.1"))]).addScore('luck', 2.5).build()).texture('kubejs:item/organs/template/appendix_template').tag('kubejs:appendix').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active');

    // 远古器官
    registerOrgan(new Organ('kubejs:prehistory_lung').addScore('breath_recovery', 1.25).addScore('breath_capacity', 1.25).addScore('endurance', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_lung').tag('kubejs:lung').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_muscle').addScore('strength', 1.25).addScore('speed', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_muscle').tag('kubejs:muscle').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_heart').addScore('health', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_heart').tag('kubejs:heart').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_intestine').addScore('nutrition', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_intestine').tag('kubejs:intestine').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_rib').addScore('defense', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_rib').tag('kubejs:rib').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_spine').addScore('defense', 0.625).addScore('nerves', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_spine').tag('kubejs:spine').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_spleen').addScore('metabolism', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_spleen').tag('kubejs:spleen').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_stomach').addScore('digestion', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_stomach').tag('kubejs:stomach').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_kidney').addScore('filtration', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_kidney').tag('kubejs:kidney').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_liver').addScore('detoxification', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_liver').tag('kubejs:liver').tag('kubejs:prehistory');

    registerOrgan(new Organ('kubejs:prehistory_appendix').addScore('luck', 1.25).build()).texture('kubejs:item/organs/prehistory/prehistory_appendix').tag('kubejs:appendix').tag('kubejs:prehistory');

    // 龙血器官
    registerOrgan(new Organ('kubejs:dragon_blood_lung').addScore('strength', 0.75).addScore('breath_recovery', 1.75).addScore('breath_capacity', 1.75).addScore('endurance', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', 12).addScore('freezing_point', -4).build()).texture('kubejs:item/organs/dragon/dragon_blood_lung').tag('kubejs:lung').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_muscle').addScore('strength', 2.25).addScore('speed', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', 1).addScore('freezing_point', -4).build()).texture('kubejs:item/organs/dragon/dragon_blood_muscle').tag('kubejs:muscle').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_heart').addScore('strength', 0.25).addScore('health', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', 4).addScore('freezing_point', -4).addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.dragon_blood_heart.1"))]).addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.dragon_blood_heart.2"))]).addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.dragon_blood_heart.3"))]).addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.dragon_blood_heart.4"))]).build()).texture('kubejs:item/organs/dragon/dragon_blood_heart').tag('kubejs:heart').tag('kubejs:dragon').tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:dragon_blood_intestine').addScore('strength', 0.25).addScore('nutrition', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', -2).addScore('freezing_point', 4).build()).texture('kubejs:item/organs/dragon/dragon_blood_intestine').tag('kubejs:intestine').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_rib').addScore('strength', 0.25).addScore('defense', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', 4).addScore('freezing_point', -4).build()).texture('kubejs:item/organs/dragon/dragon_blood_rib').tag('kubejs:rib').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_spine').addScore('strength', 0.5).addScore('defense', 0.75).addScore('nerves', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', -3).addScore('freezing_point', 3).build()).texture('kubejs:item/organs/dragon/dragon_blood_spine').tag('kubejs:spine').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_spleen').addScore('strength', 0.25).addScore('metabolism', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', -6).addScore('freezing_point', 4).build()).texture('kubejs:item/organs/dragon/dragon_blood_spleen').tag('kubejs:spleen').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_stomach').addScore('strength', 0.25).addScore('digestion', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', -6).addScore('freezing_point', 4).build()).texture('kubejs:item/organs/dragon/dragon_blood_stomach').tag('kubejs:stomach').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_kidney').addScore('strength', 0.25).addScore('filtration', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', -4).addScore('freezing_point', 4).build()).texture('kubejs:item/organs/dragon/dragon_blood_kidney').tag('kubejs:kidney').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_liver').addScore('strength', 0.25).addScore('detoxification', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', -1).addScore('freezing_point', 6).build()).texture('kubejs:item/organs/dragon/dragon_blood_liver').tag('kubejs:liver').tag('kubejs:dragon');

    registerOrgan(new Organ('kubejs:dragon_blood_appendix').addScore('strength', 0.25).addScore('luck', 1.75).addScore('crystalsynthesis', 0.25).addScore('burning_point', 2).addScore('freezing_point', -1).build()).texture('kubejs:item/organs/dragon/dragon_blood_appendix').tag('kubejs:appendix').tag('kubejs:dragon');

    //幻想种器官
    registerOrgan(new Organ('kubejs:fantasy_lung').addScore('breath_recovery', 1.125).addScore('breath_capacity', 1.125).addScore('endurance', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', 6).addScore('freezing_point', -3).build()).texture('kubejs:item/organs/fantasy/fantasy_lung').tag('kubejs:lung').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_muscle').addScore('strength', 1.125).addScore('speed', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', 1).addScore('freezing_point', -6).build()).texture('kubejs:item/organs/fantasy/fantasy_muscle').tag('kubejs:muscle').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_heart').addScore('health', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', 6).addScore('freezing_point', -6).build()).texture('kubejs:item/organs/fantasy/fantasy_heart').tag('kubejs:heart').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_intestine').addScore('nutrition', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', -2).addScore('freezing_point', 4).build()).texture('kubejs:item/organs/fantasy/fantasy_intestine').tag('kubejs:intestine').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_rib').addScore('defense', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', 4).addScore('freezing_point', -4).build()).texture('kubejs:item/organs/fantasy/fantasy_rib').tag('kubejs:rib').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_spine').addScore('defense', 0.5625).addScore('nerves', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', -3).addScore('freezing_point', 3).build()).texture('kubejs:item/organs/fantasy/fantasy_spine').tag('kubejs:spine').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_spleen').addScore('metabolism', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', -6).addScore('freezing_point', 3).build()).texture('kubejs:item/organs/fantasy/fantasy_spleen').tag('kubejs:spleen').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_stomach').addScore('digestion', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', -6).addScore('freezing_point', 6).build()).texture('kubejs:item/organs/fantasy/fantasy_stomach').tag('kubejs:stomach').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_kidney').addScore('filtration', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', -4).addScore('freezing_point', 6).build()).texture('kubejs:item/organs/fantasy/fantasy_kidney').tag('kubejs:kidney').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_liver').addScore('detoxification', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', -1).addScore('freezing_point', 3).build()).texture('kubejs:item/organs/fantasy/fantasy_liver').tag('kubejs:liver').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:fantasy_appendix').addScore('luck', 1.125).addScore('crystalsynthesis', 0.25).addScore('burning_point', 2).addScore('freezing_point', -1).build()).texture('kubejs:item/organs/fantasy/fantasy_appendix').tag('kubejs:appendix').tag('kubejs:fantasy');

    registerOrgan(new Organ('kubejs:soul_piece')
        .addScore('buoyant', 0.5)
        .addScore('nerves', 1.25)
        .addScore('health', -0.25)
        .addScore('burning_point', -5)
        .addScore('freezing_point', -5)
        .build())
        .texture('kubejs:item/organs/others/soul_piece')
        .tag('itemborders:gold')

    //冰龙器官
    registerOrgan(new Organ('kubejs:ice_dragon_bead')
        .addScore('crystalsynthesis', 2.5)
        .addScore('knockback_resistant', 1.5)
        .addScore('endurance', 0.5)
        .addScore('burning_point', -5)
        .addScore('freezing_point', -20)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ice_dragon_bead.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_dragon_bead.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_dragon_bead.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_dragon_bead.4"))])
        .build())
        .texture('kubejs:item/organs/dragon/ice_dragon_bead')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:ice_dragon_lung').addScore('breath_recovery', 1.5).addScore('breath_capacity', 1.5).addScore('endurance', 1.5).addScore('defense', 0.25).addScore('burning_point', -5).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_lung').tag('kubejs:lung').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_muscle').addScore('strength', 1.5).addScore('speed', 1.5).addScore('defense', 0.25).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_muscle').tag('kubejs:muscle').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_heart').addScore('health', 1.5).addScore('defense', 0.25).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_heart').tag('kubejs:heart').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_intestine').addScore('nutrition', 1.5).addScore('defense', 0.25).addScore('burning_point', -5).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_intestine').tag('kubejs:intestine').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_rib').addScore('defense', 1.75).addScore('freezing_point', -5).build()).texture('kubejs:item/organs/dragon/ice_dragon_rib').tag('kubejs:rib').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_spine').addScore('defense', 1).addScore('nerves', 1.5).addScore('burning_point', -5).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_spine').tag('kubejs:spine').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_spleen').addScore('metabolism', 1.5).addScore('defense', 0.25).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_spleen').tag('kubejs:spleen').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_stomach').addScore('digestion', 1.5).addScore('defense', 0.25).addScore('freezing_point', -10).build()).texture('kubejs:item/organs/dragon/ice_dragon_stomach').tag('kubejs:stomach').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_kidney').addScore('filtration', 1.5).addScore('defense', 0.25).addScore('burning_point', 5).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_kidney').tag('kubejs:kidney').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_liver').addScore('detoxification', 1.5).addScore('defense', 0.25).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_liver').tag('kubejs:liver').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:ice_dragon_appendix').addScore('luck', 1.5).addScore('defense', 0.25).addScore('burning_point', -10).addScore('freezing_point', -15).build()).texture('kubejs:item/organs/dragon/ice_dragon_appendix').tag('kubejs:appendix').tag('itemborders:diamond');

    //火龙器官
    registerOrgan(new Organ('kubejs:fire_dragon_bead')
        .addScore('crystalsynthesis', 2.5)
        .addScore('knockback_resistant', 1.5)
        .addScore('endurance', 0.5)
        .addScore('burning_point', 20)
        .addScore('freezing_point', 5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.fire_dragon_bead.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.fire_dragon_bead.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.fire_dragon_bead.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.fire_dragon_bead.4"))])
        .build())
        .texture('kubejs:item/organs/dragon/fire_dragon_bead')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:fire_dragon_lung').addScore('breath_recovery', 1.5).addScore('breath_capacity', 1.5).addScore('endurance', 1.5).addScore('strength', 0.25).addScore('burning_point', 15).addScore('freezing_point', 5).build()).texture('kubejs:item/organs/dragon/fire_dragon_lung').tag('kubejs:lung').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_muscle').addScore('strength', 1.75).addScore('speed', 1.5).addScore('burning_point', 15).build()).texture('kubejs:item/organs/dragon/fire_dragon_muscle').tag('kubejs:muscle').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_heart').addScore('health', 1.5).addScore('strength', 0.25).addScore('burning_point', 15).build()).texture('kubejs:item/organs/dragon/fire_dragon_heart').tag('kubejs:heart').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_intestine').addScore('nutrition', 1.5).addScore('strength', 0.25).addScore('burning_point', 5).build()).texture('kubejs:item/organs/dragon/fire_dragon_intestine').tag('kubejs:intestine').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_rib').addScore('defense', 1.5).addScore('strength', 0.25).addScore('burning_point', 15).addScore('freezing_point', 5).build()).texture('kubejs:item/organs/dragon/fire_dragon_rib').tag('kubejs:rib').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_spine').addScore('defense', 0.75).addScore('nerves', 1.5).addScore('strength', 0.25).addScore('burning_point', 15).build()).texture('kubejs:item/organs/dragon/fire_dragon_spine').tag('kubejs:spine').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_spleen').addScore('metabolism', 1.5).addScore('strength', 0.25).addScore('burning_point', 10).build()).texture('kubejs:item/organs/dragon/fire_dragon_spleen').tag('kubejs:spleen').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_stomach').addScore('digestion', 1.5).addScore('strength', 0.25).addScore('burning_point', 15).addScore('freezing_point', -5).build()).texture('kubejs:item/organs/dragon/fire_dragon_stomach').tag('kubejs:stomach').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_kidney').addScore('filtration', 1.5).addScore('strength', 0.25).addScore('burning_point', 15).build()).texture('kubejs:item/organs/dragon/fire_dragon_kidney').tag('kubejs:kidney').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_liver').addScore('detoxification', 1.5).addScore('strength', 0.25).addScore('burning_point', 15).addScore('freezing_point', 10).build()).texture('kubejs:item/organs/dragon/fire_dragon_liver').tag('kubejs:liver').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:fire_dragon_appendix').addScore('luck', 1.75).addScore('strength', 0.125).addScore('burning_point', 15).addScore('freezing_point', -10).build()).texture('kubejs:item/organs/dragon/fire_dragon_appendix').tag('kubejs:appendix').tag('itemborders:diamond');

    //电龙器官
    registerOrgan(new Organ('kubejs:lightning_dragon_bead')
        .addScore('crystalsynthesis', 2.5)
        .addScore('knockback_resistant', 1.5)
        .addScore('endurance', 0.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.lightning_dragon_bead.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lightning_dragon_bead.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lightning_dragon_bead.3"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.lightning_dragon_bead.4"))])
        .build())
        .texture('kubejs:item/organs/dragon/lightning_dragon_bead')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:key_pressed');

    registerOrgan(new Organ('kubejs:lightning_dragon_lung').addScore('breath_recovery', 1.5).addScore('breath_capacity', 1.5).addScore('endurance', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_lung').tag('kubejs:lung').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_muscle').addScore('strength', 1.5).addScore('speed', 1.75).build()).texture('kubejs:item/organs/dragon/lightning_dragon_muscle').tag('kubejs:muscle').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_heart').addScore('health', 1.5).addScore('speed', 0.25).addScore('burning_point', 10).addScore('freezing_point', -10).build()).texture('kubejs:item/organs/dragon/lightning_dragon_heart').tag('kubejs:heart').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_intestine').addScore('nutrition', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_intestine').tag('kubejs:intestine').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_rib').addScore('defense', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_rib').tag('kubejs:rib').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_spine').addScore('defense', 0.75).addScore('nerves', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_spine').tag('kubejs:spine').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_spleen').addScore('metabolism', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_spleen').tag('kubejs:spleen').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_stomach').addScore('digestion', 1.5).addScore('speed', 0.25).addScore('burning_point', 10).addScore('freezing_point', -10).build()).texture('kubejs:item/organs/dragon/lightning_dragon_stomach').tag('kubejs:stomach').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_kidney').addScore('filtration', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_kidney').tag('kubejs:kidney').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_liver').addScore('detoxification', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_liver').tag('kubejs:liver').tag('itemborders:diamond');

    registerOrgan(new Organ('kubejs:lightning_dragon_appendix').addScore('luck', 1.5).addScore('speed', 0.25).build()).texture('kubejs:item/organs/dragon/lightning_dragon_appendix').tag('kubejs:appendix').tag('itemborders:diamond');

    //温度器官
    registerOrgan(new Organ('kubejs:flame_muscle')
        .addScore('strength', 1.5)
        .addScore('speed', 1.75)
        .addScore('burning_point', 20)
        .addScore('freezing_point', 10)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.flame_muscle.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.flame_muscle.2"))])
        .build())
        .fireResistant()
        .texture('kubejs:item/organs/flame/flame_muscle')
        .tag("kubejs:muscle")
        .tag("kubejs:flame")
        .tag("kubejs:damage")

    registerOrgan(new Organ('kubejs:flame_heart')
        .addScore('health', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.flame_heart.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.flame_heart.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.flame_heart.3"))])
        .addScore('burning_point', 30)
        .addScore('freezing_point', 15)
        .build())
        .fireResistant()
        .texture('kubejs:item/organs/flame/flame_heart')
        .tag("kubejs:heart")
        .tag("kubejs:flame")
        .tag("kubejs:player_tick_only")

    registerOrgan(new Organ('kubejs:chameleon_stomach')
        .addScore('digestion', 1.5)
        .addScore('defense', -1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.chameleon_stomach.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.chameleon_stomach.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.chameleon_stomach.3"))])
        .build())
        .texture('kubejs:item/organs/temperature/chameleon_stomach')
        .tag("kubejs:rclick_only")

    registerOrgan(new Organ('kubejs:flame_stomach')
        .addScore('digestion', 2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.flame_stomach.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.flame_stomach.2"))])
        .build())
        .fireResistant()
        .texture('kubejs:item/organs/flame/flame_stomach')
        .tag("kubejs:flame")
        .tag("kubejs:rclick_only")

    registerOrgan(new Organ('kubejs:flame_spine')
        .addScore('nerves', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.flame_spine.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.flame_spine.2"))])
        .build())
        .fireResistant()
        .texture('kubejs:item/organs/flame/flame_spine')
        .tag("kubejs:flame")
        .tag("kubejs:bear_only")

    registerOrgan(new Organ('kubejs:ice_heart')
        .addScore('health', 1.5)
        .addScore('burning_point', -15)
        .addScore('freezing_point', -80)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ice_heart.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_heart.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_heart.3"))])
        .build())
        .texture('kubejs:item/organs/ice/ice_heart')
        .tag("kubejs:heart")
        .tag("kubejs:ice")
        .tag("kubejs:player_tick_only")

    registerOrgan(new Organ('kubejs:ice_rib')
        .addScore('defense', 1.5)
        .addScore('freezing_point', 2)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ice_rib.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_rib.2"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_rib.3"))])
        .build())
        .texture('kubejs:item/organs/ice/ice_rib')
        .tag("kubejs:rib")
        .tag("kubejs:ice")
        .tag("kubejs:player_tick")

    registerOrgan(new Organ('kubejs:ice_lung')
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ice_lung.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_lung.2"))])
        .build())
        .texture('kubejs:item/organs/ice/ice_lung')
        .tag("kubejs:lung")
        .tag("kubejs:ice")
        .tag("kubejs:temperature_only")

    registerOrgan(new Organ('kubejs:ice_intestine')
        .addScore('digestion', 1.25)
        .addScore('nutrition', 1.75)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ice_intestine.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_intestine.2"))])
        .build())
        .texture('kubejs:item/organs/ice/ice_intestine')
        .tag('kubejs:intestine')
        .tag("kubejs:ice")
        .tag('kubejs:key_pressed')

    registerOrgan(new Organ('kubejs:ice_piece')
        .addScore('nerves', 0.25)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.ice_piece.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.ice_piece.2"))])
        .build())
        .texture('kubejs:item/organs/ice/ice_piece')
        .tag("kubejs:player_tick")
        .tag("kubejs:ice")


    //暮色器官
    registerOrgan(new Organ('kubejs:snow_monster_core')
        .addScore('health', 1.5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.snow_monster_core.1"))])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.snow_monster_core.2"))])
        .build())
        .texture('kubejs:item/organs/twilightforest/snow_monster_core')
        .tag("kubejs:heart")
        .tag("kubejs:rclick_only")

    registerOrgan(new Organ('kubejs:etched_paper')
        .addScore('defense', 0.25)
        .addScore('buoyant', 0.5)
        .addScore('fire_resistant', -5)
        .addTextLines('default', [Text.gray(Text.translatable("kubejs.tooltips.etched_paper.1"))])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.etched_paper.2").gray()])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.etched_paper.3").gray()])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.etched_paper.4").gray()])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.etched_paper.5").gray()])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.etched_paper.6").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/etched_paper')
        .tag('kubejs:active_only')
        .tag('kubejs:warp')
        .tag('forge:paper')

    registerOrgan(new Organ('kubejs:cloud_pyramid')
        .addScore('defense', -1)
        .addScore('buoyant', 1)
        .addScore('hydroallergenic', 1)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.cloud_pyramid.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.cloud_pyramid.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.cloud_pyramid.3").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.cloud_pyramid.4").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.cloud_pyramid.5").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/cloud_pyramid')
        .tag('kubejs:magic')
        .tag('itemborders:gold')
        .tag('kubejs:key_pressed')

    registerOrgan(new Organ('kubejs:minotaur_muscle')
        .addScore('strength', 1.5)
        .addScore('speed', 1.5)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.minotaur_muscle.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.minotaur_muscle.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.minotaur_muscle.3").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/minotaur_muscle')
        .tag("kubejs:damage_only")

    registerOrgan(new Organ('kubejs:questing_ram_answer')
        .addScore('nerves', 2)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.questing_ram_answer.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.questing_ram_answer.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.questing_ram_answer.3").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/questing_ram_answer')
        .tag("kubejs:damage_only")

    registerOrgan(new Organ('kubejs:knightphantom_ghost')
        .addScore('health', -0.25)
        .addScore('speed', 1.5)
        .addScore('buoyant', 1.5)
        .addScore('nerves', 1.5)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.knightphantom_ghost.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.knightphantom_ghost.2").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/knightphantom_ghost')
        .tag("kubejs:key_pressed")

    registerOrgan(new Organ('kubejs:energetic_naga_scale')
        .addScore('strength', 3)
        .addScore('speed', 2)
        .addScore('defense', 2)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.energetic_naga_scale.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.energetic_naga_scale.2").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/naga_scale')
        .tag("kubejs:bear_only")

    registerOrgan(new Organ('kubejs:twilight_broken_lich_crown')
        .addScore('nerves', 2)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.twilight_broken_lich_crown.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.twilight_broken_lich_crown.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.twilight_broken_lich_crown.3").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.twilight_broken_lich_crown.4").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.twilight_broken_lich_crown.5").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.twilight_broken_lich_crown.6").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/twilight_broken_lich_crown')
        .tag("kubejs:key_pressed")

    registerOrgan(new Organ('kubejs:armor_with_gaze')
        .addScore('health', 2)
        .addScore('defense', 5)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.armor_with_gaze.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.armor_with_gaze.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.armor_with_gaze.3").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/armor_with_gaze')
        .tag("kubejs:bear_only")

    registerOrgan(new Organ('kubejs:minoshroom_totem')
        .addScore('strength', 2)
        .addScore('speed', 1)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.minoshroom_totem.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.minoshroom_totem.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.minoshroom_totem.3").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.minoshroom_totem.4").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.minoshroom_totem.5").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/minoshroom_totem')
        .tag("kubejs:damage_only")

    registerOrgan(new Organ('kubejs:hydra_fiery_blood_essence')
        .addScore('health', 4)
        .addScore('strength', 2)
        .addScore('filtration', 1)
        .addScore('burning_point', 40)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.hydra_fiery_blood_essence.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.hydra_fiery_blood_essence.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.hydra_fiery_blood_essence.3").gray()])
        .build())
        .fireResistant()
        .texture('kubejs:item/organs/twilightforest/hydra_fiery_blood_essence')
        .tag("kubejs:flame")
        .tag("kubejs:temperature_only")
        .tag("kubejs:damage_only")

    registerOrgan(new Organ('kubejs:carminite_reactor_core')
        .addScore('health', -2)
        .addScore('filtration', -2)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.carminite_reactor_core.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.carminite_reactor_core.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.carminite_reactor_core.3").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/carminite_reactor_core')
        .tag("kubejs:key_pressed")

    registerOrgan(new Organ('kubejs:snow_queen_eternal_sorrow')
        .addScore('health', -2)
        .addScore('buoyant', 1.5)
        .addScore('nerves', 1.5)
        .addScore('freezing_point', -40)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.snow_queen_eternal_sorrow.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.snow_queen_eternal_sorrow.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.snow_queen_eternal_sorrow.3").gray()])
        .build())
        .texture('kubejs:item/organs/twilightforest/snow_queen_eternal_sorrow')
        .tag("kubejs:ice")
        .tag("kubejs:player_tick_only")

    //杂项
    registerOrgan(new Organ('kubejs:creeper_appendix')
        .addScore('luck', 0.75)
        .addScore('creepy', 1)
        .addScore('explosive', 1)
        .addTextLines('default', [Text.translatable("kubejs.tooltips.creeper_appendix.1").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.creeper_appendix.2").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.creeper_appendix.3").gray()])
        .addTextLines('alt', [LEADING_SYMBOL, Text.translatable("kubejs.tooltips.creeper_appendix.4").gray()])
        .build())
        .texture('chestcavity:item/creeper_appendix')
        .tag("kubejs:key_pressed")
        .tag('kubejs:appendix')

});
