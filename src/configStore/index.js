import Configstore from 'configstore';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import defaultConfig from './default.js';

const __dirname = path.normalize(path.dirname(fileURLToPath(import.meta.url)));

const configPath = path.join(__dirname, 'store.json');

const store = new Configstore('j2c', defaultConfig, { configPath });

export function getAllConfig() {
  return store.all;
}

export function getConfig(key) {
  return getAllConfig()[key];
}

export function setConfig(key, value) {
  store.set(key, value);
}

export function deleteConfig(key) {
  store.delete(key);
}

export function restoreConfig() {
  store.clear();
  store.set(defaultConfig);
}
