const { setConfig } = require('../../configStore');

const regExp = /^(.*?)=(.*)$/;

module.exports = function action(config) {
  if (config.length === 0) {
    return;
  }
  const data = {};
  const len = config.length;
  let index = 0;
  while (index < len) {
    let key;
    let value;
    if (regExp.test(config[index])) {
      [, key, value] = config[index].match(regExp);
      index += 1;
    } else {
      key = config[index];
      value = config[index + 1];
      index += 2;
    }
    if (!!key && !!value) {
      data[key] = value;
    }
  }
  setConfig(data);
};
