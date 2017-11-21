/**
 * Created by GXD on 2017/11/21.
 * 分段读取大文件
 */
var fs = require('fs')
var readStream = fs.createReadStream('../../../static/video/1102.mp4')
var n = 0

readStream.on('data', (chunk) => {
  n++
  console.log(Buffer.isBuffer(chunk))
  console.log('data emits')
  readStream.pause()
  console.log('data pause')
  setTimeout(() => {
    console.log('data pause stop')
    readStream.resume()
  }, 10)
})
  .on('readable', () => {
    console.log('data readable')
  })
  .on('end', () => {
    console.log(n)
    console.log('data ends')
  })
  .on('close', () => {
    console.log('data close')
  })
  .on('error', (err) => {
    `data read error ${err}`
  })
