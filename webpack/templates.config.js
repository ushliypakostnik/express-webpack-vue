const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const fs = require('fs');

const templatesDir = '../src/tmpl/pages';
const htmlDir = '../src/html';
const buildDir = '../build/html';

// Generating multiple Nunjucks templates with NunjucksWebpackPlugin
function generateNunjucksPlugin(dir) {
  // Read files in template directory
  const files = fs.readdirSync(path.resolve(__dirname, dir));
  const plugin = [];

  files.forEach((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    plugin.push({
      from: path.resolve(__dirname, `${dir}/${name}.${extension}`),
      to: path.resolve(__dirname, `${buildDir}/${name}.html`),
    });
  });

  // Create new NunjucksWebpackPlugin
  return new NunjucksWebpackPlugin({
    templates: plugin,
  });
}

// Generating multiple HTML special pages with HTMLWebpackPlugin
function generateHtmlPlugins(dir) {
  const files = fs.readdirSync(path.resolve(__dirname, dir));

  return files.map((item) => {
    const parts = item.split('.');
    const name = parts[0];

    // Create new HTMLWebpackPlugin with options
    return new HTMLWebpackPlugin({
      filename: `${buildDir}/${name}.html`,
      // no link css to special HTML files // xhtml: true, // selfclosed tag to link css
      inject: false,
      template: path.resolve(__dirname, `${dir}/${name}.html`),
    });
  });
}

const nunjucks = generateNunjucksPlugin(templatesDir);
const html = generateHtmlPlugins(htmlDir);

const templates = {
  nunjucks,
  html,
};

module.exports = templates;
