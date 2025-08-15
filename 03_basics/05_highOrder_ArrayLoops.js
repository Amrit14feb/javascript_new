//for of 

//[" ", " ", " "]
//[{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

const greetings = "Hello everyone";
for (const greet of greetings) {
    console.log(`the charachters of greeting are ${greet}`)
}

//Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('UAE', "UNITED ARAB EMIRATES")
map.set('IN', "INDIA")

console.log(map)

for(const [key,value] of map){//distribution of an array
    console.log(key, ':-', value)
}

//objects are not iterable using for of

//for in is used for objects

const myObject = {
    js : 'javascript',
    cpp : 'c plus plus',
    py : 'python',   
}

for (const key in myObject) {
    //console.log(key)
    //console.log(myObject[key])
    //console.log(`${key} is abbrev for ${myObject[key]}`);
}

const languages = ["js" , "cpp", "css", "auth"]

for (const key in languages) {
    //console.log(key);
    //console.log(languages[key])
}

const coding = ["js","cpp","python"]

// coding.forEach(function (item){
//     console.log(item)
// });

//coding.forEach((item) => {
//    console.log(item)
//});

const mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js",
    },
    {
        languagename : "python",
        languagefilename : "py",
    },
    {
        languagename : "cascading style sheets",
        languagefilename : "css",
    },
]

mycoding.forEach((item) => {
    console.log(item.languagefilename),
    console.log(item.languagename)
});