# Node.js Buffer(缓冲区)
javaScript自身只有字符串数据类型，没有二进制数据类型。
但是在处理TCP流或文件流时,必须用二进制数据，所以node.js定义了一个Buffer类，这个类会创建一个专门存放二进制数据的缓存区。
每当需要在node中处理I/O操作中移动的数据时，就有可能使用Buffer库，原始数据存储在Buffer类的实例中。一个Buffer类似于一个整数数组，它对应于V8堆内存之外的一块原始内存。

代码参见： *vue-and-node-test/src/tryNode/buffer/buffer.js*
## 一. 创建Buffer类
#### 方法一：
```angularjs  
// 创建长度为10字节的Buffer实例。
var buf = new Buffer(10);
buf.write('guanxiaodan')
console.log(buf)
```
#### 方法二：
```angularjs
// 通过给定数组创建Buffer实例。
var buf = new Buffer([10, 20, 30, 40]);
```
#### 方法三：
```angularjs
// 通过一个字符串来创建Buffer实例。
var buf = new Buffer("www.runoob.com", "utf-8");
console.log(buf)
```
## 二. 写入缓冲区
>语法： buf.write(string[, offset[, length]][, encoding])

#### 参数说明：
* *string*---写入缓冲区的字符串
* *offset*---缓冲区开始写入的索引值，默认为0
* *length*---写入的字节数，模人物buffer.length
* *encoding*---写入的字节数，默认为'utf-8'

#### 返回值：

实际写入的大小，如果buffer空间不足，则只会写入部分字符串
```angularjs
var buf = new Buffer(226);
var len = buf.write('www.runmmb.com');
console.log('写入的字节数：'+ len);
// 输出： 写入的字节数：14
```
## 三. 从缓冲区读取数据
> 语法： buf.toString([encoding[, start[, end]]])
#### 参数
* *encoding*---编码格式，默认为'utf-8'
* *start*---指定开始读取的索引位置，默认为0
* *end*---结束位置，默认为缓冲区的末尾

#### 返回值
解码缓冲区数据并使用指定的编码格式返回字符串
```angular2html
  var buffer = new Buffer(26)
  for (var i = 0; i < 26; i++) {
    buffer[i] = i + 97
  }
  
  console.log(buffer.toString('ascii')); // abcdefghijklmnopqrstuvwxyz
  console.log(buffer.toString('ascii', 0, 5)) // abcde
  console.log(buffer.toString('utf8', 0, 5)) // abcde
```

## 四. 将Buffer转换为JSON对象
#### 语法：
```angular2html
buf.toJSON()
```
### 例子：
```angular2html
var buff = new Buffer('guanguantongxue');
var json = buff.toJSON();
console.log(json) // { type: 'Buffer',data: [ 103, 117, 97, 110, 103, 117, 97, 110, 116, 111, 110, 103, 120, 117, 101 ] }
```
## 五. 缓冲区合并
```angular2html
Buffer.concat(list[, totalLength])
```
#### 参数
* *list*---用于合并的Buffer对象数组列表
* *totalLength*---指定开始读取的索引位置，默认为0
* *end*---结束位置，默认为缓冲区的末尾


