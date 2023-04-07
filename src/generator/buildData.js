const { TYPES } = require('../contants');

/**
 * @param {Object} input
 * @param {Object} config
 * @returns {Array}
 */
module.exports = function buildData(input, config) {
  const data = [];
  const queue = [];
  const allComponents = [];
  queue.push(input);
  while (queue.length !== 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const item = queue.shift();
      data.push(buildComponentData(item, config));
      if (Array.isArray(item.components)) {
        queue.push(...item.components);
      }
      if (item.type !== TYPES.view) {
        allComponents.push(item.name);
      }
    }
  }
  data.push({
    name: 'index',
    type: TYPES.index,
    components: allComponents,
  });
  return data;
};

function buildComponentData(input, config) {
  const data = {};
  data.name = input.name;
  data.type = input.type || config.type;
  data.props = [];
  data.defaultProps = [];
  data.components = [];
  data.libs = [];

  if (Array.isArray(input.props)) {
    input.props.forEach((prop) => {
      data.props.push({
        key: prop.key,
        type:
          typeof prop.type === 'undefined'
            ? ['any']
            : Array.isArray(prop.type)
            ? prop.type
            : Array.of(prop.type),
        isRequired: !!prop.isRequired,
      });
      if (typeof prop.default !== 'undefined') {
        data.defaultProps.push({
          key: prop.key,
          value: prop.default,
        });
      }
    });
  }

  if (Array.isArray(input.components)) {
    data.components = input.components.map((item) => item.name);
  }

  if (Array.isArray(input.libs)) {
    input.libs.forEach((lib) => {
      const defaultImport = [];
      const namedImport = [];
      lib.items.forEach((item) => {
        if (item.importType === 'default') {
          defaultImport.push(item.name);
        } else if (item.importType === 'named') {
          namedImport.push(item.name);
        }
      });
      data.libs.push({
        name: lib.name,
        defaultImport,
        namedImport,
      });
    });
  }

  return data;
}
