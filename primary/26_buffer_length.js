const buf= Buffer.from('This is a test');
//申请的空间大小
console.log(buf.length);
console.log(buf.toString());
console.log(buf.toString('base64'));

const buf2 = Buffer.allocUnsafe(10)
console.log(buf2);
console.log(buf2.fill(3, 2, 5));//3:填充内容，2：开始下标

console.log(buf.equals(buf2));
console.log(buf.indexOf('is'));





