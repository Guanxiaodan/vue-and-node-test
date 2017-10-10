/**
 * Created by GXD on 2017/10/10.
 *
 */
/**
 * 写入流
 * 流是 output.txt
 * 他是创建了output.txt文件，然后将内容写进去
 */

var fs = require('fs')
var data = '这是要写入流的数据'

// 创建一个可以写入的流，写入到文件output.txt文件中
var writerStream = fs.createWriteStream('output.txt')

  /**
   * 处理流事件 ---> data,end,finish,error
   */

// 使用utf-8编码写入数据
writerStream.write(data, 'UTF8')

// 标记文件末尾
writerStream.end('--->END')

// 写入系统完成
writerStream.on('finish', () => {
  console.log('写入完成')
})

writerStream.on('error', (err) => {
  console.log('写入失败', err.stack)
})

console.log('程序执行完毕!!!')
