/**
 * Created by GXD on 2017/11/27.
 *
 */
var https = require('https')
var fs = require('fs')

var options = {
  key: fs.readFileSync('privatekey.pem'), // 私钥文件
  cert: fs.readFileSync('certificate.pem') // 这个是证书文件
}

https.createServer(options, (req, res) => {
  res.writeHead(200)
  res.end('HTTPS服务器')
}).listen(4444)
