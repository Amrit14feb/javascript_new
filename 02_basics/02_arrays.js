const marvel_heroes = ["thor","spiderman","hulk"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])

const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)

const all_new_heroes = [...marvel_heroes,...dc_heroes]//spread operator(often used)
console.log(all_new_heroes)

const anotherarray = [1,2,3,[4,5,6],[7,8,[9,10,[11,12]]]]
const loki  = anotherarray.flat(Infinity)
console.log(loki)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

