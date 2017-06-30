/**
 * Created by GXD on 2017/6/29.
 * node.js事件循环
 * 1.事件处理程序A
 * 2.将事件处理程序A绑定给待触发事件B  eventEmitter.on(B,A)
 * 3.触发事件B   eventEmitter.emit(B)
 * 4.发现事件处理程序A执行了
 */

// 引入events模块
var events = require('events')

// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter()

// 创建事件处理程序
var eventHandler = function () {
  console.log('连接成功。。。。')
  // 触发data_received事件
  eventEmitter.emit('data_received')
  console.log('连接成功222222.。。。。。')
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', eventHandler)

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
  console.log('数据接收成功')
})

// 触发 connection 事件
eventEmitter.emit('connection')

console.log('程序执行完毕！！！')
