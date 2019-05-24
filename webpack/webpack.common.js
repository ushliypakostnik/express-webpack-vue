const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: Path.resolve(__dirname, '../src/tmpl/pages/sandbox_page.html'),
          to: Path.resolve(__dirname, '../src/html/sandbox_page.html')
        }
      ],
      configure: [{
        autoescape: true,
        watch: true
      }]
    }),
    new HtmlWebpackPlugin({
      filename: 'legacy.html',
      template: Path.resolve(__dirname, '../src/legacy.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'sandbox_page.html',
      template: Path.resolve(__dirname, '../src/html/sandbox_page.html')
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
      'Images': Path.resolve(__dirname, '../src/images'),
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src'
          }
        }
      },
    ]
  }
};
