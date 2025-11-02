//singleton..when made by constructure signleton is formed & when by literal it is not formed
//Object.create is the constructoer method

//Object Literals..it is the way of declaring the object

//task => take a symbol and add it like a key in object
const mySym=Symbol("key1")
const jsuser={// keys r always like a string
    name:"Hitesh",
    "fulname":"hitseh chaudhary",
    [mySym]:"mykey1",// a/f writing in sq bracket datatye of mySym is Symbol & w/o it, it was string 
    age:18,
    email:"hitesh@gooogle.com",
    location:"jaipur",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsuser.email);// not best way to access
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[mySym]);


jsuser.email="hitesh@chatgpt.com" //changing value
//Object.freeze(jsuser) // frezzing value
jsuser.email="hitesh@microsoft.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello JS user");    
}
console.log(jsuser.greeting) //[Function (anonymous)] ...ref of fn came
console.log(jsuser.greeting()); //hello JS user

jsuser.greetingTwo=function(){
    console.log(`hello JS user,${this.name}`);    
}
console.log(jsuser.greetingTwo());










