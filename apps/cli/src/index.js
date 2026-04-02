#!/usr/bin/env node

const { capitalize, camelCase } = require('@my-monorepo/utils');

const args = process.argv.slice(2);
const text = args.join(' ') || 'hello world';

console.log('Original:', text);
console.log('Capitalized:', capitalize(text));
console.log('CamelCase:', camelCase(text));
