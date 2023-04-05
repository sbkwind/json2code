const { resetConfig } = require('../../configStore');

module.exports = function action(keys) {
  resetConfig(...keys);
};
