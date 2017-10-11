/**
 * Created by GXD on 2017/10/11.
 *
 */

/**
 * 执行 node http.js
 * 在浏览器地址栏输入 http://localhost:9099/
 * 会看到this is response content 被输出到了网页
 */
var http = require('http')
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('this is response content')
  response.end()
}).listen(9099)
