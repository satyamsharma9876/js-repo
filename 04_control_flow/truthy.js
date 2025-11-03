
//falsy values ....means which values r considered to be false
//false,0,-0,BigInt,0n,"",null,NaN

//truthy values
//"anything in string is truthy value",eg=>
// "0",'false'," ",[],function(){}..it is empty fn
const useremail=[]
if(useremail){
    console.log("helllo");
}
if(useremail.length===0){
    console.log("belllo");
}


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Obj is empty");
    
}


//Nulish Coalescing Operator (??): null undefined

let val1;
val1=5 ?? 10
console.log(val1);//5
val1=null??10
console.log(val1);//10
val1=undefined??15
console.log(val1);//15
val1=null??12??34
console.log(val1)//12

//ternary opr
const iceteaprice=100
iceteaprice<=80 ? console.log("less than 80"):console.log("more than 80");





