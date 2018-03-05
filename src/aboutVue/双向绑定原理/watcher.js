/**
 * Created by GXD on 2018/3/3.
 * 订阅者
 */
'use strict';
// vm就是要处理的对象，exp是键

function Watcher (vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get(); //将自己添加到订阅器的操作
}

Watcher.prototype = {
  get:function () {
    console.log('什么玩意', this);
    Dep.target = this; // this是一个Watcher对象
    var value = this.vm.data[this.exp]; // 强行执行监听器里的get函数
    Dep.target = null; // 释放自己
    return value;
  },
  run: function () {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm,value,oldVal);
    }
  },
  update: function () {
    this.run();
  },
}
