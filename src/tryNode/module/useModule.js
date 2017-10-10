/**
 * Created by GXD on 2017/10/10.
 *
 */

/**
 *  模块一
 */
var module1 = require('./example') // 引入example模块
module1.world()

/**
 * 模块二
 * 这是对象封装成模块
 * ------------------------->>>>
 * 模块一和模块二导出方式的差别：
 * exports.world = function(){}
 * module.exports = Hello
 * 前者输出的是exports对象
 * 后者输入的是Hello对象本身
 * 可以在后面打印一下两个例子
 */
var Module2 = require('./example2')
const xiaoming = new Module2()
xiaoming.setName('小明')
xiaoming.saySth()

console.log('module1--->', module1)
console.log('Module2--->', Module2)
