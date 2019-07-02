require('dotenv').config();

const path = require('path');
const fs = require('fs');

const env = process.env.NODE_ENV;

const htmlDir = './html';
const TEMPLATES = fs.readdirSync(path.resolve(__dirname, htmlDir));

let pages = {};
TEMPLATES.forEach((template) => {
  const parts = template.split('.');
  const name = parts[0];
  pages = Object.assign({}, pages, {
    [name.toUpperCase()]: name,
  });
});

const common = {
  PORT: process.env.PORT || 8080,
  TEMPLATES: pages,
};

const development = {
  ...common,
  MEDIA_URL: process.env.MEDIA_URL || 'http://127.0.0.1:8080',
  DIST_DIR: __dirname,
  STATIC_SERVE: false,
};

const production = {
  ...common,
  MEDIA_URL: process.env.MEDIA_URL || 'http://',
  DIST_DIR: process.env.DIST_DIR || __dirname,
  STATIC_SERVE: process.env.STATIC_SERVE || true,
};

const config = {
  development,
  production,
};

export default config[env];
