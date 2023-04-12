const { Command } = require('commander');
const { getConfig, setConfig, deleteConfig, resetConfig } = require('./config');
const cliCreate = require('./create');

function registerConfigCmd(program) {
  const cmd = program
    .command('config')
    .usage('[sub commands]')
    .description('Manage j2c configuration by using sub commands');
  cmd
    .command('get')
    .argument('[keys...]')
    .usage('[<key> <key> ...]')
    .description('Get j2c configuration by keys')
    .action(getConfig);
  cmd
    .command('set')
    .argument('[entries...]')
    .usage('[<key=value> <key=value> ...]')
    .description('Set j2c configuration')
    .action(setConfig);
  cmd
    .command('delete')
    .argument('[keys...]')
    .usage('[<key> <key> ...]')
    .description('Delete the specified property in the configuration')
    .action(deleteConfig);
  cmd
    .command('reset')
    .argument('[keys...]')
    .usage('[<key> <key> ...]')
    .description('Reset the specified property in the configuration')
    .action(resetConfig);
}

function registerCreateCmd(program) {
  program
    .command('create')
    .usage('create [options]')
    .option(
      '-c, --config <config>',
      'Specified configuration file name. Must be a `.js` or `.json` file.'
    )
    .option(
      '-t --type <type>',
      'Specified default component type. Must be `class` or `function`'
    )
    .description('Create files with the specified configuration')
    .action(cliCreate);
}

function registerCommand() {
  const program = new Command('j2c').usage('[command]');
  registerConfigCmd(program);
  registerCreateCmd(program);
  program.parse(process.argv);
}

module.exports = registerCommand;
