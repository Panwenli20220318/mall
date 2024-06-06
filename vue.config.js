const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost', // 主机地址
    port: '8080', // 端口
    proxy: {
      '/api': {
        target: 'http://api-driver.marsview.cc/api/mall',  // 目标代理服务器地址
        changeOrigin: true, // 是否将主机头的原点更改为目标URL
        pathRewrite: {
          '/api': ''  // 路径重写规则，将`/api`替换为空字符串
        }
      }
    }
  }
}
)