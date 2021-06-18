'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20; //state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const displayNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const setBodyBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setGuessValue = function (value) {
  document.querySelector('.guess').value = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess < 0 || guess > 20) {
    displayMessage(`⛔ Incorrect Input!`);
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    displayNumber(secretNumber);
    setBodyBackgroundColor('#60b347');
    setNumberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `👎 Too High` : '👍 Too Low');
      // score -= 1;
      score--;
      displayScore(score);
    } else {
      displayMessage(`😥 You run out of guesses`);
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage(`Start guessing...`);
  displayNumber(`?`);
  displayScore(score);
  setGuessValue('');
  setBodyBackgroundColor('#222');
  setNumberWidth('15rem');
});
