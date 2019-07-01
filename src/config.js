require('dotenv').config();

const path = require('path');
const fs = require('fs');

const env = process.env.NODE_ENV;

const htmlDir = './html';
const TEMPLATES = fs.readdirSync(path.resolve(__dirname, htmlDir));

const common = {
  PORT: process.env.PORT || 8080,
  TEMPLATES,
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
