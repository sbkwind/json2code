// const path = require('path');
const { getConfig, getDefaultConfig } = require('../../configStore');
const { buildData, generateCode } = require('../../core');

module.exports = function action(options) {
  const userConfig = { ...getDefaultConfig(), ...getConfig(), ...options };
  // const configFilePath = path.join(process.cwd(), userConfig.configFile);
  const userConfigFile = './test.js';
  const userData = require(userConfigFile);
  const data = buildData(userData);
  data.forEach((item) => {
    const code = generateCode(item, userConfig);
    console.log(code);
  });
};
