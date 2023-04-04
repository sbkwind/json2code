import nunjucks from 'nunjucks';
import prettier from 'prettier';
import { RNTemplates, common } from './tempPath.js';

// eslint-disable-next-line no-unused-vars
import { viewData, functionData, classData } from './test.js';

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader([RNTemplates, common]),
  {
    trimBlocks: true,
    lstripBlocks: true,
  }
);

const code = env.render('class.njk', classData);

console.log(prettier.format(code, { parser: 'babel' }));
