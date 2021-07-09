const {createProxyMiddleware} = require('http-proxy-middleware')
const baseUrl = 'http://10.211.55.3'
// 最简单的形式

module.exports = function (app) {
    app.use(createProxyMiddleware('/file_upload', {
        target: baseUrl+':80',
        changeOrigin: false
    })),
    app.use(createProxyMiddleware('/SegVideo', {
        target: baseUrl+':80',
        changeOrigin: false
    })),
    app.use(createProxyMiddleware('/dingbiao', {
        target: baseUrl+':80',
        changeOrigin: false
    })),
    app.use(createProxyMiddleware('/lightStream', {
        target: baseUrl+':80',
        changeOrigin: false
    }))

}