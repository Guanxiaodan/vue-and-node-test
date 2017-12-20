/**
 * Created by GXD on 2017/12/20.
 * 主要是与控制系统进行交互
 * 我认为这个process应该还挺重要的，需要好好学学！
 * 但是这个里面的例子比较少，得重新找资源学习
 */

// 程序退出前执行， 可以获取到退出码
process.on('exit', function (code) {
  setTimeout(function () {
    console.log('该代码永远不会执行')
  }, 0)
  console.log('退出码为：', code)
})
console.log('程序执行结束')


/**
 * 使用一些process的属性
 */
// 输出到终端
process.stdout.write('你好，关晓丹' + '\n') // 你好，关晓丹

// 通过参数读取
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})
// 0: /usr/local/Cellar/node/8.7.0/bin/node
// 1: /Users/mq/gTest/GitHub/vue-and-node-test/src/tryNode/全局对象/process.js


// 获取执行路径
console.log(process.execPath) // /usr/local/Cellar/node/8.7.0/bin/node


// 平台信息
console.log(process.platform) // darwin

/**
 * 使用一些process方法
 */

// 输出当前目录
console.log('当前目录：' , process.cwd())

// 输出当前版本
console.log('当前版本： ', process.version)

// 输出内存使用情况
console.log('内存使用情况： ', process.memoryUsage())
