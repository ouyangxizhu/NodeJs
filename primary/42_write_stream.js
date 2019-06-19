const fs = require('fs');
//一点点给的
const ws = fs.createWriteStream('./text.txt');

const tid = setInterval(() =>{
    const num = parseInt(Math.random() * 10);
    console.log(num);
    
    if(num < 7){
        ws.write(num + '');
    }else{
        clearInterval(tid);
        ws.end();
    }
}, 200);

ws.on('finish', ()=>{
    console.log('done');
    
});