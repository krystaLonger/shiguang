module.exports = {
    devServer: {
        open: true, // 默认开启浏览器
        port: 8000, // 更改默认端口号为8000
        overlay: { // 遮罩层
            warnings: false,
            errors: false
        },
        proxy: { // 代理
            '/Service': {
                target: 'https://m.mtime.cn',
                changeOrigin: true
                    // pathRewrite:{
                    //   "^/info":""
                    // },

            },
            '/api': {
                target: 'https://ticket-m.mtime.cn',
                changeOrigin: true
            }
        }
    },
    lintOnSave: false, // 直接关闭eslint检查
    configureWebpack: {
        resolve: {
            alias: {
                assets: '@/assets',
                con: '@/components',
                views: '@/views'
            }
        }
    }
}