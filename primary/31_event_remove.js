const EventEmitter = require('events');

class CustomEvent extends EventEmitter{

}

const ce = new CustomEvent();

function fn1(){
    console.log('fn1');
    
}


function fn2(){
    console.log('fn2');
    
}

ce.on('test', fn1);
ce.on('test', fn2);

setInterval(() =>{
    ce.emit('test');
}, 500);

setTimeout(() => {
    ce.removeListener('test', fn2);
}, 1500);

setTimeout(() => {
    ce.removeAllListeners('test', fn2);
}, 3000);