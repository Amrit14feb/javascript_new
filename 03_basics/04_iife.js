//Immediately invoked function expression(IIFE)
//IIFE is used to prevent the function from getting polluted by the global variables and 
//execute the function on immediate basis.

(function chai(ko){
    console.log(`DB CONNECTED ${ko}`);
})('mishra'); //to end this line we need to put semicolon in the end of iife

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('amrit');