import path from 'path';
import express from 'express';
import config from '../config';

console.log(config.PORT);

const app = express();
const HTML_FILE = path.join(config.DIST_DIR, `html/${config.TEMPLATES.APP}.html`);

if (config.STATIC_SERVE) { app.use(express.static(config.DIST_DIR)); }

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

export default app;
