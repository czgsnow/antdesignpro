/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
// 这个地方是开发环境配置代理的地方，在开发环境下如果想连接线上服务器，会出现跨域的情况，umi内置了代理，可以在这个地方配置代理把接口转发到服务器，配置代理我们需要在配置文件声明代理字段，这个地方是把代理对象导入到配置文件目录下，然后在配置文件目录通过环境判断使用那个请求地址；
export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/api/': {
      // 要代理的地址
      target: 'https://preview.pro.ant.design',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
    },
  },
  test: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
