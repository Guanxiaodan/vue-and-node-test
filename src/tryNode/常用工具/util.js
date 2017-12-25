/**
 * Created by GXD on 2017/12/22.
 * 这个例子展示node的常用工具util
 */

var util = require('util')

/**
 * 首先看util的继承属性inherits
 * 实现对象间的原型继承
 * 从返回结果可以看出来Sub 继承了 Base 原型上的属性，而对于Base构造函数本身的属性并没有继承
 * 并且原型上的属性是不可枚举的
 * */
function Base () {
  this.name = 'base'
  this.base = '1991'
  this.sayHello = function () {
    console.log('Hello' + this.name)
  }
}

Base.prototype.showName = function () {
  console.log(this.name)
}

function Sub () {
  this.name = 'sub'
}

util.inherits(Sub, Base)
var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)

var objSub = new Sub()
objSub.showName()
// objSub.sayHello()
console.log(objSub)

// 返回数据：
// base
// Hellobase
// Base { name: 'base', base: '1991', sayHello: [Function] }
// sub
// Sub { name: 'sub' }


/**
 * 首先看util的继承属性inspect
 * 可以将任意对象转换为字符串
 * 通常用于调试和错误输出
 * 使用： util.inspect(object,[showHidden],[depth],[colors])
 * object：要转换的对象
 * showHidden：true/false 是否显示隐藏属性
 * depth：num/null 如果对象比较复杂，则转化几层,如果是null,则转化所有层
 * colors：true/false 是否让输出的字符串绚丽多彩
 * */

function Person () {
  this.name = '关晓丹'
  this.toString = function () {
    return this.name
  }
}

var person = new Person()
console.log(util.inspect(person))
console.log(util.inspect(person, true, null, true))

// 返回数据
// Person { name: '关晓丹', toString: [Function] }
// Person {
//   name: '关晓丹',
//     toString:
//   { [Function]
//     [length]: 0,
//     [name]: '',
//     [arguments]: null,
//     [caller]: null,
//     [prototype]: { [constructor]: [Circular] } } }

