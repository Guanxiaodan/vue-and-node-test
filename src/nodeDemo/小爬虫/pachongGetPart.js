/**
 * Created by GXD on 2017/11/14.
 *
 */

var http = require('http')
var url = 'http://www.gzrailway.com.cn/'
var cheerio = require('cheerio') // 用来分析页面
const filter = (html) => {
  var $ = cheerio.load(html)
  var chapters = $('.gtxw_ul')
  var newsItem = chapters.children('li')
  var news = []

  newsItem.each((item, value) => {
    if (value.attribs.class === 'gtxw_li') {
      var one = value.children[0].children[0].attribs
      var title = one.title
      var href = one.href
      const pushOne = {
        title: title,
        href: `http://www.gzrailway.com.cn/${href}`
      }
      news.push(pushOne)
    }
  })
  console.log(news)
}
http.get(url, (res) => {
  let html = ''
  res.on('data', (data) => {
    html += data
  })
  res.on('end', () => {
    // console.log(html)
    filter(html)
  })
}).on('error', () => {
  console.log('获取到广铁集团网站失败')
})
