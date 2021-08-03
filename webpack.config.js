require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(s(a|c)ss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_UNSPLASH_KEY': JSON.stringify(process.env.REACT_APP_UNSPLASH_KEY),
      'process.env.NODE_ENV': JSON.stringify('development'),
    })],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
