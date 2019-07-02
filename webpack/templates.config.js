const path = require('path');
const fs = require('fs');

const templatesDir = '../src/tmpl/pages';
const htmlDir = '../src/html';

// Generating multiple Nunjucks templates with NunjucksWebpackPlugin
function generateNunjucksConfig(dir) {
  const files = fs.readdirSync(path.resolve(__dirname, dir));
  const plugin = [];

  files.forEach((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    plugin.push({
      from: path.resolve(__dirname, `${dir}/${name}.${extension}`),
      to: path.resolve(__dirname, `${htmlDir}/${name}.html`),
    });
  });

  // Create new NunjucksWebpackPlugin
  return ({
    templates: plugin,
  });
}

// Generating multiple HTML special pages with HTMLWebpackPlugin
function generateHtmlConfig(dir) {
  const files = fs.readdirSync(path.resolve(__dirname, dir));
  const plugin = [];

  files.forEach((item) => {
    const parts = item.split('.');
    const name = parts[0];
    plugin.push(name);
  });

  // Create new HTMLWebpackPlugin with options
  return plugin;
}

const nunjucks = generateNunjucksConfig(templatesDir);
const html = generateHtmlConfig(htmlDir);

const templates = {
  nunjucks,
  html,
};

module.exports = templates;
