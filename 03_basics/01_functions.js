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


//when u want multiple entries and no info abt number of entries->then we use the rest operator 
function calculateArtPrice(...num1){//... is known as rest operator.
  return num1
}
console.log(calculateArtPrice(200,400,600))

//passing objects into functions
const user={
  name : "amrit",
  price : "900",
}

function handleObjects(anyobject){
  console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`)
}

handleObjects(user)

const mynewarray = [200,400,500,600]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue([200,900,500,800]))