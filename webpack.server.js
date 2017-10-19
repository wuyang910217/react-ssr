const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              'stage-0',
              ['env', { targets: { browsers: ['last 2 versions'] } }]
            ]
          }
        }
      }
    ]
  }
};
