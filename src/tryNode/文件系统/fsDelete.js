/**
 * Created by GXD on 2017/12/25.
 * 删除文件
 *
 */
var fs = require('fs')

console.log('准备删除文件')
fs.unlink('input.txt', function(err){
  if(err) {
    return console.error(err)
  }
  console.log('文件删除成功')
})
