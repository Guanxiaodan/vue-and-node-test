/**
 * Created by GXD on 2017/10/10.
 *
 */

/**
 * 从流中读取数据
 * 流是 test.txt
 */

var fs = require('fs')
var data = ''

// 创建可读流
var readerStream = fs.createReadStream('./test.txt')
// 设置编码格式为UTF-8
readerStream.setEncoding('UTF8')
// 处理流事件 ---> data,end,error
readerStream.on('data', (chunk) => {
  console.log('data', data)
  console.log('chunk', chunk)
  data += chunk
})

readerStream.on('end', () => {
  console.log('这个是最上面声明的data', data)
})

readerStream.on('error', (err) => {
  console.log(err.stack)
})

console.log('程序执行完毕！！！')
