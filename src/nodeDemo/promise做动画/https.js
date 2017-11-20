/**
 * Created by GXD on 2017/11/16.
 *
 */
var https = require('https')
var fs = require('fs')

var options = {
  key: fs.readFileSync('ssh_key.pem'), // 同步读出证书， pem就是证书文件
  cret: fs.readFileSync('ssh_cert.pem')
}
// 有了上面两个证书就可以运行HTTPS的服务器了

https.createServer(options, function (req, res) {
  res.writeHead(200)
  res.end('我收到请求啦')
}).listen(8765)
