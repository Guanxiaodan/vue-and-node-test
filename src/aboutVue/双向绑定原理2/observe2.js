/**
 * Created by GXD on 2018/3/3.
 * 可添加多个订阅者的监听者（发布者）
 *
 * get里面的if判断是个啥，
 * 通知更新的notify函数里面的update是在哪里定义的？？？
 */

// data是个对象，key是键， val是值

function defineReactive (data, key, val) {
  console.log('被调用了')
  // 这里的作用是递归遍历对象。比如说{name:'guan',study:{school:'sxau',classes:'gis1102'}},这样子就遍历第二层对象stydy，指导遍历到没有嵌套的对象了为止
  observe(val);
  var dep = new Dep();
  Object.defineProperty(data,key,{
    enumerable: true, // 遍历data时候key是否可枚举
    configurable: true, // key的值是否可改变
    get: function () { // 需要使用key的值时候就会调用get函数
      if (Dep.target) { // 是否需要添加订阅者
        console.log('进来这里了吗', Dep.target)
        dep.addSub(Dep.target); // 在这里添加一个订阅者
      }
      return val;
    },
    set: function (newVal) { // 给key设置值的时候会调用set函数,不要问我newVal从哪里来，set监听到值变化以后调用时自然会给newVal值
      console.log('set值被调用了')
      if(val === newVal){
        return;
      };
      val = newVal;
      console.log('属性'+key+'已经被监听了，现在值为：'+newVal.toString());
      // 值改变了之后通知所有订阅者
      dep.notify();
    }

  })

}

Dep.target = null;

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

function Dep () {
  this.subs = []; //这是构造函数，这里是给实例对象一个subs的属性
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update();
    })
  }
}

