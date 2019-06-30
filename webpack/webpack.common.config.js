const path = require('path');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
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
    // templates
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: path.resolve(__dirname, '../src/tmpl/pages/sandbox_page.html'),
          to: path.resolve(__dirname, '../src/html/sandbox_page.html'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'html/legacy.html',
      inject: false, // no link css
      template: path.resolve(__dirname, '../src/html/legacy.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'html/sandbox_page.html',
      xhtml: true, // selfclosed tag to link css
      template: path.resolve(__dirname, '../src/html/sandbox_page.html'),
    }),
  ],
};
