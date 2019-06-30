const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/app.min.js',
  },
  mode: 'production', // process.env.NODE_ENV
  target: 'web',
  devtool: '#source-map',
  // Webpack 4 does not have a CSS minifier, although
  // Webpack 5 will likely come with one
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}), // disable to not min css
    ],
  },
  module: {
    rules: [
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        // Loads CSS and SCSS into a file when you import it via Javascript
        // Rules are set in MiniCssExtractPlugin
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // extract css to templates
    new MiniCssExtractPlugin({
      filename: 'css/styles.min.css',
    }),
    // new ReplaceInFileWebpackPlugin([
    //   { dir: 'build', files: [''], rules: [{ search: '', replace: '' }]}
    // ]),
  ],
});
