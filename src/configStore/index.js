const fse = require('fs-extra');
const path = require('path');
const { logger } = require('../utils.js');
const defaultConfig = require('./default.js');

const CONIFG_STORE_FILE_NAME = '__user_preference_config__.json';
const CONFIG_STORE_PATH = path.join(__dirname, CONIFG_STORE_FILE_NAME);

function getStore() {
  try {
    return fse.readJsonSync(CONFIG_STORE_PATH, { throws: true });
  } catch (error) {
    if (error.code === 'EACCES' || error.code === 'EPERM') {
      logger.error(
        'The j2c CLI needs read access to the configuration file to save user preferences.'
      );
      logger.error('But access to the configuration file was denied.');
      logger.error(`Configuration file: ${CONFIG_STORE_PATH}.`);
      process.exit(1);
    }
  }
}

function setStore(value) {
  try {
    fse.writeJsonSync(CONFIG_STORE_PATH, value);
  } catch (error) {
    if (error.code === 'EACCES' || error.code === 'EPERM') {
      logger.error(
        'The j2c CLI needs write access to the configuration file to save user preferences.'
      );
      logger.error('But access to the configuration file was denied.');
      logger.error(`Configuration file: ${CONFIG_STORE_PATH}.`);
      process.exit(1);
    }
  }
}

function initConfigStore() {
  if (!fse.existsSync(CONFIG_STORE_PATH)) {
    setStore(defaultConfig);
  }
}

function getConfig(...keys) {
  const store = getStore();
  if (keys.length === 0) {
    return store;
  }
  return keys.reduce((ret, key) => {
    ret[key] = store[key];
    return ret;
  }, {});
}

function setConfig(data) {
  const store = getStore();
  setStore({ ...store, ...data });
}

function deleteConfig(...keys) {
  const store = getStore();
  keys.forEach((key) => {
    delete store[key];
  });
  setStore(store);
}

function resetConfig(...keys) {
  if (keys.length === 0) {
    setStore(defaultConfig);
  }
  const store = getStore();
  keys.forEach((key) => {
    if (typeof defaultConfig[key] !== 'undefined') {
      store[key] = defaultConfig[key];
    } else {
      delete store[key];
    }
  });
  setStore(store);
}

module.exports = {
  initConfigStore,
  getConfig,
  setConfig,
  deleteConfig,
  resetConfig,
};
