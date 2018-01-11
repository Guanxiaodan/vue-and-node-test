/**
 * Created by GXD on 2018/1/2.
 * 使用node创建web服务器
 * 下面是一个最基本的HTTP服务器架构，使用8080端口（使用http模块搭建）
 * 显然url模块是用来解析url的工具
 *
 * 执行：
 * node web服务器.js
 * 打开浏览器，地址栏输入： http://127.0.0.1:8080/index.html
 */
var http = require('http')
var fs = require('fs')
var url = require('url')

// 创建服务器
http.createServer(function (request, response) {
  // 解析请求， 包括文件名
  var pathname = url.parse(request.url).pathname;

  // 输出请求的文件名
  console.log('请求' + pathname + '收到')

  // 从文件系统中读取请求的文件内容
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err)
      // HTTP状态码： 404 ： NOT FOUND
      // content Type: text/plain
      response.writeHead(404, {'content-type': 'text/html'})
    } else {
      // HTTP 状态码： 200： OK
      // content Type : text/plain
      response.writeHead(200, {'Content-Type': 'text/html'})

      // 响应文件内容
      response.write(data.toString())
    }
    // 发送响应数据
    response.end();
  })
}).listen(8080)

console.log('Server running at http://127.0.0.1:8000/')
