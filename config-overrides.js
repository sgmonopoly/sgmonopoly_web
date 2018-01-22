const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  //自动加载antd样式,并可以直接引用antd组件
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
};