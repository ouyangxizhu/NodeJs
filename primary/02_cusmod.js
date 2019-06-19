console.log('This is a module');

const testVar = 100;

function testFn(){
    console.log(testVar);
}


module.exports.testVar=testVar;
module.exports.testFn=testFn;