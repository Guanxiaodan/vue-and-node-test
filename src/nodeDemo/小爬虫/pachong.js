/**
 * Created by GXD on 2017/11/14.
 *
 */
var http = require('http')
var url = 'http://www.gzrailway.com.cn/'

http.get(url, (res) => {
  let html = ''
  res.on('data', (data) => {
    html += data
  })
  res.on('end', () => {
    console.log(html)
  })
}).on('error', () => {
  console.log('获取到广铁集团网站失败')
})
