#!/usr/bin/env node
import { Command } from 'commander';
import {
  getCmd,
  setCmd,
  deleteCmd,
  restoreCmd,
} from './commands/config/index.js';
import './commands/create/index.js';

const program = new Command('j2c');

const configCmd = program.command('config');

configCmd.command(getCmd.name).argument('[keys...]').action(getCmd.action);
configCmd.command(setCmd.name).argument('<entries...>').action(setCmd.action);
configCmd
  .command(deleteCmd.name)
  .argument('<keys...>')
  .action(deleteCmd.action);
configCmd.command(restoreCmd.name).action(restoreCmd.action);

// const createCmd = program.command('create');

// createCmd.action();

program.parse(process.argv);
