//默认用0填充
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(10,  1));
//未初始化，所以快，但是里面可能有内容
console.log(Buffer.allocUnsafe(10,  1));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test', 'base64'));
