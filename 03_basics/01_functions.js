
//fn is a pkg in which that cose is written which is needd to be get executed may times
function addTwoNumbers(number1,number2){
    console.log(number1+number2); 
}
addTwoNumbers(3,"4")// calling a fn...o/p=34
addTwoNumbers(3,"a")//3a
addTwoNumbers(3,null)//3

function loginUserMessage(username="sam"){// now we have given a default value
    if(!username){// or username===undefined or when empty string i.e " "
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged In`
}
console.log(loginUserMessage());// Please enter a username


//rest & spread opr used in shooping mall where many numbers comes in cart & we hav to handle them
function calculateCartPrice(val1,val2, ...num1){//if(...num1) then o/p=[200,400,500,2000] ...this 3dots called rest and spread opr
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));// [ 500, 2000 ] b/c 200 goin val1, 400 goin val2

// How to pass obj in fn
const user={
    username:"hitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)//username is hitesh and price is 199

// or u can direct pass the obj
handleObject({
    username:"sam",
    price:399
})//username is sam and price is 399

// for passing arrays
const mynewArray=[200,400,100,600]
function returnSecValue(getArray){
    return getArray[1]
}
console.log(returnSecValue(mynewArray));//400
// for direct passing Array
console.log(returnSecValue([200,400,100,600]));//400


















