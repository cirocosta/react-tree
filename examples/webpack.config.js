'use strict';

module.exports = {
  entry: './Main.jsx',
  output: {
    path: __dirname,
    filename: 'all.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};
