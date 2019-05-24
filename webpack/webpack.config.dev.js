const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/styles.css'
    }),
    new ReplaceInFileWebpackPlugin([
      { dir: 'build/css', files: ['styles.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build/css', files: ['styles.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build/css', files: ['styles.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build/css', files: ['styles.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build', files: ['legacy.html'], rules: [{ search: '<link href="./css/styles.css" rel="stylesheet"></head>', replace: '' }]}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?sourceMap=true',
          'postcss-loader?sourceMap=true',
          'sass-loader?sourceMap=true'
        ]
      }
    ]
  }
});
