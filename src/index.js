#!/usr/bin/env node
const { initConfigStore } = require('./configStore');
const registerCommand = require('./commands');

initConfigStore();

registerCommand();

// configCmd.command('set').argument('<entries...>').action(setAction);
// configCmd.command('delete').argument('<keys...>').action(deleteAction);
// configCmd.command('restore').action(restoreAction);
