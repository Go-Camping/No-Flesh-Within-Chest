// KubeJS 2001 (1.20.1) creative tab API.
// The old Architectury CreativeTabRegistry.create() approach no longer works.
StartupEvents.registry('creative_mode_tab', event => {
    event.create('kubejs:organs')
        .icon(() => Item.of('kubejs:candy_heart'))
        .displayName(Text.translatable('itemGroup.kubejs.organs'))
})
