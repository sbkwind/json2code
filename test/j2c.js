module.exports = {
  name: 'XXXPage',
  type: 'view',
  components: [
    {
      name: 'Header',
      type: 'function',
      props: [
        {
          key: 'title',
          type: 'string',
          isRequired: true,
        },
      ],
      components: [
        {
          name: 'Title',
          type: 'class',
          props: [
            {
              key: 'title',
              default: 'card Title',
            },
            {
              key: 'subTitle',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'Body',
      type: 'class',
      props: [
        {
          key: 'title',
          type: 'string',
          isRequired: true,
          default: 'body title',
        },
        {
          key: 'oneOfProp',
          type: ['string', 'number', 'bool'],
        },
      ],
      libs: [
        {
          name: 'moment',
          items: [
            {
              name: 'Moment',
              importType: 'default',
            },
          ],
        },
        {
          name: 'element',
          items: [
            {
              name: 'Button',
              importType: 'named',
            },
            {
              name: 'Menu',
              importType: 'named',
            },
          ],
        },
        {
          name: 'projectDefined',
          items: [
            {
              name: 'defaultImport',
              importType: 'default',
            },
            {
              name: 'namedImport1',
              importType: 'named',
            },
            {
              name: 'namedImport2',
              importType: 'named',
            },
          ],
        },
      ],
    },
    {
      name: 'Footer',
      type: 'function',
      components: [
        {
          name: 'About',
          type: 'function',
        },
        {
          name: 'ConnectUs',
          type: 'function',
        },
      ],
    },
  ],
};
