/**
 * Created by GXD on 2017/11/21.
 *
 */
var Readable = require('stream').Readable
var Writable = require('stream').Writable
var readStream = new Readable()
var writeStream = new Writable()
readStream.push('I')
readStream.push('love')
readStream.push('you\n')
readStream.push(null)

writeStream._write = (chunk, encode, cb) => {
  console.log(chunk.toString())
  cb()
}
readStream.pipe(writeStream)
