# Node.js EventEmitter
代码参见*[vue-and-node-test/src/tryNode/events/events.js](../tryNode/events/events.js)*

node.js 的线程池里执行完程序的事件会在完事的事件队列里排队来返回结果

node.js 的许多对象都会分发事件（分发一个事件应该就是事件B被触发，比如*fs.readStream*对象在打开文件的时候发出会一个事件，所有产生这些事件的对象都是events.EventEmitter的实例。

## EventEmitter 类
node.js 的*events*模块只提供一个*events.EventEmitter*对象，这个对象就是用来绑定和触发事件的。

```angularjs
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
// some_event是事件名（事件）
// 后面绑定的函数叫监听器
event.on('some_event', function() { 
	console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
	event.emit('some_event'); 
}, 1000); 
```
一个事件可以绑定许多个监听器：
```angularjs
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
// 运行结果：
// listener1 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数
```

## EventEmitter 的属性（没写完）
#### 1.	on(event, listener)
给事件注册监听器（*on*也可以替换成*addListener*）
#### 2. emit(event, [arg1], [arg2], [...])
触发事件监听器
#### 3. once(event, listener)
给事件绑定单次监听器，监听器被触发一次后就解除绑定
#### 4. removeListener(event, listener)
给事件解绑监听器

需要传入事件名称，监听器名称（这样在绑定的时候就不能用匿名函数了）

> 注意： 最好给程序加上*error*事件，不然遇到错误后整个程序会崩溃
```angularjs
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error', function() {}); 
```
## 继承 EventEmitter
大多数时候我们不会直接使用EventEmitter，而是在对象中继承它。只要是支持事件响应的核心模块都是EventEmitter的子类。

