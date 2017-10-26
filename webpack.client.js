const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const config = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
  // plugins: [new BundleAnalyzerPlugin()]
};

module.exports = merge(baseConfig, config);
