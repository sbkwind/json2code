import { setConfig } from '../../configStore/index.js';

const regExp = /^(.*?)=(.*)$/;
const name = 'set';

/**
 * @param {Array} data
 */
function action(data) {
  let index = 0;
  while (index < data.length) {
    let key;
    let value;
    if (regExp.test(data[index])) {
      [, key, value] = data[index].match(regExp);
      index += 1;
    } else {
      key = data[index];
      value = data[index + 1];
      index += 2;
    }
    if (!!key && !!value) {
      setConfig(key, value);
    }
  }
}

export default {
  name,
  action,
};
