'use strict';

var webpack = require('webpack');
var etp = require('extract-text-webpack-plugin');
var LIB_NAME = 'react-tree';

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: __dirname + '/dist',
    filename: LIB_NAME + '.js',
    libraryTarget: "umd",
    library: 'Tree'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: etp.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: etp.extract('style-loader',
                            'css-loader!sass-loader?includePaths[]=' +
                            __dirname + '/src')
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }
    }),
    new etp(LIB_NAME + '.css', {
      allChunks: true
    })
  ]
};
