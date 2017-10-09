/**
 * Created by GXD on 2017/7/25.
 * Node.js 之 Buffer练习
 * 运行：进入 vue-and-node-test/src/tryNode/buffer/，，， 执行 node buffer.js
 */

// 创建buffer实例并写入buffer缓存
var buf = new Buffer(226);
var len = buf.write('www.runmmb.com');
console.log('写入的字节数：'+ len);


// 从缓存区返回字符串
var buffer = new Buffer(26)
for (var i = 0; i < 26; i++) {
  buffer[i] = i + 97
}

console.log(buffer.toString('ascii')); // abcdefghijklmnopqrstuvwxyz
console.log(buffer.toString('ascii', 0, 5)) // abcde
console.log(buffer.toString('utf8', 0, 5)) // abcde


// 将buffer转换为json对象
var buff = new Buffer('guanguantongxue');
var json = buff.toJSON();
console.log(json) // { type: 'Buffer',data: [ 103, 117, 97, 110, 103, 117, 97, 110, 116, 111, 110, 103, 120, 117, 101 ] }

