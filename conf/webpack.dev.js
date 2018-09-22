const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});

// module.exports = {
//   plugins: [
//     new CleanWebpackPlugin(['dist']),
//     new HtmlWebpackPlugin({
//       title: 'Output Management'
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };