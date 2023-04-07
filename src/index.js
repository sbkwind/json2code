#!/usr/bin/env node
const { initConfigStore } = require('./configStore');
const registerCommand = require('./commands');

initConfigStore();

registerCommand();
