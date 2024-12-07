const $ChestCavityUtil = Java.loadClass("net.tigereye.chestcavity.util.ChestCavityUtil")
const luckyCookieSentence = ['你有些发胖了', '梦想将会实现', '你将遇到重要的人', '你将面临挑战', '尊重他的选择', '与他人分享快乐是好事', '勇敢面对挑战', '最美丽的祝福', '困倦不如先睡去吧', '未来的自己会解决的', '今天或许可以多加把劲', '尝试走向未知领域', '学会观察自己的长处', '或许可以试试侧卧睡觉', '该吃些清淡的食物', '少下矿，多睡觉', '可以尝试一些未接触过的', '释放自身压抑的欲望', '放弃也是一个好选择', '下雨的日子可以带伞', '跑步可以改善你的心情', '有氧运动有益健康', '少食多餐是长寿之道', '改变日常的习惯', '追寻新的奇迹', '新的未来在等待着你']

const organActive = 'organActive'

function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}

