const mynums = [1, 2, 3]

// const myTotal = mynums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currvalue: ${currval}`);
//     return acc + currval
// },0)

const myTotal = mynums.reduce((acc,currval) => acc+currval, 0)

console.log(myTotal)