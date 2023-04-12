const { TYPES } = require('../contants');

const supportCompTypes = [TYPES.view, TYPES.function, TYPES.class];
const supportPropTypes = [
  'array',
  'bigint',
  'bool',
  'func',
  'number',
  'object',
  'string',
  'symbol',
  'node',
  'element',
  'elementType',
  'any',
];
const supportImportTypes = ['named', 'default'];

const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const schema = {
  definitions: {
    props: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string' },
          type: {
            anyOf: [
              { type: 'string', enum: supportPropTypes },
              {
                type: 'array',
                items: { type: 'string', enum: supportPropTypes },
              },
            ],
          },
          isRequired: { type: 'boolean' },
        },
        required: ['key', 'type'],
      },
    },
    libs: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                importType: { type: 'string', enum: supportImportTypes },
              },
              required: ['name', 'importType'],
            },
          },
        },
        required: ['name', 'items'],
      },
    },
    components: {
      type: 'object',
      properties: {
        name: { type: 'string', pattern: '[A-Z].*' },
        type: { type: 'string', enum: supportCompTypes },
        props: { $ref: '#/definitions/props' },
        components: {
          type: 'array',
          items: { $ref: '#/definitions/components' },
        },
        libs: { $ref: '#/definitions/libs' },
      },
      required: ['name', 'type'],
    },
  },

  $ref: '#/definitions/components',
};

const validate = ajv.compile(schema);

module.exports = validate;
