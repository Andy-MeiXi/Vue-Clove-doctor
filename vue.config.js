const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
        '/api': {
            target: 'http://apis.juhe.cn',//聚合接口地址
            ws: true,
            changeOrigin: true,
            pathRewrite:{//重写路径
                '^/api':''
            }
        },
        // 360接口
        '/foo':{
            target:'https://bang.360.cn',
            ws:true,
            changeOrigin:true,
            pathRewrite:{   //重写路径
                '^/foo':''
            }
        }
    },
}
})


