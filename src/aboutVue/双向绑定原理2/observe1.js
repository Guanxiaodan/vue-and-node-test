/**
 * Created by GXD on 2018/3/3.
 * 最基础版本的监听者（发布者）
 */

// data是个对象，key是键， val是值
// 我们这个defineReactive函数一次只处理一条键值对
function defineReactive (data, key, val) {
  console.log('被调用了')
  // 这里的作用是递归遍历对象。比如说{name:'guan',study:{school:'sxau',classes:'gis1102'}},这样子就遍历第二层对象stydy，指导遍历到没有嵌套的对象了为止
  observe(val);
  Object.defineProperty(data,key,{
    enumerable: true, // 遍历data时候key是否可枚举
    configurable: true, // key的值是否可改变
    get: function () { // 需要使用key的值时候就会调用get函数
      return val;
    },
    set: function (newVal) { // 给key设置值的时候会调用set函数
      console.log('set值被调用了')
      val = newVal;
      console.log('属性'+key+'已经被监听了，现在值为：'+newVal.toString());
    }

  })

}

// 遍历data里的键值对，传给defineReactive
function observe (data) {
  if(!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(function (key) {
    //这个key就是data对象里面的每一个键
    defineReactive(data, key, data[key]);
  })
}

// 先将data准备好
var library = {
  book1:{
    name: ''
  },
  book2: ''
};

observe(library); // 这个时候set函数并没有被调用，但是已经处于待命状态了
library.book1.name = '白夜行'; // set监听到了变化，调用了set函数
library.book2 = '没有书籍'; // set监听到了变化，调用了set函数
