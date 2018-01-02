/**
 * Created by GXD on 2018/1/2.
 * path模块
 * 处理文件路径的小工具
 */

var path = require('path')

// 格式化路径
console.log('格式化路径: ', path.normalize('/test/test1//2slashes/lslash/tab/..'))

// 连接路径
console.log('连接路径: ', path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'))

// 转换为绝对路劲
console.log('绝对路径: ', path.resolve('path.js'))

// 路径中文件的后缀名
console.log('文件后缀名: ', path.extname('path.js'))

// 执行结果
// 格式化路径:  /test/test1/2slashes/lslash
// 连接路径:  /test/test1/2slashes/1slash
// 绝对路径:  /Users/mq/gTest/GitHub/vue-and-node-test/src/tryNode/工具模块/path.js
// 文件后缀名:  .js
