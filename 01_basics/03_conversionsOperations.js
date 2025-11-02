let score ="33abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber =Number(score); // converting string score into number
console.log(typeof valueInNumber);
console.log(valueInNumber); // Nan => not a no. & if score=null o/p=0, if score=undefined o/p=Nan

let isloggedIn=1
let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn); // if isloggedin is any value o/p is true &if "" o/p is false 

// operations
let value=3
let negvalue=-value
console.log(negvalue);//-3
console.log(3+3); //6
console.log(3**3);// and many more operations

let str1="hello"
let str2="hitesh"
let str3=str1+str2
console.log(str3);
console.log("1"+2); //12
console.log("1"+2+2);//122
console.log(1+2+"2"); //32