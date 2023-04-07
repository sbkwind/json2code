const { info, warn, error } = require('npmlog');
const logger = {
  info(msg) {
    info('j2c', msg);
  },
  warn(msg) {
    warn('j2c', msg);
  },
  error(msg) {
    error('j2c', msg);
  },
};

module.exports = logger;
