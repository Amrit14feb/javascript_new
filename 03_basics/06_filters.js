const myNums = [1, 2, 3, 4, 5, 6]

//for each doesn't return the value ...so we use filter map for same.

// const newnums = myNums.filter((item) => {
//     return item > 4
// })
// //remove curly brackets 
// console.log(newnums)

const newNums = []

myNums.forEach((num)=>{
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)

const mynums = [1, 2, 3, 4, 5, 6, 7 , 8]

//const newnums = mynums.map((num)=> num + 10)

//console.log(newnums)

const newnumS = mynums.map((num) => num * 10).map((num) => num + 1).filter((num) => num >=40)

console.log(newnumS)


