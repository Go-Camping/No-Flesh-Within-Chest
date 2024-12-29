// priority: 500
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("kubejs:organ_recycler", 20 * 20)
        .requireFunctionOnEnd(ctx => {
            let machine = ctx.machine
            let organ = machine.getItemStored("organ_slot")
            let worth = calculateOrganWorth(organ)
            let coinSlotItem = machine.getItemStored('coin_output')
            if (worth <= 0) return ctx.error("no worth organ")
            if (coinSlotItem && coinSlotItem.hasTag('lightmanscurrency:wallet')) {
                let coinItemList = ConvertMoneyIntoCoinItemList(CoinList, worth)
                coinItemList.forEach(coinItem => {
                    let unpickableItem = $WalletItem.PickupCoin(coinSlotItem, coinItem)
                    ctx.block.popItemFromFace(unpickableItem, Direction.UP)
                }) 
            } else {
                let playerBankAccount = $BankSaveData.GetBankAccount(false, ctx.machine.ownerId)
                playerBankAccount.depositMoney(ConvertMainMoneyValue(worth))
                if (machine.owner && machine.owner.isAlive()) {
                    machine.owner.setStatusMessage(Text.translatable('kubejs.status_msg.organ_sell.1', Text.gold(worth.toFixed(0))))
                }
            }
            machine.removeItemFromSlot("organ_slot", 1, false)
            return ctx.success()
        })
        .requireFunctionEachTick(ctx => {
            let organ = ctx.machine.getItemStored("organ_slot")
            if (!organ || organ.isEmpty()) return ctx.error("no organ")
            return ctx.success()
        })
        .requireFunctionToStart(ctx => {
            let machine = ctx.machine
            let organ = machine.getItemStored("organ_slot")
            let worth = calculateOrganWorth(organ)
            if (worth <= 0) {
                return ctx.error("no worth organ")
            }
            return ctx.success()
        })
        .resetOnError()
})

/**
 * @param {Internal.ItemStack} organ 
 * @returns {number}
 */
function calculateOrganWorth(organ) {
    let worth = 0
    organ.tags.toArray().forEach(/**@param {Internal.TagKey} tag*/tag => {
        let tagString = '#' + String(tag.location())
        if (tagWorth[tagString]) {
            worth += tagWorth[tagString]
        }
    })
    return worth
}