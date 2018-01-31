/**
 * Created by GXD on 2018/1/24.
 * POST请求
 *
 * 运行： node post.js
 * 浏览器地址栏输入： http://127.0.0.1:8086/post.html
 */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// 创建application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('express')); //使用express.static中间件来设置静态文件路径

app.get('/post.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'post.html')
})

app.post('/process_post', urlencodedParser, (req, res) => {
  // res.setHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  console.log('是不是没有收到请求')
  // 输出JSON格式
  var response = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name
  }
  console.log(response)
  res.end(JSON.stringify(response))
})

var server = app.listen(8086, () => {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
