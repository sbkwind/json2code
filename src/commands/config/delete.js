const { deleteConfig } = require('../../configStore');

module.exports = function action(keys) {
  if (keys.length === 0) {
    return;
  }
  deleteConfig(...keys);
};
