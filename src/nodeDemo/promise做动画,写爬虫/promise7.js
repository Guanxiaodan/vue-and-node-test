/**
 * Created by GXD on 2017/11/20.
 * Promise .race()
 * 与.all()方法相反，这个是谁跑的慢，以谁为准执行回调。
 * 与.all()方法一样，数组里面的函数同步执行，但是谁先执行完了，谁就直接执行.then()回调函数。不用管后面函数的返回结果
 */

function runAsync1 () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行任务一完成')
      resolve('我是来自老大的数据')
    }, 100)
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

Promise.race([runAsync1(), runAsync2(), runAsync3()])
  .then((result) => {
    console.log(result) // 可以看到其他的函数也执行了，但是任务一先执行完，就已经把.then()里的回调函数给执行了，所以后面的函数执行完了，他们的返回值也没用了
  })
  .catch((err) => {
    console.log('出问题了', err)
  })
