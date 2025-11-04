const myNumbers= [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10)
//console.log(newNums);//

const newNumbers=myNumbers
                    .map( (num) => num*10 )
                    .map( (num) => num+1 )
                    .filter( (num) => num>=40 )
                
console.log(newNumbers);

// reduce

const myNums=[1,2,3]
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and curval ${currval}`);
//     return acc+currval
// },0)// here 0 is the strart val of accumulator

// console.log(myTotal);

// by arrow fn
// const myTotal=myNums.reduce( (acc,currval)=>{
//     console.log(`acc: ${acc} and curval ${currval}`)
//     return acc+currval
// },0)

//Arrow fn w/o scope
const myTotal = myNums.reduce( (acc,currval)=> acc+currval ,0)

console.log(myTotal);

//one more eg...task is to add total prices
const shoppingcart=[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 12999
    },
]

const myTotalAcount=shoppingcart.reduce( (acc,item)=> acc + item.price ,0)
console.log(myTotalAcount);



