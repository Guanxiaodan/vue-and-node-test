/**
 * Created by GXD on 2017/11/20.
 * promise Reject
 * .then()接收两个函数，第一个函数属于resolve状态， 第二个状态属于rejected这状态
 * 可以使用resolve和reject来传递状态
 */

function getNumber () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      var num = Math.ceil(Math.random() * 10) // 生成1-10的随机数
      console.log(num)
      if (num <= 5) {
        resolve(num)
      } else {
        reject('数字太大了')
      }
    }, 2000)
  })
  return p
}

getNumber()
  .then(
    (data) => {
      // resolve状态
      console.log('resolve')
      console.log(data)
    },
    (reason) => {
      // rejected状态
      console.log('rejected')
      console.log(reason)
    }
  )
