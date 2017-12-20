/**
 * Created by GXD on 2017/12/20.
 * 这里是服务器部分,
 * 并且将路由（./router.js）结合进来
 */
var http = require("http")
var url = require('url')

function start (route) {
  function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname
    console.log('Request for ' + pathname + 'received.')

    route(pathname)
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write('HELLO THIS IS SERVER')
    response.end()
  }

  http.createServer(onRequest).listen(8888)
  console.log('服务已经启动')
}
exports.start = start
