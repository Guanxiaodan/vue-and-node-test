/**
 * Created by GXD on 2018/1/2.
 * 获取文件信息
 * 可以用来判断是否为文件还是目录
 */
var fs = require('fs')
console.log('准备打开文件')
fs.stat('./input.txt', function (err, stats) {
  if (err) {
    return console.log(err)
  }
  console.log(stats)
  console.log('读取文件信息成功')
  // 检测文件类型
  console.log('是否为文件？？', stats.isFile())
  console.log('是否为目录？？', stats.isDirectory())
})
