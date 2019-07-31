const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'app_bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    host: 'localhost',
    port: 5000,
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx|js?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      path: path.join(__dirname, './dist'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@base': path.resolve(__dirname, 'src/public'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@validations': path.resolve(__dirname, 'src/validations'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@middleware': path.resolve(__dirname, 'src/middleware'),
    },
  },
};
