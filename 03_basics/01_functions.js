// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(8,8)

function addTwoNumbers(number1,number2){
  return number1 + number2
}
const result = addTwoNumbers(3,5)
console.log("result",result);// if nothing is returned ..it's result would be undefined.


//if no value is passed then ---undefined 


function loginUserMessage(username){
    if(username == undefined){
        console.log("pleease enter your name")
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())