# Node.js 回调函数
node.js异步编程的直接体现就是回调，但并非所有的回调都是异步
> 比如：可以一边读取文件，一边执行其他命令，等文件读取完了，将读取的结果作为回调函数的参数返回。这样做其他操作就不必非得等到文件读取完了之后再执行，也就是说没有阻塞了。大大提高了node.js的性能，所以node.js可以处理大量并发请求。

## 阻塞进程实例：
1.进入*vue-and-node-test/src/tryNode/回调函数*

2.执行：
```angularjs
node block.js
// 输出结果：
测试node阻塞进程:::::::
  www.baidu.com

程序执行结束！

```
3.可以看出来读取文件阻碍了下面代码的执行

## 非阻塞进程实例
1.进入*vue-and-node-test/src/tryNode/回调函数*

2.执行：
```angularjs
 node nonBloking.js
 // 输出结果：
 非阻塞代码从程序执行结束
 测试node阻塞进程:::::::
   www.baidu.com

```
3.结合nonBloking.js代码可以看出来下面的代码并没有因为文件读取被阻塞

