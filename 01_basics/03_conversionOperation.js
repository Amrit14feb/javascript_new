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

/**operations**/

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) // if string comes first then all converted to strings
console.log(1 + 2 + "2")// if number comes first then string converted to number

console.log(+true)
 
let num1, num2, num3;

num1 = num2 = num3 = 2 + 2

let gamecounter = 100
gamecounter++;
console.log(gamecounter)