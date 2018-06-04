#!/usr/bin/env node
import program from 'commander';
import plain from '../lib/plain';

program
  .version('0.1.0')
  .arguments('<firstConfig>, <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig) => console.log(plain(firstConfig, secondConfig)));
program.parse(process.argv);

export default program;