let fs = require('fs')
let path = require('path')
let vm = require('vm') // 将字符串当做JavaScript执行

function req (path) {
  module._load(path) // 尝试加载模块
}

function Module () { // Module构造函数

}

// 返回一个完成的文件地址（路径）
Module._resolveFilename = function (path) {
  if ((/\.js$|\.json$/).test(path)) { // 有后缀且以js或json结尾
    return path.resolve(__dirname, path) // 返回绝对路径，完整的文件地址
  } else { // 如果没有后缀，或者是以其他后缀结尾的,自动拼接后缀
    let exts = Object.keys(Module._extensions) // 返回一个key的数组
    let realPath
    for (let i = 0; i < exts.length; i++) {
      let temp = path.resolve(__dirname, path + exts[i]) // 一个个试，拼一个完整路径，在下面匹配文件夹中是否存在这个文件
      try {
        fs.accessSync(temp) // 匹配是否有该文件
        realPath = temp // 有此文件，就将路径赋值给realPath
        break
      } catch (e) { // 匹配文件失败

      }
    }
    if (!realPath) {
      throw new Error('module not exists')
    }
    return realPath
  }
}

// 包装原理：
Module.wrap = function (script) {
  return Module.wrapper[0] + script + Module.wrapper[1]
}
Module.wrapper = [
  '(function(exports,require,module,__filename,__dirname){',
  '\n})'
]

// 一个包含各种后缀名的对象
Module._extensions = {
  '.js': function (module) {
    let content = fs.readFileSync(module.id, 'utf8') // 获取到文件的内容
    let funcStr = Module.wrap(content) // 给文件内容外面包一层自执行函数
    let fn = vm.runInThisContext(funcStr) // 相当于在一个全新的环境中执行代码，不会影响到当前作用域的对象
    fn.call(module.exports, module.exports, req, module)
  },
  '.json': function (module) {
    module.exports = JSON.parse(fs.readFileSync(module.id, 'utf8'))
  },
  '.css': function () {}
}

Module._cache = {}

// 加载模块，导出module.exports
Module._load = function (path) { // 相对路径，文件的后缀可有可无，但如果有后缀，性能会好些。
  let fileName = Module._resolveFilename(path) // 获取到完整的绝对路径。
  let cache = Module._cache(fileName) // 查看有没有该文件的缓存
  if (cache) { // 有缓存
    return cache.exports
  }

  let module = new Module(fileName) // 没有模块就创建模块？？？？
  Module._cache[fileName] = module // 把模块添加到缓存

  // 尝试加载模块
  tryModuleLoad(module)

  // 导出module.exports
  return module.exports
}

//
function tryModuleLoad (module) {
  let ext = path.extname(module.id) // path.extname可以获取到扩展名
  Module._extensions[ext](module) // 执行后缀对象对应的后面的函数，并传入参数
}

