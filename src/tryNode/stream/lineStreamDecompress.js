/**
 * Created by GXD on 2017/10/10.
 *
 */
/**
 * 这个例子是用管道和链式来解压文件
 * 将压缩文件test.txt.gz压缩为 decompress.txt
 */
var fs = require('fs')
var zlib = require('zlib')

// 解压test.txt.gz文件为 input.txt
fs.createReadStream('test.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('decompress.txt'))
console.log('文件解压完成')
