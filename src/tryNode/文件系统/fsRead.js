/**
 * Created by GXD on 2017/12/25.
 * 文件系统
 * 文件读取
 */
var fs = require('fs')

// 异步读取
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log('异步读取的数据： ', data.toString())
})


// 同步读取
var data = fs.readFileSync('input.txt')
console.log('同步读取的数据： ', data.toString())
console.log('程序执行完毕')

// 执行结果：
// 同步读取的数据：  文件读取实例
// 我就是哪个被读取的文件！！！
//
// 程序执行完毕
// 异步读取的数据：  文件读取实例
// 我就是哪个被读取的文件！！！
