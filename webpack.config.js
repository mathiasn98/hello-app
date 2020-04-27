const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {loader: 'html-loader'}
        }
    ]
  }
};