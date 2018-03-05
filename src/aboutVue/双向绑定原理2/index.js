/**
 * Created by GXD on 2018/3/3.
 * 将observer2和watcher结合起来
 */
'use strict';
function SelfVue (data, el, exp) {
  this.data = data;
  observe(data); // 给data开启了监听
  el.innerHTML = this.data[exp]; // 初始化模板数据的值
  console.log('this应该指的对象吧', this)
  new Watcher(this, exp, function (value) {
    console.log('value是新值吗',value)
    el.innerHTML = value;
  })
  return this;
}
