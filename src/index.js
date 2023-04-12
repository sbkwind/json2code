const { initConfigStore } = require('./configStore');
const registerCommand = require('./commands');

initConfigStore();

registerCommand();
