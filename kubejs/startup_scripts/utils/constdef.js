// priority: 1000
const luckyCookieSentence = [
    'kubejs.status_msg.lucky_cookie.1',
    'kubejs.status_msg.lucky_cookie.2',
    'kubejs.status_msg.lucky_cookie.3',
    'kubejs.status_msg.lucky_cookie.4',
    'kubejs.status_msg.lucky_cookie.5',
    'kubejs.status_msg.lucky_cookie.6',
    'kubejs.status_msg.lucky_cookie.7',
    'kubejs.status_msg.lucky_cookie.8',
    'kubejs.status_msg.lucky_cookie.9',
    'kubejs.status_msg.lucky_cookie.10',
    'kubejs.status_msg.lucky_cookie.11',
    'kubejs.status_msg.lucky_cookie.12',
    'kubejs.status_msg.lucky_cookie.13',
    'kubejs.status_msg.lucky_cookie.14',
    'kubejs.status_msg.lucky_cookie.15',
    'kubejs.status_msg.lucky_cookie.16',
    'kubejs.status_msg.lucky_cookie.17',
    'kubejs.status_msg.lucky_cookie.18',
    'kubejs.status_msg.lucky_cookie.19',
    'kubejs.status_msg.lucky_cookie.20',
    'kubejs.status_msg.lucky_cookie.21',
    'kubejs.status_msg.lucky_cookie.22',
    'kubejs.status_msg.lucky_cookie.23',
    'kubejs.status_msg.lucky_cookie.24',
    'kubejs.status_msg.lucky_cookie.25',
    'kubejs.status_msg.lucky_cookie.26',

]

const organActive = 'organActive'

function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}

const TetraEffectFunctionalization = TetraEffect.createItemEffect(new ResourceLocation('kubejs:functionalization'))
const TetraEffectFunctionalizationEffectGetter = TetraStatGetter.createStatGetterEffectLevel(TetraEffectFunctionalization, 1)

const TetraEffectSilicosis = TetraEffect.createItemEffect(new ResourceLocation('kubejs:silicosis'))
const TetraEffectSilicosisEffectGetter = TetraStatGetter.createStatGetterEffectLevel(TetraEffectSilicosis, 1)

global.TetraEffect = {
    'kubejs:functionalization': TetraEffectFunctionalization,
    'kubejs:silicosis': TetraEffectSilicosis
}