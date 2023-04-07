const nunjucks = require('nunjucks');
const prettier = require('prettier');
const { RNTemplatePath, RNTemplateMap, macroPath } = require('../templates');

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader([RNTemplatePath, macroPath]),
  {
    trimBlocks: true,
    lstripBlocks: true,
  }
);

/**
 * @param {Object} data
 * @returns {String}
 */
function generateCode(data) {
  const code = env.render(RNTemplateMap[data.type], data);
  return prettier.format(code, { parser: 'babel' });
}

module.exports = generateCode;
