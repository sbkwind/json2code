const buildData = require('./buildData.js');
const generateCode = require('./generateCode.js');
const fse = require('fs-extra');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');

function writeFile(input, config) {
  const data = buildData(input);
  data.forEach((item) => {
    const filePath = path.join(
      process.cwd(),
      item.type === 'view' ? './index.js' : `./components/${item.name}.js`
    );
    const spinner = ora({
      spinner: 'clock',
      text: `now is creating ${chalk.cyan.bold(filePath)}.`,
    }).start();
    const code = generateCode(item, config);
    fse.ensureDirSync(path.dirname(filePath));
    fse.writeFileSync(filePath, code);
    spinner.succeed(`${chalk.cyan.bold(filePath)} is created successfully!!`);
  });
}

module.exports = writeFile;
