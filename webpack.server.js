const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // 服务器端不需要打包express，react等
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
