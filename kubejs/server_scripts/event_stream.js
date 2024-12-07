// priority: 0
/**
 * 事件流，用于某些事件的连续处理
 * 目前仅用作伤害事件的连续处理
 */

/**
 * 玩家造成伤害总线，玩家造成伤害需要在护甲计算前结算
 * 1. 器官最优先判定
 * 2. 效果其次
 * 3. 武器、饰品再次
 */
/**
 * @param {Internal.LivingHurtEvent} event 
 * @returns 
 */
global.LivingHurtByPlayer = event => {
    let player = event.source.player
    if (!player) return;
    let data = new EntityHurtCustomModel()
    organEntityHurtByPlayer(event, data)
    burningHeartEntityHurtByPlayer(event, data)
    arrowDamageBoostEntityHurtByPlayer(event, data)
    executedEntityHurtByPlayer(event, data)
    vampiricEntityHurtByPlayer(event, data)
    // commonEntityHurtByPlayer(event, data)
    pardonOfGodEntityHurtByPlayer(event, data)
    vulnerableEntityHurt(event, data)
    organCharmEntityHurtByPlayer(event, data)
    championEntityHurtByPlayer(event, data)
    if (data.returnDamage != 0) {
        player.attack(data.damageSource, data.returnDamage)
    }
}

/**
 * 玩家受到伤害总线，实际伤害计算节点
 * 1. 器官最优先判定
 * 2. 效果其次
 * 3. 武器、饰品再次
 */
/**
 * @param {Internal.LivingDamageEvent} event
 * @returns 
 */
global.LivingDamageByOthers = event => {
    let data = new EntityHurtCustomModel()
    if (!highPriorityPlayerHurtByOthers(event, data)) {
        return
    }
    organPlayerHurtByOthers(event, data)
    sweetDreamPlayerHurtByOthers(event, data)
    curiosPlayerHurtByOthers(event, data)
    if (data.returnDamage != 0 && event.source.actual) {
        event.source.actual.attack(data.damageSource, data.returnDamage)
    }
}


/**
 * 玩家受到伤害总线，伤判节点
 * 1. 器官最优先判定
 * 2. 效果其次
 * 3. 武器、饰品再次
 */
/**
 * @param {Internal.LivingDamageEvent} event
 * @returns 
 */
global.LivingHurtByOthers = event => {
    let data = new EntityHurtCustomModel()
    if (!highPriorityPlayerHurtByOthers(event, data)) {
        return
    }
    vulnerableEntityHurt(event, data)
    organCharmPlayerHurtByOthers(event, data)
    // 龙化必须在实际伤害结算前结算，因为额外生命变化不被视作实际受伤
    dragonPowerPlayerHurtByOthers(event, data)
    championPlayerHurtByOthers(event, data)
}


