//singleton
const tinderuser =  new Object()

//const tinderuser = {}
//tinderuser.id = "123abc"
//tinderuser.age = 18
//tinderuser.name = "amrit"

console.log(tinderuser);
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        username: {
            firstname: "amrit",
            lastname : "mishra",
        }
    }
}
console.log(regularUser.fullname.username.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}


const obj3  = Object.assign(obj1,obj2)//in this obj1 is target and obj2 is source....so to 
//avoid this ....use blank curly brackets that would make new class of object and store 
//the other two data into it.....({},obj1,obj2).or u can use spread operator.
console.log(obj3)

//de-structuring objects.
const course = {
    coursename :"js",
    price:"999",
    courseInstructor : "amrit",
}

const{courseInstructor: instructor} = course
console.log(instructor)

//json api has format as below:
//apis are either in the array format or object format
//arrays and objects can be inside each other too
{
    "name" : "amrit",
    "frriendname" : "rishi",
    
}
