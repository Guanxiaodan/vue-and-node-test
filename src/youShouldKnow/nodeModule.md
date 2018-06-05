# Node.js 模块系统
目的是为了文件可以相互调用，而且模块机制使开发人员不用再考虑变量污染问题。

其实，一个node.js文件就是一个模块，这个文件可能是js代码，JSON,或者编译过的C等。。。

前面说过Node在很大程度上收到了CommonJs规范的影响。下面我们来分别看一下：

## 一. CommonJs 模块
### 1.1 CommonJs主要有三个部分组成：
  🍋 模块引用：require
  
  🍋 模块定义：exports
  
  🍋 模块标识：require的参数
```apple js
// 下面的methes就是模块标识
var math = require('mathes')
```
> 模块标识必须是驼峰命名，或者是以.或..开头的相对路径，或者是以/开头的绝对路径

## 二. Node模块
> 在Node中，一个文件就是一个module对象，module对象有一个exports属性。

### 2.1 Node模块分为两类：
  🍋 核心模块： Node自带的模块
  
  🍋 文件模块： 开发人员编写模块
  
### 2.2 Node模块加载
  
  🍋 **文件模块**的加载需要进行三个步骤:
  
   路径分析、文件定位、编译执行
  
  🍋 部分**核心模块**在Node启动时就存到了内存中。存到内存中的模块就不用进行**路径分析**、**文件定位**和**编译执行**三步了。
### 🍎 2.2.1 文件模块加载
#### 🍊 2.2.1.1 路径分析
  > 主要介绍自定义模块，自定义模块不是核心模块，也不是路径形式的模块标识。可能是一个文件或者包的形式。比如express。这类模块的查找最费事。
  
  🍋 模块路径
  > 在了解自定义模块的查找方式之前，要先了解模块路径的概念
  
  模块路径是Node定位文件模块的具体文件时的查找策略，具体表现为**路径组成的数组**
  
  代码位置：[vue-and-node-test/src/tryNode/module/module_path.js](../tryNode/module/module_path.js)
  
  可以看到查找方式是沿路径向上逐级递归，直到根目录下的node_modules目录。在加载过程中，Node会逐个尝试模块路径中的路径，直到找到目标文件为止。
  
  所以：
  **当前文件路径越深，模块查找耗时越多，所以自定义模块加载速度最慢**
  
#### 🍊 2.2.1.2 文件定位
   🍋 文件定位主要有这两个部分：文件扩展名分析、目录和包的处理。
  
   🍋 文件扩展名分析
  
  如果模块标识中不含有扩展名，则Node会按照.js、.json、.node的次序补足扩展名，依次尝试。
  
  🌲 性能优化：如果是.node和.json文件，在传递给require()时的模块标识带上扩展名，会加快一点速度。
  
   🍋 目录和包的处理
  
  前面提到了**模块路径**，在这里就用到了。Node会将模块路径里面的路径当做包来处理（包之所以称作为包，是因为包里有package.json）
  
  🌲 处理步骤：
  
    🦋 Node在当前目录(比如A文件引用了express，就现在A文件所在的文件夹下进行查找，当然，这个文件夹的目录是模块路径中的第一个数组元素)下查找package.json，找到main属性指定的文件名进行定位。如果main属性指定的文件名错误，或者压根没有package.json文件，Node会将index当做默认文件名，然后依次查找index.js,index.json,index.node.
    🦋 如果在当前目录没有成功定位到任何文件，则Node进入下一个模块路径（也就是当前目录的父级目录）进行查询。
    🦋 如果模块路径被遍历完都没有找到目标文件，则会抛出异常。
  
#### 🍊 2.2.1.3 模块编译
   🍋 前面说过，每个文件模块都是一个module对象，那么它是如何定义的呢？如下：
```apple js
function Module(id, parent) {
    this.id = id;
    this.exports = {};
    this.parent = parent;
    if (parent && parent.children) {
      parent.children.push(this)
    }
    this.filename = null;
    this.loaded = false;
    this.children = [];
}
```
 🍋 每一个编译成功的模块都会将其文件路径作为索引缓存在Module._cache对象上（看这名字和写法猜这应该是Module原型链上的缓存属性），以提高二次引入时的性能。
 
  🍋 JavaScript模块的编译
 
 🌲 我们知道在每个模块中存在着require,exports,module这三个变量，但是他们在模块文件中并没有定义，那么从何而来？在Node的API中，我们知道每个模块中还有__filename,__dirname,他们又是从何而来？
       
 实际上，在编译过程中，Node对JavaScript文件进行了包装，成为了这个样子：
```apple js
(function(exports,require,module,__filename,__dirname){
    var math = require('math');
    exports.area = function(radius) {
      return Math.PI * radius * radius;
    }
})
```
这样，每个模块文件之间都进行了作用域隔离，，包装之后的代码用runInThisContext()方法执行，返回一个function对象，最后将当前模块的module，require()方法，exports属性，还有在文件定位中得到的文件路径和文件目录座位参数传递给这个function执行。
    
  🦋 为什么有了一个exports,还有一个module.exports??
    
    exports = module.exports,也就是说，将module.exports赋值给了exports，然后将exports当做参数传给包装函数，这样给调用者提供了一些方便。（自己理解的，不知正确与否）
    如果要require()进来一个类，就赋值给module.exports对象。
    
   🍋 JSON模块的编译
  json文件的编译时最简单的，Node利用fs模块同步读取JSON文件的内容后，调用JSON.parse()方法得到对象，然后将它赋值给模块对象的exports，供外部调用
    
   🌲 性能优化：有时候使用JSON文件做项目的配置文件时，我们会用fs去异步读取和解析，其实不必，直接调用require()引入，省去了异步读取和解析的麻烦，而且还能缓存，二次引入时不会对性能产生影响。
  
      
      
#### 🍊 2.2.1.4  缓存优先原则
  🍋 如果某文件模块之前加载过，Node会将其缓存起来（是缓存到内存中吗？？？）
  
  🍋 读取优先级：
  > 缓存核心模块>缓存文件模块>核心模块>文件模块
  
  
### 🍎 2.2.2 核心模块加载
Node的**核心模块**在编译成可执行文件的过程中被编译进了二进制文件。核心模块其实分为C/C++编写的和JavaScript编写的，其中C/C++文件存放在Node项目的src目录下，JavaScript文件存放在lib目录下。

#### 🍊 2.2.2.1 JavaScript核心模块编译过程
在编译所有C/C++文件之前，编译程序需要将所有的JavaScript模块文件编译为C/C++代码（这时并非为可执行代码）

 🍋 转存为C/C++代码并存入内存
  Node采用的V8引擎会将所有内置的JavaScript代码转换成C++里的数组，生成node_natives.h头文件。在这个过程中，JavaScript代码一字符串的形式存储在node命名空间中。然后在启动Node进程时，JavaScript代码直接加载进内存中。所以加载核心模块是从内存中加载的。
  
 🍋 编译JavaScript核心模块
  上面不是说核心模块转换成C/C++代码存到头文件里了吗，然后在在编译的时候将文件取出来缓存到NativeModule._cache对象上。（文件模块是缓存到Module._chche上。）
 
#### 🍊 2.2.2.2 C/C++核心模块编译过程
  这部分大概浏览了一下，看得不细致

在核心模块中，有些模块全部由C/C++编写，有的模块的核心部分由C/C++编写，再由JavaScript进行外部包装导出。
  > 内建模块：由纯C/C++编写的部分,他们通畅不被用户直接调用
  
  内建模块的优势在于：首先他们本身由C/C++编写，性能上优于脚本语言；其次，在进行文件编译时，他们被便以为二进制文件，一旦Node开始执行，他们被直接加载进内存中。无需进行标识符定位，文件定位，编译等过程。
  
#### 🍊 2.2.2.3 核心模块的引入流程
 大概浏览了一下
 

  
### 2.3 NPM与包
### 🍎 2.3.1 CommonJS包规范
CommonJS包规范由**包结构**和**包描述文件**两部分组成。
#### 🍊 2.3.1.1 包结构
    存档文件：即一个目录直接打包成.zip或tar.gz格式的文件，安装后解压还原为目录。
🍋 符合commonJS包规范的应该包含以下文件：
  🌲 package.json: 包描述文件
  
  🌲 bin: 用来存放可执行二进制文件的目录
  
  🌲 lib: 用来存放JavaScript代码的目录
  
  🌲 doc: 用于存放文档的目录
  
  🌲 test: 用于存放单元测试用例的代码

  
  
  
  

## 创建模块
代码位置： [vue-and-node-test/src/tryNode/module/useModule.js](../tryNode/module/useModule.js)

## 服务端的模块放在哪里
比如 http 这个Node.js 自带的模块

所以这里有两中模块，我们自己写的叫文件模块， 而像http这样子node自带的叫做原生模块。当require一个模块时，node会在内部进行区分是文件模块还是原生模块，进而分别进行加载和缓存

#### 优先加载原生模块还是文件模块，看图：
<img src="../tryNode/module/nodejs-require.jpg"/> 

### 详细的文档加载问题还得看文档

