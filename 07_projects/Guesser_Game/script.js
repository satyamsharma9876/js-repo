let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playgame = true;

if(playgame){
  submit.addEventListener('click',function(e){
  e.preventDefault()// b/c val can go to server ya jo isko bula rha wha chali jayegi 
  const guess = parseInt(userInput.value)
  validateGuess(guess)
  })
}

function validateGuess(guess){
  // it is  for validating  guesed no.
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1){
    alert('Please enter a number more than 1')
  }else if(guess > 100){
    alert('Please enter a number less than 1')
  }else{
    prevGuess.push(guess)
    if(numGuess === 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  // is it =,<,> to random no.
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  }else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

function displayGuess(guess){
  // cleans the i/p field & adds it to prevGuess Array
    userInput.value =''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(Message){
  // it was imp for me 
  lowOrHi.innerHTML = `<h2>${Message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playgame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess =1
    guessSlot.innerHTML= ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}