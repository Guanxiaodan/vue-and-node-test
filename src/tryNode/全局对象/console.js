/**
 * Created by GXD on 2017/12/20.
 * 关于console对象的方法
 */
console.log(__filename)


// 用的比较多的除了console.log，剩下的就是console.time了
console.time('getTime')
for(var i = 0; i < 10; i++ ) {
  console.log('循环中')
}
console.timeEnd('getTime') // 可以看出来运行这段循环代码用了3毫秒
