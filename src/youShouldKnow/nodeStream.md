#node.js stream (流)

stream是一个抽象接口，node中有很多对象都实现了这个接口，比如http服务器发请求的request对象就是一个stream。
## 一. 粗浅的理解：'流就是你要折腾的那个文件

## 二. stream的四种类型：
#### Readable----可读操作
#### Writable----可写操作
#### Duplex----可读可写操作
#### Transform----操作被写入数据，让然后读出结果

## 三. stream的事件
所有的stream对象都是EventEmitter实例，常用的事件有：
#### data ---- 当有数据可读时触发
#### end ---- 当没有更多数据可读时触发
#### error ---- 在接收和写入过程中发生错误时触发
#### finish ---- 所有数据已被写入到底层系统时触发

## 四. 从流中读取数据
代码位置：*[vue-and-node-test/src/tryNode/stream/readInStream.js](../tryNode/stream/readInStream.js)*

查看流test.txt的内容：
```angular2html
cat test.txt
```
## 五. 写入流
代码位置：*[vue-and-node-test/src/tryNode/stream/writeToStream.js](../tryNode/stream/writeToStream.js)*

## 六. 管道流
代码位置：*[vue-and-node-test/src/tryNode/stream/pipeStream.js](../tryNode/stream/pipeStream.js)*

我们通过管道，可以从一个流中获取数据并将数据传递到另一个流中。

## 七. 链式流
链式流一般用于管道操作
下面的两个例子用管道和链式俩压缩和解压文件
> 我理解的链式流就是管道流的.pipe连成一串串，就是说.pipe后面还可以继续.pipe
### 压缩文件
代码位置：*vue-and-node-test/src/tryNode/stream/lineStreamCompress.js*
### 解压文件
代码位置：*vue-and-node-test/src/tryNode/stream/lineStreamDecompress.js*
