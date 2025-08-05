const user = {
    username : "amrit",
    price : "999",


WelcomeMessage : function(){
    console.log(`${this.username}, welcome to website`)
    console.log(this)
}
}
// user.WelcomeMessage()


// user.username = 'sam'
// user.WelcomeMessage()
console.log(this)// no global content for "this" is here therefore therefore shows empty parenthesis.


// function chai(){
//     let username = "amrit"
//     console.log(this)//if we do (this.username) then it will print undefined.   
// }
// chai()

// const chai =  fun0)ction(){
//      let username = "amrit"
//     console.log(this.username);
//}


const chai = () => {
    let username = "amrit"
    console.log(this);
}

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

console.log(addTwo(3,4))

const addTwo = (num1,num2)=> (num1 + num2)
console.log(addTwo(3,4))

