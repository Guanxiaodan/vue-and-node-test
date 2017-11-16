/**
 * Created by GXD on 2017/11/16.
 *
 */
var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
  'content': 'www.imooc.com写成了www.imoc.com，我真是个猪啊',
  'mid': 6705
})

var options = {
  hostname: 'www.imooc.com',
  port: 80,
  path: '/course/docomment',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'imooc_uuid=0acf6671-5abe-409d-bcae-94ae403f0c1a; imooc_isnew_ct=1499153893; loginstate=1; apsid=QwM2RkYjVkNWI5OWZhMTRkYjk3YTNhMDQyMjUzYTMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzQxNzI2MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHWEQ5OTgzQDE2My5jb20AAAAAAAAAAAAAAAAAAAAAADNlNjI4MzU1YWQ3ZTM4MzE4OTVkMzcxYWNhZDNmNTFhn1sJWjZuRlc%3DZj; last_login_username=GXD9983%40163.com; PHPSESSID=g3jjh36ls7ukvr4ke4q4regnv2; channel=491b6f5ab9637e8f6dffbbdd8806db9b_phpkecheng; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1510560841,1510562564,1510642639,1510742512; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1510799611; imooc_isnew=2; cvde=5a0c19eed99c1-76',
    'Host': 'www.imooc.com',
    'Origin': 'http://www.imooc.com',
    'Referer': 'http://www.imooc.com/video/6705',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

var req = http.request(options, (res) => {
  console.log('请求的返回的状态码' + res.statusCode)
  console.log('返回的响应头', JSON.stringify(res.headers))

  res.on('data', (chunk) => {
    console.log('是不是buffer类型', Buffer.isBuffer(chunk))
    console.log('chunk的类型', typeof chunk)
  })

  res.on('end', () => {
    console.log('评论完毕')
  })
})

req.on('error', (err) => {
  console.log('评论失败', err.message)
})

req.write(postData)

req.end()
