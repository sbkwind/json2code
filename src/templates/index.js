const path = require('path');
const { TYPES } = require('../contants');

const RNTemplateMap = {
  [TYPES.view]: 'view.njk',
  [TYPES.function]: 'function.njk',
  [TYPES.class]: 'class.njk',
  [TYPES.index]: 'componentIndex.njk',
};

module.exports = {
  RNTemplatePath: path.join(__dirname, './react-native'),
  RNTemplateMap,
  macroPath: path.join(__dirname, './macros'),
};
