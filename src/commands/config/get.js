const { logger } = require('../../utils');
const { getConfig } = require('../../configStore');

module.exports = function action(keys) {
  const config = getConfig(...keys);
  Object.keys(config).forEach((key) => {
    logger.info(`${key}: ${config[key]}`);
  });
};
