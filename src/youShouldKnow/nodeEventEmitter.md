# Node.js EventEmitter
代码参见*vue-and-node-test/src/tryNode/events/events.js*

node.js 的线程池里执行完程序的事件会在完事的事件队列里排队来返回结果

node.js 的许多对象都会分发事件（分发一个事件应该就是事件B被触发，比如*fs.readStream*对象在打开文件的时候发出会一个事件，所有产生这些事件的对象都是events.EventEmitter的实例。

## EventEmitter 类
node.js 的*events*模块只提供一个*events.EventEmitter*对象，这个对象就是用来绑定和触发事件的。

```angularjs
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
// some_event是事件名
event.on('some_event', function() { 
	console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
	event.emit('some_event'); 
}, 1000); 
```
