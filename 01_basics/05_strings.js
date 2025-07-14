const name = "amrit"
const repoCount = 50

//console.log(name + repoCount + " value").........//old method for concatenating strings

console.log(`My name is ${name} and my repocount is ${repoCount}`) // known as string
//  interpolation --latest method.

const gameName = new String('amritttz')

console.log(gameName[0]);
console.log(gameName.__proto__) //syntax to access all prototypes of strings.

console.log(gameName.toUpperCase())
console.log(gameName.length)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4) //negative value allowwwwwweeeeeed
console.log(anotherString)

const newStringOne = "   amrit   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://amrit.mishra@lnm.com"
console.log(url.replace('mishra', '-'))
console.log(url.includes('amrit'))
console.log(gameName.split('-'));

// explore and read all strings prototypes from mdn