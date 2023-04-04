export const viewData = {
  name: 'XXXView',
  components: ['Header', 'Body', 'Footer'],
  libs: [
    {
      name: 'UI',
      namedImport: ['Search', 'Image'],
      defaultImport: [],
    },
    {
      name: 'UI/Button',
      namedImport: [],
      defaultImport: ['Button'],
    },
    {
      name: 'UI/Empty',
      namedImport: ['Empty'],
      defaultImport: [],
    },
    {
      name: 'UI/Modal',
      namedImport: ['SlideModal'],
      defaultImport: ['Modal'],
    },
  ],
};

export const functionData = {
  name: 'FunctionComponent',
  components: ['Header', 'Body', 'Footer'],
  props: [
    {
      key: 'propA',
      type: ['string'],
      isRequired: false,
    },
    {
      key: 'propB',
      type: ['string', 'bool', 'number'],
      isRequired: true,
    },
  ],
  defaultProps: [{ key: 'propA', value: '123' }],
  libs: [
    {
      name: 'UI',
      namedImport: ['Search', 'Image'],
      defaultImport: [],
    },
    {
      name: 'UI/Button',
      namedImport: [],
      defaultImport: ['Button'],
    },
    {
      name: 'UI/Empty',
      namedImport: ['Empty'],
      defaultImport: [],
    },
    {
      name: 'UI/Modal',
      namedImport: ['SlideModal'],
      defaultImport: ['Modal'],
    },
  ],
};

export const classData = {
  name: 'ClassComponent',
  components: ['Header', 'Body', 'Footer'],
  props: [
    {
      key: 'propA',
      type: ['string'],
      isRequired: false,
    },
    {
      key: 'propB',
      type: ['string', 'bool', 'number'],
      isRequired: true,
    },
  ],
  defaultProps: [{ key: 'propA', value: '123' }],
  libs: [
    {
      name: 'UI',
      namedImport: ['Search', 'Image'],
      defaultImport: [],
    },
    {
      name: 'UI/Button',
      namedImport: [],
      defaultImport: ['Button'],
    },
    {
      name: 'UI/Empty',
      namedImport: ['Empty'],
      defaultImport: [],
    },
    {
      name: 'UI/Modal',
      namedImport: ['SlideModal'],
      defaultImport: ['Modal'],
    },
  ],
};
