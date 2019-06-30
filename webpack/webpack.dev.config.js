const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js'],
  },
  output: {
    filename: 'js/app.js',
  },
  mode: 'development', // process.env.NODE_ENV
  target: 'web',
  devtool: '#source-map',
  module: {
    rules: [
      // Single File Components
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        },
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        // styles on css и scss, autoprefix
        test: /\.s?css$/i,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./src/styles/_stylebase.scss";',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    // HotReload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // Stylelint
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src/styles',
      files: ['**/*.css', '**/*.scss'],
      failOnError: false,
      syntax: 'scss',
    }),
  ],
});
