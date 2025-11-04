

const coding=["js","ruby","java","python","cpp"]
const values = coding.forEach( (item) => {
    console.log(item);
    return item
})
// console.log(values);// undefined if we do not return any value
console.log(values);// still undefined in o/p b/c for Each not return any value so use filter b/c it return value


const myNum=[1,2,3,4,5,6,7,8,9,10]
// let newNums = myNum.filter( (num) => {
//     return num > 4 //return keyword is necessary when there is scope means curly braces{} 
// })
// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

const newNums=[]
myNum.forEach( (num) =>{
    if( num > 4 ){
        newNums.push(num)
    }
} )
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]
















