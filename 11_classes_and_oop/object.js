
function multipleBy5(num){
    return num*5
}

multipleBy5.power =2
console.log(multipleBy5(5));//25
console.log(multipleBy5.power);//2 so we can treat fn as obj so in js everything is obj
console.log(multipleBy5.prototype);//{}
//++++++

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ // here this is for current context means the one who called increase the score of that
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);// this used for same reason
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()//error b/c when we transfer values from fn to chai or tea we didnt told that some new properties came so use "new" keyword

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/











