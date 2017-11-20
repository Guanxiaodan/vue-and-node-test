/**
 * Created by GXD on 2017/11/20.
 * Promise .all()
 * 提供了并行执行异步操作的能力，并且在所有异步操作执行完成后才执行回调
 * all()接收的是一个数组参数，里面的数组元素并行执行，执行完的结果都进入到.then()中。
 * 一般这个功能很适用于初始化数据，因为初始化的时候可能要想多个不同的接口发请求，用这种方法就可以同时发起请求，并且集中处理返回回来的数据
 * 这个是等所有的异步操作执行完了，才进入.then()。也就是说谁跑的慢，以谁为准执行回调。（与之相反的是.race()函数）
 */

function runAsync1 () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行任务一完成')
      resolve('我是来自老大的数据')
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

Promise.all([runAsync1(), runAsync2(), runAsync3()])
  .then((result) => {
    console.log(result) // 可以看出来，result将以上所有数组里函数的resolve返回的数据按顺序集合成一个数组。
  })
  .catch((err) => {
    console.log('出问题了', err)
  })
