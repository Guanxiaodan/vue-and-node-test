/**
 * Created by GXD on 2018/1/23.
 * express 静态文件
 * express 提供了内置中间件express.static来设置静态文件例如：图片，CSS， JavaScript等
 *
 * 运行：node file.js
 * 在浏览器地址栏输入 http://0.0.0.0:8083/img/cat2.jpeg
 * 这样就信使出来了静态文件
 */
var express = require('express')
var app = express()

app.use(express.static('../../../static')) // 使用express.static中间件来设置静态文件路径

app.get('/', (req, res) => {
  res.send('可以获取到文件');
})

var server = app.listen(8083, () => {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

