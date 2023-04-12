const path = require('path');
const { getConfig, getDefaultConfig } = require('../../configStore');
const writeFile = require('../../generator');
const { validateJSON, logger } = require('../../utils');

module.exports = function action(options) {
  const userConfig = { ...getDefaultConfig(), ...getConfig(), ...options };
  const userConfigFile = path.join(process.cwd(), userConfig.configFile);
  const userData = require(userConfigFile);
  const valid = validateJSON(userData);
  if (!valid) {
    const { errors } = validateJSON;
    logger.error('config file is not valide!!\n');
    for (let err of errors) {
      logger.error(`message: ${err.message}`);
      logger.error(`path: ${err.instancePath}`);
      logger.error(err.params);
      console.log('\n');
    }
    process.exit(1);
  }
  writeFile(userData, userConfig);
};
