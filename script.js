'use strict';

// Randomized secret number from 0-20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Max score
let score = 20;
// High Score variable (initial value is 0 afterwards it changes based on the game itself).
let highscore = 0;

// displayMessage function changes the initial text content (depends if the guessed number is too high,too low or correct).

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//Adding event listener on click that checks the value of the input (converts it to number).

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If there is no guess (no input) change the textContent of the message to 'No number'.
  if (!guess) {
    displayMessage('No number!');
  }
  // If the guess is equal to the randomized number change the textContent of the message to 'Correct Number!!!', remove the '?' sign and display that number to the UI, change the background color to green and make the number wider.
  else if (guess === secretNumber) {
    displayMessage('Correct Number!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Nested if-block that sets the value of score equal to highscore everytime we guess correctly and makes changes to the UI (textContent of highscore becomes the remained score)
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // If the guess is not the randomized number and if the score is bigger than 1 and if the input value of the number is guessed is bigger than the secret number display 'Too high!' else display 'Too low!').For every wrong guess score goes from 20 to 0 by 1 and the score message get's updated as well.When there are too many wrong guesses and the score get's to '0' display the 'You lost the game' message.
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset game logic when the 'Again' button is clicked : Resets the score to 20, new secret number is being generated,score is reseted to 20, displays the '?' sign, clears the input value, color goes to black and the width is being reseted as well. The only thing that is not being reseted is the highscore value (only reloading the page resets it).

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
});
