const myArr = [0,1,2,3,4,5]
const myHeroes = ["superman", "venom" , "dexter"]

const myArr2 = new Array(1,2,3,4)

//const myArr2 = new Array(3) ----> this creates an array of length 3. 
//console.log(myArr[1])

myArr.push(8)

myArr.push(9)
//console.log(myArr);

myArr.pop()
//console.log(myArr)

myArr.unshift(7)// it inserts value at the starting of array
//console.log(myArr);
myArr.shift() // it removes the first element of the array.
//console.log(myArr)

//console.log(myArr.includes(3))
//console.log(myArr.indexOf(5))

const newArr = myArr.join("-") //.join convert arrays into string datatype and if no separator 
// specified then comma is default
//console.log(newArr)

console.log("A",myArr)

const myn1 = myArr.slice(1,3)//slice copies the array and then performs not including final range
console.log(myn1)

const myn2 = myArr.splice(1,3)//splice make changes in existing array including the final range
console.log(myn2)

console.log("B",myArr)

