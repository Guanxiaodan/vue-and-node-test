# Promise分享
## 一、Promise基础
### 1.promise是什么：
定义上来说Promise是一个构造函数，这个构造函数接受一个函数作为参数，这个函数又有两个参数分别为resolve和reject，这两个参数也是函数。
功能上来说
Promise是一种代码结构和流程，是一种写代码的方式，并且是用来写JavaScript编程中的异步代码的。
promise实例(对象)有三种状态，pending,fulfilled,rejected.状态一旦转化，便不可逆。

### 2.promise的基本用法
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

①. 构造实例

构造函数接受一个函数作为参数。

调用构造函数得到实例p的同时，作为参数的函数会立即执行。--f1--

参数函数接受两个回调函数参数resolve和reject。

在参数函数被执行的过程中，如果在其内部调用resolve，会将p的状态变成fulfilled，或者调用reject，会将p的状态变成rejected。

--f1--
可以看到作为参数的箭头函数也执行了
```
let r = new Promise((resolve, reject) => {
  if (true) {
	console.log(11111)
    resolve()
  } else {
    reject()
  }
})
```

②. 调用.then

调用.then()可以为实例p注册两种状态回调函数，.then()函数接受两个参数，这两个参数也都是函数。
当实例p的状态为fulfilled，会触发第一个函数执行
当实例p的状态为rejected，则触发第二个函数执行 --f2--

--f2--
```
let p = new Promise((resolve, reject) => {
  if (true) {
	console.log(11111)
    resolve()
  } else {
    reject()
  }
})

p.then(() => {
    console.log('resolve回调执行了')
}, () => {
    console.log('reject回调执行了')
})
```

③.调用.catch
.catch就相当于.then()里面传进去的第二的参数 --f6 里面的两个写法等价--
```
<!-- .then(fn1,fn2) -->
let p = new Promise((resolve, reject) => {
  if (false) {
    resolve()
  } else {
    reject('返回一个错误')
  }
})

p.then(() => {
    console.log('resolve回调执行了')
}, (err) => {
    console.log('reject回调执行了', err)
})

<!-- .catch() -->
let p = new Promise((resolve, reject) => {
  if (false) {
    resolve()
  } else {
    reject('返回一个错误')
  }
})

p.then(() => {
    console.log('resolve回调执行了')
}).catch((err) => {
    console.log('reject回调执行了', err)
})
```

### 3.promise的有什么用
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
```
sheng = () => {
    return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(true){
                    resolve('浙江省')
                }else{
                    reject('获取数据失败')
                }
             
            },1000)
        })
}

shi = (res) => {
    console.log('省',res)
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('杭州市')
            },1000)
        })
}

qu = (res) => {
    console.log('市',res)
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('黎明县')
            },1000)
        })
}

zhen = (res) => {
    console.log('区',res)
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('东乡镇')
            },1000)
        })
}

brand = (res) => {
    console.log('镇',res)
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('丰田')
            },1000)
        })
}

chexi = (res) => {
    console.log('品牌',res)
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('X系列')
            },1000)
        })
}

price = (res) => {
    console.log('车系',res)
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('5万元')
            },1000)
        })
}

sheng()
.then(shi)
.then(qu)
.then(zhen)
.then(brand)
.then(chexi)
.then(price)
.then((res2)=>{
    console.log('获取到价格了',res2)
},(err)=>{
    console.log(err)
})
```

### 4.promise的其他常用功能
1.all
我们经常有这样的需要：进入一个页面的时候，需要发多个请求，但是这些请求相互之间没有依赖关系，但是希望所有的请求都正确返回后再渲染页面
这时候，promise.all()就完全符合我们的应用场景 --f5--
promise.all()是等待最后一个异步操作执行结束，然后将所有函数的执行结果放入数组中，再返回
--f5--
```
sheng = () => {
    return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve('杭州市')
            },1000)
        })
}

shi = (res) => {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('杭州市')
            },2000)
        })
}

qu = (res) => {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
             resolve('黎明县')
            },3000)
        })
}

Promise.all([sheng(),shi(),qu()]).then((res2)=>{
    console.log('获取到价格了',res2)
},(err)=>{
    console.log(err)
})
```


2.race
与promise.all()相反，promise.race()是谁先执行完，就返回谁的结果，没执行完的就去不管了 --f5 吧all改成race--


## 二、Promise进阶

### 1. .then()返回一个promise对象(是对象，不是函数),这个对象带有状态和返回的值
.then()是promise原型链上定义的方法，所以promise对象都可以调用.then()方法。
所以可以进行链式调用，也就是.then后面可以继续.then。在注册的状态回调函数中，可以通过return语句改变.then返回的promise对象的状态，以及向后面.then注册的状态回调传递数据；也可以不使用return语句，那样默认就是将返回的promise对象resolve。***但是不能使用resolve，reject，异步操作也不能如想象中运行***
我们来看个例子：--f7--
```
var g1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('foo');
  }, 300);
});

g1.then(function(value) {
  console.log(value);
},function(err) {
  console.log(err);
});

// 1.添加const g2 = 到g1.then()前面，分别打印g1,g2
// 2.const g3 = g2.then(function(value) {
	console.log(g.c)
},function(err) {
  console.log(err);
 
})
// 3.分别打印g1,g2,g3
```
通过这个例子可以看出来.then()返回的是一个带状态的promise对象


### 2. .then()是异步调用的
先来看一道题：
```
new Promise(resolve => {
    console.log(1);
    resolve(3);
    console.log(4);
}).then(num => {
    console.log(num)
});
console.log(2)
```
执行到了resolve的时候，把这个promise对象的状态和传输的值保存了下来，其实.then()函数是立即执行的，但是.then()里传的函数却是异步执行的，是因为传入的函数实际上是包含在immediate函数里的，用immediate实现了一个nextTick，这个nextTick是一个异步函数，可以粗略地理解为setTimeout(function(){},0)，在同步函数执行完成后会立即执行这个函数。所以我们看到打印结果为···。


### 3. promise状态一旦发生改变便不可逆
```
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
console.log(promise)
```

### 4.值穿透
```
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```
期望then.catch里面出入的参数是函数，如果传入非函数，则会发生值穿透

### 5.缺点
无法中途取消promise

## 兼容性问题
https://caniuse.com/#search=promise






# 参考文档：
https://zhuanlan.zhihu.com/p/26523836
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
