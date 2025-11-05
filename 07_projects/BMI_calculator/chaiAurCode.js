const form = document.querySelector('form');
//const height = parseInt(document.querySelector('#height').value)
// commt b/c we have to take height a/f submit

form.addEventListener('submit', function(e){
  e.preventDefault();// reson bataya hai

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi=(weight / ((height * height )/10000)).toFixed(2);
    // show the result
    results.innerHTML=`<span>${bmi}</span>`
    if(bmi<18.6) outcome.innerHTML=`under Weight`
    else if(bmi<24.9) outcome.innerHTML=`Normal range`
    else outcome.innerHTML=`Overweight`
   }
});
