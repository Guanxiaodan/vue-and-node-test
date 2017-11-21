/**
 * Created by GXD on 2017/11/21.
 * 读取文件
 * 的相关事件
 */
var fs = require('fs')
var readStream = fs.createReadStream('stream_copy_logo.js')

readStream
  .on('data', (chunk) => {
    console.log(Buffer.isBuffer(chunk))
    console.log('data emits')
    console.log(chunk.toString('utf8'))
  })
  .on('readable', () => {
    console.log('data readable')
  })
  .on('end', () => {
    console.log('data ends')
  })
  .on('close', () => {
    console.log('data close')
  })
  .on('error', (err) => {
    `data read error ${err}`
  })
