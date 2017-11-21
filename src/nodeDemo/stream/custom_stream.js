/**
 * Created by GXD on 2017/11/21.
 * 定制可读流，可写流，转换流，和内部接口
 */
var stream = require('stream')
var util = require('util')

// 可读流
function ReadStream () {
  stream.Readable.call(this)
}
util.inherits(ReadStream, stream.Readable)

ReadStream.prototype._read = function () {
  this.push('I')
  this.push('love')
  this.push('you\n')
  this.push(null)
}

// 可写流
function WriteStream () {
  stream.Writable.call(this)
  this._cache = new Buffer('')
}
util.inherits(WriteStream, stream.Writable)

WriteStream.prototype._write = (chunk, encode, cb) => {
  console.log(chunk.toString())
  cb()
}

// 转换流
function TransformStream () {
  stream.Transform.call(this)
}
util.inherits(TransformStream, stream.Transform)

TransformStream.prototype._transform = function (chunk, encode, cb) {
  this.push(chunk)
  cb()
}

TransformStream.prototype._flush = function (cb) {
  this.push('什么鬼？？完全不懂啊')
  cb()
}

var rs = new ReadStream()
var ws = new WriteStream()
var ts = new TransformStream()

rs.pipe(ts).pipe(ws)
