const user = {// this is the Object literal
    username: "hitesh",
    logincount :8,
    signedIn: true,
    getUserDetails: function(){
        console.log("got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);       
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this) //{} b/c in node context nothing is in global 
// if console.log(this) runs in broweser alot of things get printed b/c in there global context alot of things present

// constructor fn
//const promiseOne = new Promise()
//const date = new Date()// these new keyword is the c.f

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isLoggedIn,
    this.greeting = function(){
        console.log(`welcome ${this.username}`);       
    }
    return this
}
// const userOne = User("hitesh", 12, true)
// console.log(userOne);
// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne); // now ChaiAurCode,11, false printed b/c userTwo vala fn overwrite kr dia apne values ko => very probamatic so use "new" keyword
                         // b/c c.f gives new Instances everytime

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);// User { username: 'hitesh', loginCount: 12, isloggedIn: true }
console.log(userTwo);// User { username: 'ChaiAurCode', loginCount: 11, isloggedIn: false }

// step1=when u use new keyword an empty obj created called instances eg in caseos node when this keyword pressed an empty parenthies created means new obj created
// step2= c.f called due to new keyword which packs all the argumet and give it
// step3= all arguments inject/added into this keword
// step4= we get in fom of fn

console.log(userOne.constructor)//[Function: User]

