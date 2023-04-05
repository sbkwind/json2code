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
 * 描述
 * @param {Object} data
 * @param {Object} config
 * @returns {String}
 */
function generateCode(data, config) {
  const type = data.type || config.type;
  const code = env.render(RNTemplateMap[type], data);
  return prettier.format(code, { parser: 'babel' });
}

module.exports = generateCode;
