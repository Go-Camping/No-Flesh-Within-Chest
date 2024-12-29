// priority: 1000
const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping")
const $GLFWKey = Java.loadClass("org.lwjgl.glfw.GLFW")
const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry")

global.OrganSkill = new $KeyMapping(`key.kubejs.organ_skill`, $GLFWKey.GLFW_KEY_X, 'key.categories.kubejs')
StartupEvents.init(event => {
    $KeyMappingRegistry.register(global.OrganSkill)
})