import { deleteConfig } from '../../configStore/index.js';

const name = 'delete';

/**
 * @param {Array} keys
 */
function action(keys) {
  keys.forEach((key) => {
    deleteConfig(key);
  });
}

export default {
  name,
  action,
};
