
//for
let array=["flash","batman","thor"]
for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
}

//break and continue
//do while and while loop
let score=1
do{
    console.log(`score is ${score}`);
    score++; 
}while(score<=10)

// some array specific loops
// for of loop
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const greetings="hello world!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}

//Maps// maps holds unique val like in dsa
const map=new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('fr', "France")
console.log(map);

for(const [key,value] of map){
    console.log(key,':-', value);
}
// apply it on obj
const myObj={
    'game':'NFS',
     game2:'spiderman'
}
for (const [key,value] of myObj) {
        console.log(key,':-', value);
}
// for of not work for obj..to apply loop on it goin for.js

