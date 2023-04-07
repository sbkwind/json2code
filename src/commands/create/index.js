const path = require('path');
const { getConfig, getDefaultConfig } = require('../../configStore');
const writeFile = require('../../generator');

module.exports = function action(options) {
  const userConfig = { ...getDefaultConfig(), ...getConfig(), ...options };
  const userConfigFile = path.join(process.cwd(), userConfig.configFile);
  const userData = require(userConfigFile);
  writeFile(userData, userConfig);
};
