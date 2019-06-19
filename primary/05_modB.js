module.exports.test = 'A';

const modA = require('./05_modA');

console.log('modB:', modA.test);
module.exports.test = 'BB';