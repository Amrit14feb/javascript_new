let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toUTCString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 2023)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))











