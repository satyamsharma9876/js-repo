
let myName = "hitesh     "
let myChannel = "chai     "
console.log(myName.length);// 11 so we can use myName.trim().length but if there is more strings like this so 
// we wanna a fn which can be applied to all string


let myHeros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidly power is ${this.spiderman}`);       
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);   
}
heropower.hitesh() // error b/c hitesh is not a fn so we added a fn in top level of hierarchy i.e object
// (done above) b/c fn,array,string sbhi Object se hote hue hi jaati h & Obj ka parent null hota hai
// so if myheros.hitesh() kre to bhi chlna chaiye
myHeros.hitesh()
// but we added something in A




