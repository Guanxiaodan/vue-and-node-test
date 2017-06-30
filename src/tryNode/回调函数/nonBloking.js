/**
 * Created by GXD on 2017/6/26.
 * 非阻塞代码实例
 * 运行：node nonBloking.js
 */

/**
 * fs.readFile()是异步函数用于读取文件，最后一个参数是回调函数，回调函数的第一个参数是错误信息。
 * 如果在文件读取过程中发生错误，err就会输出错误信息(试一下： 将下面代码的input.txt改成inputs.txt)
 * */

var fs = require('fs')
fs.readFile('inputs.txt', function (err, data) {
  if (err) return console.log(err)
  console.log(data.toString())
})
console.log('非阻塞代码从程序执行结束')
