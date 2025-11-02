const score=400;
console.log(score); //400

const balance=new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(7)); //100.0000000

const otherNumber=123.8966
console.log((otherNumber.toPrecision(4))); //123.9

const hundreds=100000000000
console.log(hundreds.toLocaleString()); //100,000,000,000....printed in us representation
console.log(hundreds.toLocaleString('en-IN')); //1,00,00,00,00,000


//++++++++++++++++++maths+++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(Math.min(4,3,6,8)))
console.log(Math.random()) // always gives values b/w 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// but if we want random no. b/w 10 and 20 0nly
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1)) + min);







