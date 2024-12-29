// priority: 500
StartupEvents.registry('item', event => {
  event.create('eye_of_fortress')
    .group("kubejs.item")
    .texture('kubejs:item/eye_of_fortress')
    .use((level, player, interactionHand) => {
      return eyeFinder(level, player, interactionHand, 'kubejs:fortress_locator');
    })
    .fireResistant();

  event.create('eye_of_village')
    .group("kubejs.item")
    .texture('kubejs:item/eye_of_village')
    .use((level, player, interactionHand) => {
      eyeFinder(level, player, interactionHand, 'minecraft:village')
      return true
    })
    .fireResistant()

  event.create('eye_of_dragon')
    .group("kubejs.item")
    .texture('kubejs:item/eye_of_dragon')
    .use((level, player, interactionHand) => {
      dragonFinder(level, player, interactionHand)
      return true
    })
    .fireResistant()
})


function eyeFinder(level, player, interactionHand, structureTagString) {
  let item = player.getHeldItem(interactionHand)
  player.startUsingItem(interactionHand)
  if (!level.isClientSide()) {
    let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, structureTagString)
    let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
    if (foundPos) {
      let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
      eye.setItem(item)
      eye.signalTo(foundPos)
      eye.spawn()
      item.shrink(1)
      level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
      player.swing(interactionHand)
      return true
    }
  }
  return false
}



/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.ServerPlayer} player 
 * @param {Internal.InteractionHand} interactionHand 
 */
function dragonFinder(level, player, interactionHand) {
  if (level.isClientSide()) return true
  let item = player.getHeldItem(interactionHand)
  player.startUsingItem(interactionHand)
  const boxSize = 500
  const stageMin = 4
  let playerPos = player.getPosition(1.0)
  let findBox = new AABB.of(playerPos.x() - boxSize, playerPos.y() - boxSize, playerPos.z() - boxSize, playerPos.x() + boxSize, playerPos.y() + boxSize, playerPos.z() + boxSize)
  let iceDrangons = level.getEntitiesOfClass($EntityIceDragon, findBox, (dragon) => {
    return dragon.getDragonStage() >= stageMin && !dragon.isModelDead()
  })
  let fireDrangons = level.getEntitiesOfClass($EntityFireDragon, findBox, (dragon) => {
    return dragon.getDragonStage() >= stageMin && !dragon.isModelDead()
  })
  let lightningDragons = level.getEntitiesOfClass($EntityLightningDragon, findBox, (dragon) => {
    return dragon.getDragonStage() >= stageMin && !dragon.isModelDead()
  })
  let distance = boxSize * 2
  /**@type {Internal.Entity} */
  let closestDragon = null
  if (iceDrangons.length == 0 && fireDrangons.length == 0 && lightningDragons.length == 0) {
    return false
  }
  for (let dragon of iceDrangons) {
    let dragonPos = dragon.position()
    let dist = playerPos.distanceTo(dragonPos)
    if (dist < distance) {
      distance = dist
      closestDragon = dragon
    }
  }
  for (let dragon of fireDrangons) {
    let dragonPos = dragon.position()
    let dist = playerPos.distanceTo(dragonPos)
    if (dist < distance) {
      distance = dist
      closestDragon = dragon
    }
  }
  for (let dragon of lightningDragons) {
    let dragonPos = dragon.position()
    let dist = playerPos.distanceTo(dragonPos)
    if (dist < distance) {
      distance = dist
      closestDragon = dragon
    }
  }

  if (closestDragon) {
    let foundPos = closestDragon.position()
    let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
    eye.setItem(item)
    eye.signalTo(foundPos)
    eye.spawn()
    item.shrink(1)
    level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
    player.swing(interactionHand)
    return true
  }
  return false
}