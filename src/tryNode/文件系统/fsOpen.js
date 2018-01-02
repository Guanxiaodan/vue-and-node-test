/**
 * Created by GXD on 2017/12/25.
 * 文件系统
 * 打开文件
 * 不知道在哪里打开了，这个有问题
 */
var fs = require('fs')

// 异步打开文件
console.log('准备打开文件')
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err)
  }
  console.log('文件打开成功')
})
