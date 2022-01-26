const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './build/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  target: 'node',
  node: {
    global: true,
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
