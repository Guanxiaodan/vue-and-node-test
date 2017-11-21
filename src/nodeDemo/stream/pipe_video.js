/**
 * Created by GXD on 2017/11/21.
 * 使用pipe传视频
 */
var fs = require('fs')
fs.createReadStream('../../../static/video/1102.mp4').pipe(fs.createWriteStream('./ptpe_video.mp4'))
