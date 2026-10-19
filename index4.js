let randomNumber = Math.floor(Math.random() * 20) + 1;


const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const count = document.getElementById("count");
const fail = document.getElementById("fail");


let correctCount = 0;
let wrongCount = 0;

guessBtn.addEventListener("click", function () {
  let userguess = Number(guessInput.value);

  if (userguess === randomNumber) {
    message.innerHTML = "Correct! You got it!";
    correctCount = correctCount + 1;
    count.innerHTML=correctCount;

    fail.innerHTML = 0
    wrongCount = 0
    randomNumber = Math.floor(Math.random() * 20) + 1;
    guessInput.value = ''

  } else if (userguess < randomNumber) {
    message.innerHTML = "Too low! Try a bigger number";
     wrongCount = wrongCount + 1;
     fail.innerHTML=wrongCount;
  } else if (userguess > randomNumber) {
     message.innerHTML = "Too high! Try a smaller number";
     wrongCount = wrongCount + 1;
     fail.innerHTML = wrongCount;
  }
});
