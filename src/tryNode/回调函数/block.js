/**
 * Created by GXD on 2017/6/26.
 * 阻塞代码实例
 */

// 引入node的fs模块
var fs = require('fs')
var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log('阻塞程序执行结束！')
