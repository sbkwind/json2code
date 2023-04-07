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
    logger.error('config file is not valide!!');
    process.exit(1);
  }
  writeFile(userData, userConfig);
};
