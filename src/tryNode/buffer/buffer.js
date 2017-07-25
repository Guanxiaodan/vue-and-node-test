/**
 * Created by GXD on 2017/7/25.
 * Node.js 之 Buffer练习
 * 运行：进入 vue-and-node-test/src/tryNode/buffer/，，， 执行 node buffer.js
 */
var buf = new Buffer(226);
var len = buf.write('www.runmmb.com');
console.log('写入的字节数：'+ len);
