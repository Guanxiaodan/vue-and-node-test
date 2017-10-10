/**
 * Created by GXD on 2017/10/10.
 *
 */
/**
 * 链式流
 * 这个例子是用管道和链式来压缩文件
 * 将文件test.txt压缩为 test.txt.gz
 */

var fs = require('fs')
var zlib = require('zlib')

// 压缩test.txt文件为 test.txt.gz
// 可以看出来这是一个什么样的套路：先读文件---再对文件做某种操作---再将操作完成后的文件写入到什么地方（写成什么文件）
fs.createReadStream('test.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('test.txt.gz'))

console.log('文件压缩完成')
