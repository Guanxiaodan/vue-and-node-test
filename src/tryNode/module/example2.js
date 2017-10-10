/**
 * Created by GXD on 2017/10/10.
 *
 */
/**
 * 把 对象 封装到模块中
 * 当然了，Hello是个构造函数
 */

function Hello () {
  let name
  this.setName = (item) => {
    name = item
  }
  this.saySth = () => {
    console.log('Hello, my name is ' + name)
  }
}

module.exports = Hello
