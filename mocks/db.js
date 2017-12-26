'use strict';

const { join, parse, relative, sep: pathSeparator } = require('path');
const { sync: requireGlob } = require('require-glob');

const api = 'api';
const files = '**/*.json';
const namespaceSeparator = '.';
const slash = '/';

function replace(string, value, newValue) {
  return string.split(value).filter(Boolean).join(newValue);
}

function normalizePath(file) {
  return replace(relative(file.base, file.path), pathSeparator, slash);
}

function getPath(file) {
  const { dir, name } = parse(normalizePath(file));
  return name === dir ? name : (dir && dir + slash) + name;
}

function reducer(options, result, file) {
  result[replace(getPath(file), slash, namespaceSeparator)] = file.exports;
  return result;
}

module.exports = function db() {
  return requireGlob(files, { cwd: join(__dirname, api), reducer });
};
