const name="hitesh"
const repocount=50
// console.log(name+ repocount + "value");
// don't use +, use backtick
console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName=new String('hitesh-hc-com')
console.log(gameName[0]); //h
console.log(gameName.__proto__);//{}

console.log(gameName.split('-'))// [ 'hitesh', 'hc', 'com' ]
console.log(gameName.length);//8
console.log(gameName.toUpperCase()); // we can acces all functions from here some eg has shown
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

const newString=gameName.substring(0,4);
console.log(newString);// hite

const anotherString=gameName.slice(-8,3);
console.log(anotherString);// hite

const newStringOne="      hitesh    " 
console.log(newStringOne);//     hitesh
console.log(newStringOne.trim());//hitesh

const url="https://hitesh.com/hitseh%20chaodhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))//true


