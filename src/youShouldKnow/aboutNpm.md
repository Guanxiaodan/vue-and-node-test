# NPM相关知识


## npm的应用场景
   从npm服务器下载别人写的第三方包或者命令行到本地使用，或者上传自己写的包或命令行到NPM服务器给别人使用

### npm升级
```angularjs

sudo npm install npm -g

```
### npm安装第三方包(express)的例子
安装express:
```angularjs
npm install express
```
在项目中使用express包(使用require引包)：
```angularjs
var express = require('express');
```

### 关于安装时候的输出信息
第一行显示出了包的版本信息以及安装位置
> express@4.13.3 node_modules/express


### 查看全局安装的包有哪些
```angularjs
npm list -g

// 查看安装了哪些依赖
npm list
```
### npm全局安装的包的路径（mac下）：
> /usr/local/lib/node_modules

### 查看某个模块的版本号(全局安装模块)
```angularjs
npm list yarn
```
### 卸载模块
```angularjs
npm uninstall express
```
### 更新模块
```angularjs
npm update express
```
### 搜索模块
```angularjs
npm search express
```
### 创建模块(目前可能用不到，先写着，留个印象)
```angularjs
// 初始化
npm initpackage.json
// 在npm资源库注册用户
npm adduser
// 发布模块
npm publish
// 发布成功后，别人就可以用npm来安装了
```
### 使用淘宝npm镜像
```angularjs
 npm install -g cnpm --registry=https://registry.npm.taobao.org
 // 使用cnpm安装依赖：
 cnpm install express
```
