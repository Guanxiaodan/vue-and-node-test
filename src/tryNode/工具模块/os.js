/**
 * Created by GXD on 2018/1/2.
 * os模块
 * 提供了一系列系统操作函数
 */

var os = require('os')

// CPU的字节序
console.log('endianness:', os.endianness())

// 操作系统名
console.log('操作系统名:', os.type())

// 操作系统运行平台
console.log('platform:', os.platform())

// 系统内存总量
console.log('系统内存总量:', os.totalmem())

// 操作系统空闲内存量
console.log('空闲内存:', os.freemem())


// 执行结果：
// endianness: LE
// 操作系统名: Darwin
// platform: darwin
// 系统内存总量: 8589934592
// 空闲内存: 506392576
