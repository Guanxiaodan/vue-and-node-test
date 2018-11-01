# Promise分享
## promise是什么：
定义上来说Promise是一个构造函数，它接受一个函数作为参数，这个函数又有两个参数分别为resolve和reject，这两个参数也是函数。
功能上来说
Promise是一种代码结构和流程，是一种写代码的方式，并且是用来写JavaScript编程中的异步代码的。

## promise的基本用法
```
    let p = new Promise((resolve, reject) => {
    // 做一些事情
    // 然后在某些条件下resolve，或者reject
    if (/* 条件随便写^_^ */) {
        resolve()
    } else {
        reject()
    }
    })

    p.then(() => {
        // 如果p的状态被resolve了，就进入这里
    }, () => {
        // 如果p的状态被reject
    })
```

第一段调用了Promise构造函数，第二段是调用了promise实例的.then方法

1. 构造实例
构造函数接受一个函数作为参数。
调用构造函数得到实例p的同时，作为参数的函数会立即执行。--fn1--
参数函数接受两个回调函数参数resolve和reject。
在参数函数被执行的过程中，如果在其内部调用resolve，会将p的状态变成fulfilled，或者调用reject，会将p的状态变成rejected。
***也就是说当new了一个promise实例的时候，就已经注定了这个实例的状态是resolve还是reject了***

2. 调用.then
调用.then()可以为实例p注册两种状态回调函数
当实例p的状态为fulfilled，会触发第一个函数执行
当实例p的状态为rejected，则触发第二个函数执行 --fn2--

## promise的有什么用
比如我们要查找浙江省杭州市黎明县东乡镇的丰田X系的车的价格，我们可能得这么写：
 ```
 getSheng(){ // 获取全国有哪些省
    if(res1.success){
        getShi('浙江省'){ // 获取浙江省下面的市
          if(res2.success){
              getQu('杭州市'){ // 获取杭州市下面的县
                if(res3.success){
                  getZhen('黎明县'){ // 获取黎明县下面的镇
                    if(res4.success){
                        getBrand('东乡镇'){ // 获取东乡镇里面有什么车
                          if(res5.success){
                              getChexi('丰田'){ // 获取东丰田下的车系
                                if(res6.success){
                                  getPrice('X系列'){ // 获取X系列的价格
                                    if(res7.success){
                                       console.log(res6.data.price)
                                  }
                               }
                            }
                          }
                        }
                      }
                    }
                 }
              }
            }
          }
       }
    }
}
```
上面这段代码就是传说中的回调地狱，在修改的时候你首先得理清楚这些函数的执行顺序，同步代码异步代码再一混合，维护起来会非常麻烦。
如果我们用promise来优化一下: --f3--



111.reject,不人为控制，而是程序报错示例


# 参考文档：
https://zhuanlan.zhihu.com/p/26523836