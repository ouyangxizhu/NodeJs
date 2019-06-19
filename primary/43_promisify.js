const fs = require('fs');
const {promisify} = require('util');

const read = promisify(fs.readFile);

read('./43_promisfy.js').then(data => {
    console.log(data.toString());
    
}).catch(ex =>{
    console.log(ex);
    
});

async function test(){
    try {
        const content = await read('./43_promisfy.js');
        console.log(content.toString());
        
    } catch (ex) {
        console.log(ex);
        
    }
}

test();