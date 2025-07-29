//singleton
//object.create

//object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Amrit",
    age: 18,
    [mysym] : "mykey1",
    location: "jaipur",
    email: "amk@gmail.com",
    isLoggedin:false,
    lastLoggedIn_days: ["monday","saturday"]
}
//console.log(jsUser.email)
//console.log(jsUser["email"])

//object.freeze(objectname)-----it doesn't let u make any changes in object

//console.log(typeof jsUser[mysym])
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello")
}
console.log(jsUser.greeting())

jsUser.greetingtwo = function(){
    console.log(`bye,${this.lastLoggedIn_days}`)
}
console.log(jsUser.greetingtwo())