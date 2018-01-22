/**
 * Created by GXD on 2018/1/12.
 * 一个最简单的express框架
 * 运行：
 * node firstExpress.js
 * 在浏览器地址栏输入：http://0.0.0.0:8082
 *
 * express最重要的两个参数就是request和response
 * request对象表示HTTP请求， 包含了请求查询字符串， 参数， 内容， HTTP请求头等属性
 * response对象表示HTTP响应， 即接收到请求时向客户端发送的HTTP响应数据。
 */
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Express');
})

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例', host, port)
})
