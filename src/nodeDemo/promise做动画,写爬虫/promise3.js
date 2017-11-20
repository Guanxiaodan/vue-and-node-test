/**
 * Created by GXD on 2017/11/20.
 * Promise resolve
 * .then返回非Promise对象的情况
 */

function runAsync1 () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行任务一完成')
      resolve('我是来自老大的数据') // resolve 就相当于将里面的内容传递出去给下一个.then里面的函数
    }, 2000)
  })
  return p
}

function runAsync2 () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行任务二完成')
      resolve('我是来自老二的数据')
    }, 2000)
  })
  return p
}

function runAsync3 () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行任务三完成')
      resolve('我是来自老三的数据')
    }, 2000)
  })
  return p
}

runAsync1()
  .then((data) => {
    console.log(data)
    return runAsync2() // 这样return出来的是一个promise对象
  })
  .then((data) => {
    console.log(data)
    return '这里是直接返回的数据'
  })
  .then((data) => {
    console.log(data)
    return '这里是直接返回的数据2222'
  })
  .then((data) => {
    console.log(data)
  })

