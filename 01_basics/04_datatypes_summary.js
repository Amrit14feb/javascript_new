// primitive datatypes\

//comes in call by value type
//7 types -> String, Number, Boolean, undefined, NULL, Symbol, BigInt.

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // "===" is used to compare two different or same datatypes.
console.log(id)
console.log(anotherId)

const BigInt = 326532875825783264868276n //to make a bigint put n at the end of number.

//Reference(Non primitive)
//Array, Objects, Functions

const heros = ["jagaman", "dokadoo", "pecman"]
let myObj = {
    name:"amrit",
    age : "19",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);