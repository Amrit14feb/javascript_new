let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

const valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 

//conversions----=> used when u take input from user on a website then to operate over
//a particular type and the input is in another one....u can convert that.

//"33" => 33
//"33abc" => NaN
//undefined = NaN
//true =>1; false=>0
//null => 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)
console.log(typeof(booleanisLoggedIn))

//1->true 0->false
//"" --> false
//"amrit" -->true

let someNumber = 3
let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof(StringNumber))