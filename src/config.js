require('dotenv').config();

const env = process.env.NODE_ENV;

const development = {
  PORT: process.env.PORT || 8080,
  MEDIA_URL: process.env.MEDIA_URL || 'http://127.0.0.1:8080',
  DIST_DIR: __dirname,
  STATIC_SERVE: false,
};

const production = {
  PORT: process.env.PORT || 8080,
  MEDIA_URL: process.env.MEDIA_URL || 'http://',
  DIST_DIR: process.env.DIST_DIR || __dirname,
  STATIC_SERVE: process.env.STATIC_SERVE || true,
};

const config = {
  development,
  production,
};

export default config[env];
