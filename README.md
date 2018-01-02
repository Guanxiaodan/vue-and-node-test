# vue-and-node-test

> 练习Vue和node 

## Node
文档位置：*vue-and-node-test/src/youShouldKnow/*
node官方文档： http://nodejs.cn/api/

> 注：这里是文档的阅读顺序

#### 1.关于NPM ---> aboutNpm.md
#### 2.REPL ---> node.js REPL.md
#### 3.回调函数 ---> node回调函数.md
#### 4.事件循环 ---> node事件循环.md
#### 5.EventEmitter ---> nodeEventEmitter.md
#### 6.Buffer ---> node Buffer.md
#### 7.Stream ---> node Stream.md
#### 8.模块系统 ---> node Module.md
#### 9.函数 ---> node函数.md
#### 10.路由 ---> node路由.md
#### 11.全局变量 ---> node全局变量.md
#### 12.node常用工具 ---> node常用工具.md
#### 13.node文件系统 ---> node文件系统.md
#### 14.node.js POST,GET请求 ---> 发送请求.md



## Node Demo
文件位置： *vue-and-node-test/src/nodeDemo/*
#### 1.简单爬虫 ---> 小爬虫
#### 2.使用node的http.request给慕课网添加视频评论 ---> 用js文件给慕课网添加视频评论
#### 3.promise的相关知识及demo ---> promise做动画 ---> promise.md
#### 4.使用buffer生成base64编码图片 ---> bufferImg
#### 5.Stream的相关知识练习 ---> stream ---> stream.md


## Vue
文档位置：*vue-and-node-test/src/pages/*

#### 1.键盘事件 ---> keyup.vue
#### 2.vue复选框 ---> vueCheckbox.vue
#### 3.子组件向父组件派发信息 ---> father.vue
#### 4.检测url改变 ---> @/index.html

## Vue组件
文档位置：*vue-and-node-test/src/components/*

#### 1.输入框 ---> inputs.vue
#### 1.表格 ---> tables.vue



## 补充
#### 1.服务器数据类型MIME ---> vue-and-node-test/src/youShouldKnow/aboutServer.md


## 小小知识点
1.使用**axios**,返回的错误往往拿不到错误信息，得这样拿：
```angular2html
err.response.data
```
