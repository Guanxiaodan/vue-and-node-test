/**
 * Created by GXD on 2017/11/21.
 * 读文件，写文件
 */
var fs = require('fs')
var source = fs.readFileSync('../../../static/img/logo.png')
fs.writeFileSync('stream_copy_logo.png', source)

