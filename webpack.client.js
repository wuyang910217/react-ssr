const path = require('path');

module.exports = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
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
