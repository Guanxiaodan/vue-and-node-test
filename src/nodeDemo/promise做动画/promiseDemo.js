/**
 * Created by GXD on 2017/12/19.
 *
 */

/**
 * 例子一
 * 最基本的promise
 */
// new Promise((resolve, reject) => {
//   console.log('我是老大');
//   resolve('这是来自老大的数据')
// }).then((data) => {
//   console.log('我是老二')
//   console.log(data)
// }).catch((err) => {
//   console.log('发生了错误', err)
// })

/**
 * 例子二
 * 链式.then()
 * 返回promise对象
 */
// new Promise((resolve, reject) => {
//   console.log('我是老大')
//   resolve('这是来自老大的数据')
// })
//   .then((data) => {
//     console.log('我是老二')
//     console.log(data)
//     return new Promise((resolve) => {
//       resolve('这是来自老二的数据')
//     })
//   })
//   .then((data) => {
//     console.log('我是老三')
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('发生了错误', err)
//   })

/**
 * 例子三
 * 链式.then()
 * 返回封装在函数里的promise对象
 * 可以确认一个函数执行完了，结果也返回了，再去执行后面的函数
 */
function multiply () {
  return new Promise(function (resolve, reject) {
    console.log('第二 ')
    setTimeout(() => {
      resolve('我是老二')
    }, 1000)
  })
}

// 0.5秒后返回input+input的计算结果:
function add (input) {
  return new Promise(function (resolve, reject) {
    console.log('hahaha')
    console.log('第三 ' + input + ' + ' + input + '...')
    resolve(['来自老三', input])
  })
}

multiply()
  .then(add)
  .then(function (result) {
    console.log('Got value: ' + result)
  })

/**
 * 例子四
 * 链式.then()
 * 返回非promise对象
 */
// new Promise((resolve, reject) => {
//   console.log('我是老大')
//   resolve('这是来自老大的数据')
// })
//   .then((data) => {
//     console.log('我是老二')
//     console.log(data)
//     return '这是来自老二的数据'
//   })
//   .then((data) => {
//     console.log('我是老三')
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('发生了错误', err)
//   })

/**
 * 例子五
 * 链式.then()
 * 不返回任何数据
 */
// new Promise((resolve, reject) => {
//   console.log('我是老大')
//   resolve('这是来自老大的数据')
// })
//   .then((data) => {
//     console.log('我是老二')
//     console.log(data)
//   })
//   .then(() => {
//     console.log('我是老三')
//   })
//   .catch((err) => {
//     console.log('发生了错误', err)
//   })

