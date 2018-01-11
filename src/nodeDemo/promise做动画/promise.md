# Promise
参考文档：https://www.cnblogs.com/lvdabao/p/es6-promise-1.html

### Promise 是ES6的语法规范，解决异步，回调问题，现在可以在代码里面直接用，也可以安装库来使用。
### async、bluebird等库其实是对promise的封装，使得promise使用起来更方便，代码的可理解性更强
```angular2html
npm install bluebird
```
### Promise的相关知识
文档位置：
  promise的参数resolve(.then返回promise对象) ---> [promise2.js](./promise2.js)
  
  promise的参数resolve(.then返回非promise对象) ---> [promise3.js](./promise3.js)
  
  promise的参数reject(.then接收两个参数) ---> [promise4.js](./promise4.js)
  
  promise的参数reject(.catch) ---> [promise5.js](./promise5.js)
  
  promise的参数reject(.all) ---> [promise6.js](./promise6.js)
  
  promise的参数reject(.race) ---> [promise7.js](./promise7.js)

#### Promise的参数：resolve、 reject
#### Promise的方法：.then()、 .catch()、 .all()、 .race()


### 使用promise来写小球动画
文档位置： [ballPromise.html](./ballPromise.html)
原生js写小球动画： [ball.html](./ball.html)
