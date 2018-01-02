# Node.js文件系统
>文档位置: vue-and-node-test/src/tryNode/文件系统

Node文件系统中的模块方法均有同步和异步版本，例如读取文件内容的函数有同步（fs.readFileSync()）和异步（fs.readFile()）
异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息error

### 文件读取
例举了同步读取和异步读取

vue-and-node-test/src/tryNode/文件系统/fsRead.js

### 打开文件
不知什么原因这个没有执行成功，望大神解答

vue-and-node-test/src/tryNode/文件系统/fsOpen.js

### 获取文件信息
获取文件的相关信息，可以判断是文件还是目录等功能

vue-and-node-test/src/tryNode/文件系统/fsStat.js

### 写入文件
向一个文件中写入内容，但是新写入的内容会覆盖原有内容

vue-and-node-test/src/tryNode/文件系统/fsWrite.js

### 关闭文件
应该是和上面的打开文件是一对，我没做测试。自己感觉应该是带开了文件本身，就像我们双击了某个文件一样

### 截取文件
其实就是截取文件其中的一部分内容，具体细节待后面用的时候再研究

vue-and-node-test/src/tryNode/文件系统/fsCut.js

### 删除文件
就是删除了文件

vue-and-node-test/src/tryNode/文件系统/fsDelete.js

### 还有关于目录的创作，这里就不写了，得看文档了
