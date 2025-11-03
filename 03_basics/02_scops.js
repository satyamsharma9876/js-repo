
if(true){
    let a=10
    const b=20
    var c=30// or c=30
}
//console.log(a);// error
//console.log(b);//error
console.log(c);// no error


function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);  
    }
    //console.log(website); // error
    two()
    
}
one()//hitesh

// +++++++++++++++intresting eg+++++++++++++++++
// addtwo(5) // no error
function addone(num){
    return num+1
}
addone(5)



//addTwo(5) // commet b/c error
const addTwo=function(num){
    return num+2
}
addTwo(5)



