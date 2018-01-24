/**
 * Created by GXD on 2018/1/24.
 * Express GET请求
 * 运行: node get.js
 * 在浏览器地址栏输入：http://127.0.0.1:8084/get.html  看到返回的页面
 * 填好输入框之后点击提交按钮，看到返回的数据
 */
var express = require('express')
var app = express()

app.use(express.static('express'))

// http://127.0.0.1:8084/get.html 请求获取到这个html页面
app.get('/get.html', (req, res) => {
  res.sendfile(__dirname + '/' + 'get.html')
})

// 页面上的form提交，请求到这个路由
app.get('/process_get', (req, res) => {
  // 输出JSON格式
  var response = {
    'first_name': req.query.first_name,
    'last_name': req.query.last_name
  }

  console.log(response)
  res.end(JSON.stringify(response))
})

var server = app.listen(8084, () => {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
