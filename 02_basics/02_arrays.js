const marvel_heros=["thor","spiderman","Ironman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);//[ 'thor', 'spiderman', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros); //[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

// also there is best method... by this method we can concat multiple arrays
const all_new_Heros=[...marvel_heros, ...dc_heros]
console.log(all_new_Heros);//[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); //f
console.log(Array.from("Hitesh")); //converting into Array
// Intresting Acse for interview
console.log(Array.from({name: "Hitesh"}));//[]..empty array b/c cant convert to array..here should be keys or Arrys

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]


