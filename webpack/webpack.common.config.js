const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const templates = require('./templates.config.js');

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // Transpiles ES6-8 into ES5
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file)
          && !/\.vue\.js/.test(file)
        ),
      },
      {
        // images and fonts
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src',
          },
        },
      },
    ],
  },
  plugins: [
    // Vue
    new VueLoaderPlugin(),
  ].concat(templates.nunjucks).concat(templates.html),
  // Multiple generating Nunjucks templates and HTML files
};
