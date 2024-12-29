// priority: 500
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

ItemEvents.foodEaten('kubejs:colorful_candy', event => {
    let player = event.player
    let item = event.item
    if (!player) return
    let x = Math.floor(Math.random() * 10000) - 5000
    let z = Math.floor(Math.random() * 10000) - 5000
    let chunkX = Math.floor(x / 16)
    let chunkZ = Math.floor(z / 16)
    let blockX = x % 16
    let blockZ = z % 16
    let dim = new ResourceLocation(randomGet(['twilightforest:twilight_forest']))
    let targetLevel = event.server.getLevel(dim)
    let targetChunk = targetLevel.getChunk(chunkX, chunkZ, $ChunkStatus.SURFACE, true)
    let y = targetChunk.getHeight('motion_blocking', blockX, blockZ) + 2
    player.teleportTo(dim, x, y, z, player.yaw, player.pitch)
    player.setStatusMessage(Text.translatable('kubejs.status_msg.colorful_candy_tp.1', Text.translatable(dim.toLanguageKey()).lightPurple()))
    player.addItemCooldown(item.id, 20 * 5)
})
