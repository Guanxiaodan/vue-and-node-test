# Node.js 模块系统
目的是为了文件可以相互调用，而且模块机制使开发人员不用再考虑变量污染问题。

其实，一个node.js文件就是一个模块，这个文件可能是js代码，JSON,或者编译过的C等。。。

前面说过Node在很大程度上收到了CommonJs规范的影响。下面我们来分别看一下：

## 1.CommonJs 模块
#### 🍎 CommonJs主要有三个部分组成：
  🍌 模块引用：require
  🍌 模块定义：exports
  🍌 模块标识：require的参数
```apple js
// 下面的methes就是模块标识
var math = require('mathes')
```
> 模块标识必须是驼峰命名，或者是以.或..开头的相对路径，或者是以/开头的绝对路径

## 2.Node模块
> 在Node中，一个文件就是一个model对象，model对象有一个exports属性。

#### 🍎 Node模块分为两类：
  🍌 核心模块： Node自带的模块
  🍌 文件模块： 开发人员编写模块
  
#### 🍎 Node模块加载
  
  🍌 部分*核心模块*在Node启动时就存到了内存中。存到内存中的模块就不用进行*文件定位*和*编译执行*两步了。
  
  🍌 *文件模块*的加载需要进行三个步骤:
      路径分析、文件定位、编译执行
    
      
#### 🍎 缓存优先原则
  🍌 如果某文件模块之前加载过，Node会将其缓存起来（是缓存到内存中吗？？？）
  
  🍌 读取优先级：
  > 缓存核心模块>缓存文件模块>核心模块>文件模块
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

## 创建模块
代码位置： [vue-and-node-test/src/tryNode/module/useModule.js](../tryNode/module/useModule.js)

## 服务端的模块放在哪里
比如 http 这个Node.js 自带的模块

所以这里有两中模块，我们自己写的叫文件模块， 而像http这样子node自带的叫做原生模块。当require一个模块时，node会在内部进行区分是文件模块还是原生模块，进而分别进行加载和缓存

#### 优先加载原生模块还是文件模块，看图：
<img src="../tryNode/module/nodejs-require.jpg"/> 

### 详细的文档加载问题还得看文档

