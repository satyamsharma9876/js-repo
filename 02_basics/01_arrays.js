//array

const myArr=[0,5,7,8,9]
const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,3,5,6)
console.log(myArr[1]); //5

// Array methods
myArr.push(6);
console.log(myArr); //[ 0, 5, 7, 8, 9, 6 ]
myArr.pop();
console.log(myArr); //[ 0, 5, 7, 8, 9 ]

myArr.unshift(4)// adds ele in front
console.log(myArr);// [ 4, 0, 5, 7, 8, 9 ]
myArr.shift()
console.log(myArr) // [ 0, 5, 7, 8, 9 ]

console.log(myArr.includes(9)); //true
console.log(myArr.indexOf(3));

const newArr=myArr.join(); // convert into string
console.log(newArr); //0,5,7,8,9
console.log(typeof newArr);//string 

//slice, splice
console.log("A",myArr) //A [ 0, 5, 7, 8, 9 ]
const myn1=myArr.slice(1,3)// not delete and not include last idx
console.log(myn1); // [ 5, 7 ]
console.log("B",myArr);// B [ 0, 5, 7, 8, 9 ]

const myn2=myArr.splice(1,3) // it delets ele from idx 1 to 3  & includes last idx
console.log("C",myArr);// C [ 0, 9 ]
console.log(myn2); // [ 5, 7, 8 ]




























