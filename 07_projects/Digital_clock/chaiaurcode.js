const clock= document.getElementById('clock')// or
// const clock= document.querySelector('#clock')

setInterval( function () {
  let date = new Date();
 // console.log(date.toLocaleTimeString());// we dont have to run it in console
  clock.innerHTML=date.toLocaleTimeString();
},1000)