EntityEvents.spawned(event => {
    /**
    * @type {Internal.LivingEntity}
    */
    let entity = event.entity
    if (!entity || !entity.isLiving() || !entity.isMonster()) return

    /** @type {String[]} */
    let typeList = entity.persistentData.get('champion') ?? []
    let player = entity.getLevel().getNearestPlayer(entity, 64)
    if (!player) return
    let warp = player.persistentData.getInt(warpCount)
    while (true) {
        if (warp < 20 || Math.random() > 0.001 * warp || typeList.length >= championTypeMap.length) break
        let randomChampionType = randomGet(championTypeMap)
        if (typeList.find((value, index, obj) => (value == randomChampionType.type))) continue
        typeList.push(randomChampionType.type)
    }

    if (!typeList || typeList.length < 1) return
    let typeNameList = []
    typeList.forEach(type => {
        championTypeMap.forEach(cha => {
            if (cha.type == type) {
                typeNameList.push(cha.name)
                typeNameList.push(Text.gray('·'))
            }
        })
    });
    typeNameList.push(Text.gray('精英'))
    entity.persistentData.put('champion', typeList)
    entity.setCustomName(new Component.join(typeNameList))
    entity.setCustomNameVisible(true)
})


const championTypeMap = [
    {
        type: 'fight_for_death',
        name: Text.darkPurple('死战'),
        desc: Text.gray('攻击时将会为你附加死亡宣告效果')
    },
    {
        type: 'low_frequency',
        name: Text.aqua('低频'),
        desc: Text.gray('受到攻击后有着更长的无敌时间')
    },
    {
        type: 'purify',
        name: Text.aqua('净化'),
        desc: Text.gray('攻击时会净化掉玩家身上所有正面效果')
    },
    {
        type: 'fierce_battle',
        name: Text.gold('鏖战'),
        desc: Text.gray('攻击时会赋予玩家侵蚀效果，并逐渐提升自身的伤害吸收效果')
    },
    {
        type: 'destruction',
        name: Text.gold('崩毁'),
        desc: Text.gray('攻击时会赋予玩家穿孔效果')
    },
    {
        type: 'awed',
        name: Text.gold('震慑'),
        desc: Text.gray('攻击时封锁玩家右键，给予自身生命恢复效果')
    },
    {
        type: 'purity',
        name: Text.aqua('纯净'),
        desc: Text.gray('受到攻击后净化自身所有负面效果')
    },
    {
        type: 'reflection',
        name: Text.gold('反射'),
        desc: Text.gray('每次最多受到50%最大生命值的伤害，并可以反射伤害')
    },
    {
        type: 'corrupt',
        name: Text.red('腐蚀'),
        desc: Text.gray('攻击时额外减少玩家装备耐久')
    },
    {
        type: 'grue',
        name: Text.red('格鲁'),
        desc: Text.gray('攻击时会激发玩家对黑暗的恐惧')
    },
    {
        type: 'unbending',
        name: Text.aqua('根性'),
        desc: Text.gray('随着血量减少增加减伤幅度')
    },
    {
        type: 'exhausted',
        name: Text.aqua('封魔'),
        desc: Text.gray('攻击时会赋予玩家魔力空虚效果')
    },
    {
        type: 'consecration',
        name: Text.red('圣化'),
        desc: Text.gray('若非着火状态或不在火中，获得大幅度减伤')
    },
    {
        type: 'smash',
        name: Text.red('粉碎'),
        desc: Text.gray('取消攻击伤害，但是每次造成最大生命值10%的真实伤害')
    },
    {
        type: 'grudge',
        name: Text.red('咒怨'),
        desc: Text.gray('攻击时有5%概率为装备加上随机诅咒附魔')
    },
    {
        type: 'fate',
        name: Text.red('命运'),
        desc: Text.gray('每次受到近战致死攻击有50%概率免疫此伤害并恢复到20%最大生命值')
    },
    {
        type: 'parry',
        name: Text.red('招架'),
        desc: Text.gray('每次受到弹射物伤害有50%几率免疫此伤害')
    }
]
