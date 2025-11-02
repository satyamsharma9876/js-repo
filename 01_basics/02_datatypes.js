"use strict"; // treat all JS code as newer version
//alert(3+3) // error b/c we r using nodejs not browser

console.log(3+3);
console.log("hitesh");

let nam="hitesh"
let age=18
let isloggedIn=false

// js is dynamically typed lang not static typed
// non primitve of reference: Array, Object, Functions
// primitive datatypes are: string ,number, null ,bollean,undefined, Symbol,BigInt
//number datatype range is 2 to power 53
//bigint datatye for large no.s
//string datatype is in "" and ''
// boolean=> true/false 
// null is standalone value used when no data to store
//undefined => 
// symbol => used for uniqness

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);//f b/c Symbol gives unique val

const bigNumber=3456677788899999n
//object
console.log(typeof nam);
console.log(typeof null); //so null is an object b/c its type is object in js
console.log(typeof undefined);// it is a type in js

// non primitve of reference: Array, Object, Functions...all these
//  non primitive datatye is function
const heros=["shatkiman", "naagraj","doga"]
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
    
}
console.log(typeof heros);//object
console.log(typeof myObj);//object
console.log(typeof myFunction);// function
console.log(typeof bigNumber);//bigint

//++++++++++++++++++++++++memory+++++++++++++++++++++++++++++
//primitive datatype is stored in Stack and Non-primitive is in heap
// in stack, copy of declard variable milta h
//in heap, ref of orginial val milta hai, eg has shown

let myYoutubename="hiteshdotcom"
let anothername=myYoutubename
anothername="chaiaurcode"// all these stored in stack
console.log(myYoutubename);//hiteshdotcom b/c we get copy
console.log(anothername);//chaiaurcode 

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}// all these stored in heap

let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email)// hitesh@google.com
console.log(userTwo.email)// hitesh@google.com
















