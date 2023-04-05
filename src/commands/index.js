const { Command } = require('commander');
const { getConfig, setConfig, deleteConfig, resetConfig } = require('./config');

function registerConfigCmd(program) {
  const cmd = program.command('config');
  cmd.command('get').argument('[keys...]').action(getConfig);
  cmd.command('set').argument('[entries...]').action(setConfig);
  cmd.command('delete').argument('[keys...]').action(deleteConfig);
  cmd.command('reset').argument('[keys...]').action(resetConfig);
}

function registerCommand() {
  const program = new Command('j2c');
  registerConfigCmd(program);
  program.parse(process.argv);
}

module.exports = registerCommand;
