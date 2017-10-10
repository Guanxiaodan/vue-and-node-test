#node.js stream (流)

stream是一个抽象接口，node中有很多对象都实现了这个接口，比如http服务器发请求的request对象就是一个stream。

## stream的四种类型：
#### Readable----可读操作
#### Writable----可写操作
#### Duplex----可读可写操作
#### Transform----操作被写入数据，让然后读出结果

## stream的事件
所有的stream对象都是EventEmitter实例，常用的事件有：
#### data ---- 当有数据可读时触发
#### end ---- 当没有更多数据可读时触发
#### error ---- 在接收和写入过程中发生错误时触发
#### finish ---- 所有数据已被写入到底层系统时触发

## 从流中读取数据
