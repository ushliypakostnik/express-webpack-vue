import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import WebpackConfig from '../../webpack/webpack.dev.config';
import config from '../config';

const app = express();
const HTML_FILE = path.join(config.DIST_DIR, `html/${config.TEMPLATES.LOGIN}.html`);
const compiler = webpack(WebpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: WebpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    return res.end();
  });
});

app.listen(config.PORT, () => {
  console.log(`App listening to ${config.PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
