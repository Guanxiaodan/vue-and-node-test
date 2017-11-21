/**
 * Created by GXD on 2017/11/21.
 * 起一个服务，在浏览器中获取到图片
 * 有两种方式都可以做到，请分别试试下面的第一种方式和第二种方式
 * 先起服务：node request_logo.js
 * 然后在浏览器输入 localhost:9999
 * 就可以看到结果了
 * 可以看出来第二种方式更简单
 * pipe会自动监听data和end事件，所以数据会源源不断发送给客户端
 */
var http = require('http')
var fs = require('fs')
var request = require('request')
http.createServer((req, res) => {
  // 第一种方式---start
  // fs.readFile('../../../static/img/logo.png', (err, data) => {
  //   if (err) {
  //     res.end('file out exist!')
  //   } else {
  //     res.writeHead(200, {'Context-Type': 'text/html'})
  //     res.end(data)
  //   }
  // })
  // 第一种方式---end

  // 第二种方式---start
  // fs.createReadStream('../../../static/img/002-link.png').pipe(res)
  // 第二种方式---end

  // 用第二种方式读取线上的图片---start
  request('http://img.mukewang.com/5774d9c40001841306000338-240-135.jpg').pipe(res)
  // 用第二种方式读取线上的图片---end

}).listen(9999)
