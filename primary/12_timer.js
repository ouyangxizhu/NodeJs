setImmediate(() =>{//下一个队列最前，一般用这个
    console.log('setImmediate');
    
});

setTimeout(() => {//两个中间
    console.log('setTimeout')
}, 0);

process.nextTick(() =>{
    //放在当前队列最后，如果这个在里面有一些循环什么的，这一步时间很长，没办法做别的
    console.log('nextTick');
    
});