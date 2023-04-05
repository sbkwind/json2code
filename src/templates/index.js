const path = require('path');

const RNTemplateMap = {
  view: 'view.njk',
  function: 'function.njk',
  class: 'class.njk',
};

module.exports = {
  RNTemplatePath: path.join(__dirname, './react-native'),
  RNTemplateMap,
  macroPath: path.join(__dirname, './macros'),
};
