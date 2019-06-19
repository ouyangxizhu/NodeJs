const {basename, dirname, extname} = require('path');

const filename = '/usr/local/bin/no.txt';

console.log(basename(filename));
console.log(dirname(filename));
console.log(extname(filename));