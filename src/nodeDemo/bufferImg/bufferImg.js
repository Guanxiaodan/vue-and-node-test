/**
 * Created by GXD on 2017/11/20.
 * 将图片转换为base64格式
 */
var fs = require('fs')
fs.readFile('../../../static/img/002-link.png', (err, origin_buffer) => {
  console.log(Buffer.isBuffer(origin_buffer))
  // 这个是将读取到的图片重新命名并写入到指定地方，如果纯转换base64格式图片，这段代码可以不要
  fs.writeFile('../../assets/new_buffer.png', origin_buffer, (err) => {
    if (err) {
      console.log(err)
    }
  })

  var base64Image = origin_buffer.toString('base64')

  console.log(base64Image)

  // 再将base64编码重新转换成图片放入本文件夹
  var decodeImage = new Buffer(base64Image, 'base64')

  console.log(Buffer.compare(origin_buffer, decodeImage))

  fs.writeFile('decode_image2.png', decodeImage, (err) => {
    if (err) {
      console.log(err)
    }
  })

})
