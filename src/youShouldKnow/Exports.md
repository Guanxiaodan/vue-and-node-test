# 傻傻分不清楚Export和Module.exports?分不清import和require

##首先明确一下对应关系
①：module.exports、exports ----> require (Commenjs 语法Node)

②：export ----> import (ES6语法)


## 其实
> module.exports     exports

module.exports是比较早的写法，是node文件自带的属性：
```apple js
module.exports = {};
```

使用的时候是这样的：
```apple js
// a.js
module.exports = {
  a:function() {
    console.log(123);
  },
  b: 'hello'
}
```

```apple js
// b.js
var t = require('./a.js');
t.a();
console.log(t.b);
```

后来出现了exports，其实，exports是这样：
```apple js
// 相当于将module.exports赋值给了exports
exports = module.exports
```

> export    export default

再后来，出现了export

定义：
```apple js
//testEs6Export.js
'use strict'
//导出变量
export const a = '100';  

 //导出方法
export const dogSay = function(){ 
    console.log('wang wang');
}

 //导出方法第二种
function catSay(){
   console.log('miao miao'); 
}
export { catSay };

//export default导出
const m = 100;
export default m; 
//export defult const m = 100;// 这里不能写这种格式。
```

使用：
```apple js
//index.js
'use strict'
var express = require('express');
var router = express.Router();

import { dogSay, catSay } from './testEs6Export'; //导出了 export 方法 
import m from './testEs6Export';  //导出了 export default 

import * as testModule from './testEs6Export'; //as 集合成对象导出



/* GET home page. */
router.get('/', function(req, res, next) {
  dogSay();
  catSay();
  console.log(m);
  testModule.dogSay();
  console.log(testModule.m); // undefined , 因为  as 导出是 把 零散的 export 聚集在一起作为一个对象，而export default 是导出为 default属性。
  console.log(testModule.default); // 100
  res.send('恭喜你，成功验证');
});

module.exports = router;

```

