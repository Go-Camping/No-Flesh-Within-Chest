BlockEvents.rightClicked('alexmobs:capsid', event => {
    const item = event.item
    if (!event.block.inventory) return
    const capsid_slot = event.block.inventory.getStackInSlot(0)
    if (!item.isEmpty()
        && item.id === capsid_slot.id
        && (item.hasNBT() || capsid_slot.hasNBT())
        && capsid_slot.nbt !== item.nbt
    ) {
        event.cancel()
    }
})