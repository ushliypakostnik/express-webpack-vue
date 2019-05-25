import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import WebpackConfig from '../../webpack/webpack.dev.config.js';
import config from '../config.js';

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: WebpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
});

app.listen(config.PORT, () => {
    console.log(`App listening to ${config.PORT}....`)
    console.log('Press Ctrl+C to quit.')
});
