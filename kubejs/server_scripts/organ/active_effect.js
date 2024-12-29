// priority: 500
const playerAttributeMap = new Map()
/**
 * 历史背景：激活效果在历史中用于解决实际中属性变化与激活效果触发节点不同的问题
 * 由于当前的Trick逻辑，仅会在玩家胸腔关闭的时候才会尝试更新，如果不新增激活的概念
 * 在玩家异常操作的场景（如打开胸腔修改内容后退出游戏），则不会导致激活效果生效
 * 为了从需求层面解决该问题，新增了激活的概念用于声明一个新的时间节点，即关闭胸腔界面后
 */

/**
 * 全局函数，用于更新玩家的激活效果状态
 * @param {Internal.ServerPlayer} player 
 */

global.updatePlayerActiveStatus = player => {
    let typeMap = getPlayerChestCavityTypeMap(player)
    let uuid = String(player.getUuid())
    let attributeMap = new Map()
    // 重置玩家胸腔基础属性
    $ChestCavityUtil.evaluateChestCavity(player.getChestCavityInstance())
    player.persistentData.putInt(resourceCountMax, defaultResourceMax)
    player.persistentData.putInt(warpCountMax, defaultWarpMax)
    // 激活状态根据Tag区分并遍历可以用于激活的器官方法
    let onlySet = new Set()
    if (typeMap.has('kubejs:active_only')) {
        typeMap.get('kubejs:active_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organActiveOnlyStrategies[organ.id](player, organ, attributeMap)
            }
        })
    }
    if (typeMap.has('kubejs:active')) {
        typeMap.get('kubejs:active').forEach(organ => {
            organActiveStrategies[organ.id](player, organ, attributeMap)
        })
    }
    playerAttributeMap.set(uuid, attributeMap)
    attributeMap.forEach((value, key, map) => {
        player.modifyAttribute(global.ATTRIBUTE_MAP[key].key, key, value, global.ATTRIBUTE_MAP[key].operation)
    })
    let maxResourceCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
    updateResourceMaxCount(player, maxResourceCount)
    let maxWarpCount = player.persistentData.getInt(warpCountMax) ?? defaultWarpMax
    updateWarpMaxCount(player, maxWarpCount)
}

/**
 * 获取玩家属性表
 * @param {Internal.ServerPlayer} player 
 * @returns {Map}
 */

function getPlayerAttributeMap(player) {
    let uuid = String(player.getUuid())
    if (playerAttributeMap.has(uuid)) {
        return playerAttributeMap.get(uuid)
    }
    return new Map()
}

/**
 * 设置玩家属性表
 * @param {Internal.ServerPlayer} player 
 * @param {Map} attriMap 
 */
function setPlayerAttributeMap(player, attriMap) {
    let uuid = String(player.getUuid())
    playerAttributeMap.set(uuid, attriMap)
}


/**
 * 清除玩家所有已经添加的属性
 * @param {Internal.ServerPlayer} player 
 * @returns
 */
function clearAllActivedModify(player) {
    let attributeMap = getPlayerAttributeMap(player)
    attributeMap.forEach((value, key, map) => {
        player.removeAttribute(global.ATTRIBUTE_MAP[key].key, global.ATTRIBUTE_MAP[key].name)
    })
    player.persistentData.putInt(resourceCountMax, defaultResourceMax)
    player.persistentData.putInt(warpCountMax, defaultWarpMax)
}

/**
 * 清除玩家所有已经添加的属性
 * @param {Map} attributeMap
 * @param {attribute} attribute
 * @param {number} modifyValue
 * @returns
 */
function attributeMapValueAddition(attributeMap, attribute, modifyValue) {
    if (attributeMap.has(attribute.name)) {
        if (attribute.operation == 'multiply_total') {
            modifyValue = (1 + modifyValue) * (1 + attributeMap.get(attribute.name)) - 1
        }
        else {
            modifyValue = modifyValue + attributeMap.get(attribute.name)
        }
    }
    attributeMap.set(attribute.name, modifyValue)
}


/**
 * 器官激活策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const organActiveStrategies = {
    'kubejs:rose_quartz_heart': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier * 0.5
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
    },
    'kubejs:rose_quartz_muscle': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier * 0.5
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, value)
    },
    'kubejs:rose_quartz_liver': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:rose')) {
            amplifier = amplifier + typeMap.get('kubejs:rose').length
        }
        let value = amplifier * 20
        attributeMapValueAddition(attributeMap, global.MAX_MANA, value)
    },
    'kubejs:revolution_cable': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        if (typeMap.has('kubejs:revolution')) {
            let value = typeMap.get('kubejs:revolution').length * 1
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
        }
    },
    'kubejs:magic_vision': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.SPELL_POWER, 0.15)
        attributeMapValueAddition(attributeMap, global.CANDY_SPELL_POWER, 0.1)
    },
    'kubejs:love_between_lava_and_ice': function (player, organ, attributeMap) {
        let itemMap = getPlayerChestCavityItemMap(player)
        if (itemMap.has('minecraft:blue_ice')) {
            let iceMulti = itemMap.get('minecraft:blue_ice').length * 0.2
            attributeMapValueAddition(attributeMap, global.ICE_SPELL_POWER, iceMulti)
        }
        if (itemMap.has('minecraft:magma_block')) {
            let fireMulti = itemMap.get('minecraft:magma_block').length * 0.2
            attributeMapValueAddition(attributeMap, global.FIRE_SPELL_POWER, fireMulti)
        }
    },
    'kubejs:stomach_tumor': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        let count = 0
        eightDirectionList.forEach(direction => {
            let currentPos = lookPos(direction, pos)
            if (posMap.has(currentPos) && posMap.get(currentPos).id == organ.id) {
                count++
            }
        })
        if (count > 2) {
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, 8)
        }
    },
    'kubejs:leviathan_rib': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.ARMOR_TOUGHNESS, 2)
    },
    'kubejs:holy_eyeball': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, 0.05)
        attributeMapValueAddition(attributeMap, global.HOLY_SPELL_DAMAGE, 0.3)
    },
    'kubejs:hamimelon_organ': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        let count = 0
        eightDirectionList.forEach(direction => {
            let currentPos = lookPos(direction, pos)
            if (posMap.has(currentPos) && Item.of(posMap.get(currentPos).id).hasTag('kubejs:food')) {
                count++
            }
        })
        if (count > 0) {
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, 2 * count)
        }
    },
    'kubejs:mini_slime': function (player, organ, attributeMap) {
        let pos = organ.Slot
        let rowOffset = Math.abs(Math.floor(pos / 9) - 1)
        let lineOffset = Math.abs(pos % 9 - 4)
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, 2 * (lineOffset + rowOffset))
    },
    'kubejs:desire_of_midas': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 100)
    },
    'kubejs:redstone_furnace': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 100)
    },
    'kubejs:vulcan_furnace': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 100)
    },
    'kubejs:aesegull_rib_right': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        // 取对称位置坐标
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'kubejs:aesegull_rib_left') {
            attributeMapValueAddition(attributeMap, global.ARMOR, 3)
        }
    },
    'kubejs:aesegull_rib_left': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        // 取对称位置坐标
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'kubejs:aesegull_rib_right') {
            attributeMapValueAddition(attributeMap, global.ARMOR_TOUGHNESS, 3)
        }
    },
    'kubejs:mockery': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'kubejs:sarcasm') {
            attributeMapValueAddition(attributeMap, global.ATTACK_UP_MULTI_BASE, 0.05)
        }
    },
    'kubejs:sarcasm': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'kubejs:mockery') {
            attributeMapValueAddition(attributeMap, global.ARMOR_MULTI_BASE, 0.1)
        }
    },
    'kubejs:blood_moon_wand': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.BLOOD_SPELL_DAMAGE, 0.3)
    },
    'kubejs:huge_lung': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_muscle': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_heart': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -10)
    },
    'kubejs:huge_intestine': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_rib': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_spine': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_spleen': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_stomach': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_kidney': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_liver': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:huge_appendix': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        if (checkBox22OrganSame(posMap, organ)) { return }
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -5)
    },
    'kubejs:bad_ink': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        if (typeMap.has('kubejs:magic')) {
            let value = typeMap.get('kubejs:magic').length * 30
            attributeMapValueAddition(attributeMap, global.MAX_MANA, value)
        }
    },
    'kubejs:chicken_kidney': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'kubejs:chicken_kidney') {
            attributeMapValueAddition(attributeMap, global.LUCK, 3)
        }
    },
    'kubejs:chicken_lung': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        let opPos = getOppoPos(pos)
        let chickenStripCounter = 0
        fourDirectionList.forEach(direction => {
            let currentPos = lookPos(direction, pos)
            if (posMap.has(currentPos) && posMap.get(currentPos).id == 'kubejs:chicken_strip') {
                chickenStripCounter++
            }
        })
        if (chickenStripCounter < 3) {
            return
        }
        if (posMap.has(opPos) && posMap.get(opPos).id == 'kubejs:chicken_lung') {
            attributeMapValueAddition(attributeMap, global.LUCK_MULTI_BASE, 0.1)
        }
    }
}

/**
 * 器官激活唯一策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const organActiveOnlyStrategies = {
    'kubejs:telescopic_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.REACH_DISTANCE, 1)
    },
    'kubejs:telescopic_tool_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.REACH_DISTANCE, 2)
    },
    'kubejs:telescopic_attack_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.ATTACK_RANGE, 1)
    },
    'kubejs:nether_star_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, 0.1)
    },
    'kubejs:wrath_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, -0.5)
        attributeMapValueAddition(attributeMap, global.CRITICAL_DAMAGE, 3)
    },
    'kubejs:sloth_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.KNOCKBACK_RESISTANCE, 0.9)
    },
    'kubejs:envy_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.CRITICAL_DAMAGE, 1.2)
    },
    'kubejs:gluttony_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.REGENERATION, 0.8)
    },
    'kubejs:lust_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.MAX_MANA, 200)
    },
    'kubejs:pride_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.SUMMON_DAMAGE, 0.5)
    },
    'kubejs:infinity_force': function (player, organ, attributeMap) {
        if (organ.tag?.forgeTimes) {
            let value = organ.tag.forgeTimes * 1
            attributeMapValueAddition(attributeMap, global.ATTACK_UP, value)
        }
    },
    'kubejs:redstone_chipset': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        if (typeMap.has('kubejs:machine')) {
            let value = Math.max(typeMap.get('kubejs:machine').length * 0.02, 0.2)
            attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, value)
        }
        attributeMapValueAddition(attributeMap, global.CRITICAL_DAMAGE, 0.3)
    },
    'kubejs:king_of_stomach': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let healthUp = 0
        let attackUp = 0
        let manaUp = 0
        let onlySet = new Set()
        posMap.forEach((value, key) => {
            if (value) {
                let foodPro = Item.of(value.id).getFoodProperties(player)
                if (foodPro) {
                    let nutrition = foodPro.getNutrition()
                    let staturation = foodPro.getSaturationModifier() * nutrition
                    if (!onlySet.has(value.id)) {
                        healthUp = healthUp + nutrition / 2
                        attackUp = attackUp + staturation / 4
                        onlySet.add(value.id)
                        if (foodPro.getEffects().length) {
                            manaUp = manaUp + foodPro.getEffects().length * 20
                        }
                    }
                    healthUp = healthUp + nutrition / 12
                    attackUp = attackUp + staturation / 16
                } else {
                    healthUp = healthUp - 4
                    attackUp = attackUp - 2
                }
            }
        })
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, Math.floor(healthUp))
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, attackUp)
        attributeMapValueAddition(attributeMap, global.MAX_MANA, Math.floor(manaUp))
    },
    'kubejs:chicken_heart': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        if (typeMap.has('kubejs:food')) {
            let value = typeMap.get('kubejs:food').length
            attributeMapValueAddition(attributeMap, global.LUCK, value)
        }
    },
    'kubejs:broken_prismarine_crown': function (player, organ, attributeMap) {
        let playerChestInstance = player.getChestCavityInstance()
        playerChestInstance.organScores.forEach((key, value) => {
            if (value <= -8) {
                playerChestInstance.organScores.put(key, new $Float(value + 10))
            }
        })
    },
    'kubejs:prismarine_crown': function (player, organ, attributeMap) {
        let playerChestInstance = player.getChestCavityInstance()
        playerChestInstance.organScores.forEach((key, value) => {
            if (value < 0) {
                playerChestInstance.organScores.put(key, new $Float(1))
            }
        })
    },
    'kubejs:rose_quartz_dialyzer': function (player, organ, attributeMap) {
        let chestInventory = player.getChestCavityInstance().inventory.tags
        let chestInventoryTypeMap = getPlayerChestCavityTypeMap(player)
        chestInventoryTypeMap.delete('kubejs:rose')
        for (let i = 0; i < chestInventory.length; i++) {
            let organ = chestInventory[i]
            let itemId = String(organ.getString('id'))
            let tagList = Item.of(itemId).getTags().toArray()
            for (let i = 0; i < tagList.length; i++) {
                let tag = tagList[i].location()
                if (tag != 'kubejs:rose' && tag != 'kubejs:machine') {
                    continue
                }
                tag = 'kubejs:rose'
                if (chestInventoryTypeMap.has(tag)) {
                    let itemList = chestInventoryTypeMap.get(tag)
                    itemList.push(organ)
                    chestInventoryTypeMap.set(tag, itemList)
                } else {
                    chestInventoryTypeMap.set(tag, [organ])
                }
            }
        }
        let uuid = String(player.getUuid())
        playerChestCavityTypeMap.set(uuid, chestInventoryTypeMap)
    },
    'kubejs:fish_in_chest': function (player, organ, attributeMap) {
        let playerChestInstance = player.getChestCavityInstance()
        let organCount = getOrganCount(player)
        let amplifier = 27 / organCount - 1
        playerChestInstance.organScores.forEach((key, value) => {
            playerChestInstance.organScores.put(key, new $Float(value * amplifier))
        })
    },
    'kubejs:aegis': function (player, organ, attributeMap) {
        let armorval = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'defense')) * 0.5
        attributeMapValueAddition(attributeMap, global.ARMOR, Math.max(0, Math.min(30, Math.floor(armorval))))
    },
    'kubejs:whale_lung': function (player, organ, attributeMap) {
        let instance = player.getChestCavityInstance()
        let breathCapacity = instance.organScores.getOrDefault(new ResourceLocation('chestcavity', 'breath_capacity'), 0) * 1.5
        instance.organScores.put(new ResourceLocation('chestcavity', 'breath_capacity'), new $Float(breathCapacity))
    },
    'kubejs:etched_paper': function (player, organ, attributeMap) {
        let instance = player.getChestCavityInstance()
        let chestInventory = instance.inventory.tags
        let enchantOnlyMap = new Map()
        let enchantList = []
        let spellPowerUp = 0
        let manaRegen = 0
        let cdReduction = 0
        let buoyant = instance.organScores.getOrDefault(new ResourceLocation('chestcavity', 'buoyant'), 0)
        for (let i = 0; i < chestInventory.length; i++) {
            let organ = chestInventory[i]  
            if (!organ.get('tag')) continue
            if(String(organ.id) == 'minecraft:enchanted_book') {
                enchantList = organ.get('tag').get('StoredEnchantments')
            }
            else {
                enchantList = organ.get('tag').get('Enchantments')
            }
            if (!enchantList) continue
            // 处理该格物品的每个附魔
            for (let j = 0; j < enchantList.length; j++) {
                let currentEnchant = enchantList[j]
                let enchantName = currentEnchant.id
                let lvl = currentEnchant.lvl
                if(!enchantOnlyMap.has(enchantName)){
                    enchantOnlyMap.set(enchantName, lvl)
                }else enchantOnlyMap.set(enchantName, Math.max(enchantOnlyMap.get(enchantName), lvl))
                // 贪得无厌
                if (j >= 1){
                    cdReduction -= 0.05 * (j - 1)
                    buoyant += 0.1 * lvl
                }
            }
            buoyant += 0.1
        }
        enchantOnlyMap.forEach((value, key) => {
            if (curseEnchantList.includes(key)){
                spellPowerUp -= value * 0.01
                manaRegen += value * 0.04
            }else{
                spellPowerUp += value * 0.03
                manaRegen -= value * 0.02
            }
        })
        cdReduction = Math.max(-1, cdReduction)
        manaRegen = Math.max(-1, manaRegen)
        spellPowerUp = Math.max(-1, spellPowerUp)
        attributeMapValueAddition(attributeMap, global.SPELL_POWER, spellPowerUp)
        attributeMapValueAddition(attributeMap, global.MANA_REGEN, manaRegen)
        attributeMapValueAddition(attributeMap, global.COOLDOWN_REDUCTION, cdReduction)
        instance.organScores.put(new ResourceLocation('chestcavity', 'buoyant'), new $Float(buoyant))
    },
    'kubejs:hydra_fiery_blood_essence': function (player, organ, attributeMap) {
        let temperature = ColdSweat.getTemperature(player, "body") 
        let instance = player.getChestCavityInstance()
        let breathCapacity = instance.organScores.getOrDefault(new ResourceLocation('chestcavity', 'breath_capacity'), 0) * 1.5
        instance.organScores.put(new ResourceLocation('chestcavity', 'breath_capacity'), new $Float(breathCapacity))
    },

}


function checkBox22OrganSame(posMap, organ) {
    let pos = organ.Slot
    for (let i = 0; i < box22DirectionList.length; i++) {
        let flag = true
        let directionList = box22DirectionList[i]
        for (let j = 0; j < directionList.length; j++) {
            let currentPos = lookPos(directionList[j], pos)
            if (!(posMap.has(currentPos) && posMap.get(currentPos).id == organ.id)) {
                flag = false
                break
            }
        }
        if (flag) {
            return true
        }
    }
    return false
}
