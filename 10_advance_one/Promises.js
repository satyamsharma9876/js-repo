const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()//now setTimeout is connected with .then, now promise consumed will also get printed
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// now w/o holding promise into a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2"); 
        resolve()     
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// promise 3
const promisethree = new Promise(function(resolve,result){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@examle.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})

// promise 4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }else {
            reject('ERROR:something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise either resolved or rejected"));
// then handles if p is resolved , catch when p is rejected & finally execute everytime

// promise 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript",password:"123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
});
// just like .then .catch aync await waits until completion of task 

async function conssumePromiseFive(){
    // const response = await promiseFive // await is used b/c it can take time to fetch promiseFive
    // console.log(response);
    // // but we r not handling reject case so use try catch or also u can use .then and .catch
    try{
        const response = await promiseFive
        console.log(response); 
    }catch(error){
        console.log(error);      
    }  
}
conssumePromiseFive()

//++++++++++
// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response);
//     const data = await response.json()// converting response into json & await used b/c here also time can be taken to fetch data
//     console.log(data);   
//     }catch(error){
//         console.log("E: ", error);   
//     }
// }
//getAllUsers()

// by using .then .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);  
})
.catch((error) => console.log(error))

