/**
 * Created by GXD on 2017/11/20.
 * promise Reject
 * .catch()
 */

function getNumber () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      var num = Math.ceil(Math.random() * 10) // 生成1-10的随机数
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
  .then((data) => {
    // resolve状态
    console.log('resolved')
    console.log(data)
  })
  .catch((reason) => {
    // rejected状态
    console.log('rejected')
    console.log(reason)
  })

/**
 * 其实看到这里会发现这个catch和.then()里的第二个函数参数一样，就是用来处理reject状态的,
 * 就是只要.catch()前面所有的程序执行发生了错误，就会进入到catch里面。
 * 可以看下面的例子,
 * 当随机数<=5的时候，就会进入catch显示错误。类似try/catch，这样就算代码写错，也不会阻塞代码运行
 */

getNumber()
  .then((data) => {
    // resolve状态
    console.log('resolved')
    console.log(data)
    console.log(qiba); // 然而guan并未定义，所以会抛出异常，进入catch中
  })
  .catch((reason) => {
    // rejected状态
    console.log('rejected')
    console.log(reason)
  })

