//this refers to current context

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
//in browser ....console.....this shows window.


// function chai(){
//     let username = "amrit"
//     console.log(this)//if we do (this.username) then it will print undefined.   
// }
// chai()

//this works only in objects not in function

// const chai =  function(){
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

//console.log(addTwo(3,4))

const addTwo = (num1,num2)=> (num1 + num2)//can use implicit return without applying curly brackets 
console.log(addTwo(3,4))

//to return object----wrap it in curly brackets
//const addTwo = (num1,num2)=> ({username : "amrit"})

