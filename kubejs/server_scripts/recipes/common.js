ServerEvents.recipes(event => {
    event.remove({ mod: 'nameless_trinkets' })
    event.remove({ mod: 'somebosses'})
    event.remove({ output: 'supplementaries:candy' })
    event.shaped('minecraft:elytra', [
        ['', 'alexsmobs:banana_slug_slime', ''],
        ['minecraft:phantom_membrane', 'createaddition:gold_wire', 'minecraft:phantom_membrane'],
        ['', 'alexsmobs:banana_slug_slime', '']
    ])
})