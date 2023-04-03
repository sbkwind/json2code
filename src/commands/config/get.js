import log from 'npmlog';
import { getAllConfig, getConfig } from '../../configStore/index.js';

const name = 'get';

/**
 * @param {Array} keys
 */
function action(keys) {
  let config = {};
  if (keys.length === 0) {
    config = getAllConfig();
  } else {
    config = keys.reduce((data, key) => {
      data[key] = getConfig(key);
      return data;
    }, config);
  }
  Object.keys(config).forEach((key) => {
    log.info('j2c', `${key}: ${config[key]}`);
  });
}

export default {
  name,
  action,
};
