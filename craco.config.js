const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = str => path.resolve(__dirname, str);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' } //自定义less变量
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components/'),
      utils: resolve('src/utils/')
    },
    configure: {}
  }
};
