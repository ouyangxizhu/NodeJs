const {parse, format} = require('path');

const filename = '/usr/local/bin/no.txt';

console.log(parse(filename));

console.log(format(parse(filename)));
//比如只修改文件名，修改parse的name属性再format就很好用

