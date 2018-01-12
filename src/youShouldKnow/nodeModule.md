# Node.js 模块系统
目的是为了文件可以相互调用

其实，一个node.js文件就是一个模块，这个文件可能是js代码，JSON,或者编译过的C等。。。

exports和require是Node.js 提供的两个对象，exports 是模块公开的接口，require 用于从外部获取一个模块。

## 创建模块
代码位置： *[vue-and-node-test/src/tryNode/module/useModule.js](../tryNode/module/useModule.js)*

## 服务端的模块放在哪里
比如 http 这个Node.js 自带的模块

所以这里有两中模块，我们自己写的叫文件模块， 而像http这样子node自带的叫做原生模块。当require一个模块时，node会在内部进行区分是文件模块还是原生模块，进而分别进行加载和缓存

#### 优先加载原生模块还是文件模块，看图：
<img src="../tryNode/module/nodejs-require.jpg"/> 

### 详细的文档加载问题还得看文档
