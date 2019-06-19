const fs = require('fs');

fs.readFile('./32_readfile.js', (err, data) =>{
    if(err) throw err;
    console.log(data.toString());
    
});


fs.readFile('./32_readfile.js', 'utf8', (err, data) =>{
    if(err) throw err;
    console.log(data.toString());
    
});
//仍然是先执行
const data = fs.readFileSync('./01_run.js','utf8');
console.log(data);
