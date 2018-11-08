1.走catch了，程序报错
```
promise = new Promise((resolve, reject) => {
  resolve('haha')
})
t = promise.then(() => {
    return a.b.c
  })
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
```

1.走catch了，程序报错 同步
```
promise = new Promise((resolve, reject) => {
  console.log(a.b.c)
})
t = promise.then((ok) => {
    console.log('resolve: ', ok)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
console.log(t)
```


1.没有走catch，程序报错 异步
```
promise = new Promise((resolve, reject) => {
 setTimeout(()=>{
 console.log(a.b.c)
})
})
t = promise.then((ok) => {
    console.log('resolve: ', ok)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
console.log(t)
```


```

function one() {
  return new Promise(function (resolve, reject) {
    console.log('第1 ');
    setTimeout(() => {
      resolve('我是老大')
    },1000);
  });
}


function two(input) {
  return new Promise(function (resolve, reject) {
    console.log('第2', input)
	setTimeout(()=>{
		resolve(['来自老二'])
	},2000) 
  });
}

```

一：
```
one()
.then(function(res){return two(res)})
.then((res)=>{console.log(res)})

第1 
Promise {<pending>}
 第2 我是老大
 ["来自老二"]

```

二：
```
one()
.then(two)
.then(console.log)


第1 
Promise {<pending>}
 第2 我是老大
 ["来自老二"]
```