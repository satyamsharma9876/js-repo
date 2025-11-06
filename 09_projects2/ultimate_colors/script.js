// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0;i<6 ;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}

//console.log(randomColor());// it is for to see the colors which is in numbers
let clearId
const startChangingColor=function(){
  // setInterval(function(){
  //   document.body.style.backgroundColor = randomColor();
  // },1000)// or by passing reference
  if(!clearId){
  clearId = setInterval(changeBgColor,1000)
  }
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor=function(){
  clearInterval(clearId)
  clearId=null;

};
document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', stopChangingColor);














