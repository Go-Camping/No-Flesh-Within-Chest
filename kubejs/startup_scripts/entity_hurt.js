/**
 * 使用ForgeEvent监听LivingHurtEvent事件
 * 用于替换原有EntityEvents.hurt事件
 */
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
    if (event.source.player) {
        global.damage(event);
    }
    if (event.entity.isPlayer()) {
        global.hurt(event);
    }
})