/**
 * Created by GXD on 2017/6/26.
 * 非阻塞代码实例
 */
var fs = require('fs')
fs.readFile('input.txt', function (err, data) {
  if (err) return console.log(err)
  console.log(data.toString())
})
console.log('非阻塞代码从程序执行结束')
