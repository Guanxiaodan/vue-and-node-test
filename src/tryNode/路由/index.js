/**
 * Created by GXD on 2017/12/20.
 *
 */
var server = require('./service')
var router = require('./router')

server.start(router.route)
