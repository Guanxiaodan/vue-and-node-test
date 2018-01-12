/**
 * Created by GXD on 2018/1/12.
 * 一个最简单的express框架
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
