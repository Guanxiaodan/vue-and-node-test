/**
 * Created by GXD on 2017/11/21.
 * 读写大文件，防爆仓处理
 */
var fs = require('fs')
var readStream = fs.createReadStream('../../../static/video/1102.mp4')
var writeStream = fs.createWriteStream('writedVideo.mp4')
readStream.on('data', (chunk) => {
  // 防止缓存爆仓
  if(writeStream.write(chunk) === false) {
    console.log('still cached')
    readStream.pause()
  }
})
readStream.on('end', () => {
  console.log('end')
  writeStream.end()
})
// 防止缓存爆仓
writeStream.on('drain', () => {
  console.log('data drains')
  readStream.resume()
})
