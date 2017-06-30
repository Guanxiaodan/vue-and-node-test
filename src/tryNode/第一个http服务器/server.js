/**
 * Created by GXD on 2017/6/26.
 * 1.在命令行输入： node server.js;
 * 会发现打印出了`Server running at http://127.0.0.1:8888/`
 * 因为这样是在用node起server这个服务器
 * 2.在浏览器地址栏输入http://127.0.0.1:8888/
 * 发现页面上出现`hello this is my first node server`
 * 这个是服务器返回的信息
 */

// 将实例化的HTTP模块赋值给http变量
var http = require('http')

// 使用http.createServer来创建服务器，使用listen来绑定并监听8888端口，函数通过request,response两个参数来接收和响应数据
http.createServer(function (request, response) {
  // 响应的HTTP头-----状态：200；内容类型：text/plain（普通文本）
  response.writeHead(200, {'Content-Type': 'text/plain'})
  // 响应的数据
  response.end('hello this is my first node server')
}).listen(8888)

// 终端打印下面的信息：
console.log('Server running at http://127.0.0.1:8888/')
// 这样就完成了一个可以工作的HTTP服务器
