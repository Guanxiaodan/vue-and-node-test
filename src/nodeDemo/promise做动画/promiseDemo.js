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
 * 例子四
 * 链式.then()
 * 不返回任何数据
 */
new Promise((resolve, reject) => {
  console.log('我是老大')
  resolve('这是来自老大的数据')
})
  .then((data) => {
    console.log('我是老二')
    console.log(data)
  })
  .then(() => {
    console.log('我是老三')
  })
  .catch((err) => {
    console.log('发生了错误', err)
  })
