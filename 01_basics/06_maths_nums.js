const score = 400
console.log(score); 

const balance = new Number(100)//new creates object typed variable.
console.log(balance);

console.log(balance.toString().length)// now we can use string prototypes too
console.log(balance.toFixed(2)) //to give precision(decimal) to number value 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))//round off the number to given value precision


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// to localise the string based on region

//******************************************************maths/*************** */

console.log(Math)
console.log(Math.abs(-4))//convert -ve value to +ve value i.e absolute
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(5.6))
console.log(Math.min(2,5,8,4))
console.log(Math.max(2,4,5,1))

console.log(Math.random())// generates random value between 0 and 1
console.log((Math.random() * 10) + 1 )//this is done to get value greater than 0 and avoiding deafult range.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // to generate number btw a given range.
