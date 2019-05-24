const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/styles.min.css',
      chunkFilename: '[id].css'
    }),
    new ReplaceInFileWebpackPlugin([
      { dir: 'build/css', files: ['styles.min.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build/css', files: ['styles.min.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build/css', files: ['styles.min.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build/css', files: ['styles.min.css'], rules: [{ search: 'url(fonts/custom-font/fontello', replace: 'url(../fonts/custom-font/fontello' }]},
      { dir: 'build', files: ['legacy.html'], rules: [{ search: '<link href="./css/styles.min.css" rel="stylesheet"></head>', replace: '' }]}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css/i,
        use : [
          MiniCssExtractPlugin.loader,
          'css-loader?sourceMap=true',
          'postcss-loader?sourceMap=true',
          'sass-loader?sourceMap=true'
        ]
      }
    ]
  },
});
