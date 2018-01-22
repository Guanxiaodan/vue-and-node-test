/**
 * Created by GXD on 2018/1/22.
 * Express路由
 * 路由决定了由哪个脚本去响应客户端请求
 *
 * 自己理解，路由就是'/', '/del_user', '/list_user' 这些，用于标识是往哪个地方发的
 */
var express = require('express')
var app = express()

// GET请求
app.get('/', (req, res) => {
  console.log('主页GET请求')
  res.send('Hello GET')
})


// POST请求
app.post('/', (req, res) => {
  console.log('主页POST请求')
  res.send('Hello POST')
})

// 删除页面响应
app.get('/del_user', (req, res) => {
  console.log('/del_user 响应 DELETE 请求')
  res.send('删除页面')
})

// list_user 页面GET请求
app.get('/list_user', (req, res) => {
  console.log('/list_user GET请求')
  res.send('用户列表页面')
})

// 对页面 abcd, adxcd, ad123cd，等响应get请求
app.get('/ab*cd', (req, res) => {
  console.log('/ab*cd GET 请求')
  res.send('正则匹配')
})

var server = app.listen(8083, () => {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})



