#f1
可以看到座位参数的箭头函数也执行了
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

#f2
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


#f3
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


#f4
```
<!-- 在里面 -->
let inCatch = new Promise((resolve, reject) => {
  const a = {};console.log(a.father.name)
})

inCatch.then((res) => {
    console.log('resolve回调执行了', res)
}, (err) => {
    console.log('reject回调执行了', err)
})

<!-- 在外面 -->
let outOfCatch = new Promise((resolve, reject) => {
    setTimeout(function(){
			const a = {};console.log(a.mather.name)
            },1000)
})

outOfCatch.then((res) => {
    console.log('resolve回调执行了', res)
}, (err) => {
    console.log('reject回调执行了',err)
})

```


#f5
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


#f6
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


#f2
```

```


#f2
```

```


#f2
```

```