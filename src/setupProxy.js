const {createProxyMiddleware} = require('http-proxy-middleware')

// 最简单的形式

module.exports = function (app) {
    app.use(createProxyMiddleware('/file_upload', {
        target: 'http://202.112.147.176:9192',
        changeOrigin: false
    })),
    app.use(createProxyMiddleware('/SegVideo', {
        target: 'http://202.112.147.176:9192',
        changeOrigin: false
    }))

}