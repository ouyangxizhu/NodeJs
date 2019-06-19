const fs = require('fs');
//一点点给的
const rs = fs.createReadStream('./41_readstream.js');

rs.pipe(process.stdout);