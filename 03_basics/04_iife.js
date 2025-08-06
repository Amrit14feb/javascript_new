//Immediately invoked function expression(IIFE)
//IIFE is used to prevent the function from getting polluted by the global variables and 
//execute the function on immediate basis.

(function chai(){
    console.log(`DB CONNECTED`);
})(); //to end this line we need to put semicolon in the end of iife

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('amrit');