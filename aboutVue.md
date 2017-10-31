# 关于VUE的小知识
#### 1.单页面跳转可以使用：
```angular2html
// login 是路由里定义的
window.location.hash = login;
```

#### 2.如果请求恢复了错误信息，在catch里面的err，如何得到err的内容？
```angular2html
err.response.data.err
```
