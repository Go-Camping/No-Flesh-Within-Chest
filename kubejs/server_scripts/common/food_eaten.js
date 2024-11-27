ItemEvents.foodEaten(event => {
    let player = event.player
    let item = event.item
    if (!player || !item || !(item.id in warpFoodMap)) return
    let warp = player.persistentData.getInt(warpCount)
    let count = warpFoodMap[item.id].count
    let chance = warpFoodMap[item.id].chance
    if (Math.random() <= chance) {
        updateWarpCount(player, warp + count)
        player.tell(Text.darkAqua(Text.translatable(`kubejs.msg.warp.${count > 0 ? 1 : 2}`)))
    }
})
