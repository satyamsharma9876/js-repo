
const user={
    username:"hitesh",
    price:999,
    WelcomeMessage: function(){
        console.log(`${this.username},Welcome to website`); 
        console.log(this);// big o/p
             
    }
}

user.WelcomeMessage()//hitesh,Welcome to website
user.username="sam"
user.WelcomeMessage()//sam,Welcome to website

console.log(this);//{}.. but when run in inspect of browser window comes b/c it is the global thing in browser
// but when this is called inside a fn alot of value comes
function chai(){
  console.log(this);// alot of o/p
}
chai()

// can i use this in fn

const chaiiii=function(){
    let username="hitesh"
  console.log(this.username);//undefined.... so wecant use
}
chaiiii()


const chaii= () => {
    let username="hitesh"
    console.log(this);//{}
}
chaii()

//Arrow fn..is just....()=>
const addTwo=(num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));//7 it was basic Arrow fn also called Explict return

//implict return arrow fn
const addTwoo=(num1,num2) => (num1+num2) // when use curly braces return stat is required & most useful in react
console.log(addTwoo(3,4));//7

const addTwooo=(num1,num2) => ({username:"hitesh"})

console.log(addTwooo(4,59));//{ username: 'hitesh' }



