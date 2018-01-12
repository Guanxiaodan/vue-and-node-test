/**
 * Created by GXD on 2018/1/12.
 * 这个例子是创建http客户端，同样也是使用http模块
 * 执行：
 * node web服务器.js
 * node web客户端.js
 *
 * 执行结果:
 * <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <title>打招呼</title>
 </head>
 <body>
 <h1>快放春节了</h1>
 <p>过了春节就开心了，至于原因，哈哈哈</p>
 </body>
 </html>
 */
var http = require('http')

// 用于请求的选项
var options = {
  host: 'localhost',
  port: '8080',
  path: '/index.html'
}

// 处理响应的回调函数
var callback = function (response) {
  // 不断更新数据
  var body = ''
  response.on('data', function (data) {
    body += data
  })

  response.on('end', function () {
    // 数据接收完成
    console.log(body)
  })
}

// 向服务端发送请求
var req = http.request(options, callback)
req.end()
