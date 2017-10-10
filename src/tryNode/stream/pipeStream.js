/**
 * Created by GXD on 2017/10/10.
 *
 */

/**
 * 管道流
 * 将test.txt中的内容写入到write.txt文件中（后者由程序自行创建）
 */
var fs = require('fs')

// 创建一个可读流
var readerStream = fs.createReadStream('test.txt')

// 创建一个可写流
var writeStream = fs.createWriteStream('write.txt')

// 管道读写操作
// 读取test.txt的内容，并将内容写入到write.txt文件中
readerStream.pipe(writeStream)

console.log('程序执行完毕')
