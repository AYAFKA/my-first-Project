'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/
// let seceretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let higScore = 0;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// const displayScore = function (Scorepoint) {
//   document.querySelector('.score').textContent = Scorepoint;
// };

// const displaysetElementWidth = function (styleWidth) {
//   document.querySelector('.number').style.width = styleWidth;
// };

// const displaynumberSelector = function (numberSecret) {
//   document.querySelector('.number').textContent = numberSecret;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     //document.querySelector('.message').textContent = '⛔ No number';

//     displayMessage('⛔ No number');

//     // When the player wins:
//   } else if (guess === seceretNumber) {
//     displayMessage('🎉 Correct Numberrr!..');
//     //document.querySelector('.message').textContent = '🎉 Correct Numberrr!..';
//     //document.querySelector('.number').textContent = seceretNumber;
//     displaynumberSelector(seceretNumber);
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     //document.querySelector('.number').style.width = '30rem';
//     displaysetElementWidth('30rem');

//     if (score > higScore) {
//       higScore = score;
//       document.querySelector('.highscore').textContent = higScore;
//     }
//   } else if (guess !== seceretNumber) {
//     if (score > 1) {
//       //document.querySelector('.message').textContent =
//       //guess > seceretNumber ? '📈 Its High>>>' : '📉 Its low <<<';
//       displayMessage(
//         guess > seceretNumber ? '📈 Its High>>>' : '📉 Its low <<<'
//       );
//       score--;
//       //document.querySelector('.score').textContent = score;
//       displayScore(score);
//     } else {
//       // document.querySelector('.message').textContent = 'You lost the Game!..';
//       displayMessage('You lost the Game!...');
//       //document.querySelector('.score').textContent = 0;
//       displayScore(0);
//     }
//   }
//   // Whe guess is too high:

//   /*else if (guess > seceretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Its High>>>';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game!..';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low:
//   } else if (guess < seceretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Its low >>>';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game!..';
//       document.querySelector('.score').textContent = 0;
//     }
//   }*/
// });

// // Again button setup #Challenge1;
// // Understanding problem:
// /*
// Implement a game rest functionality,So that the player can make a new guess! Here is how

// Breakin down Problem:
// 1.Select the element with 'again' class and attach an 'click' Event handler
// 2.Set the random number here to get another random number when pressing again button
// 3.Set the score into initial stage
// 4.Set the message and baground and as initial stage and baground tool
// 5.Set the value of '.guess' into empty string
// */

// document.querySelector('.again').addEventListener('click', function () {
//   seceretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   // document.querySelector('.number').textContent = '?';
//   displaynumberSelector('?');
//   //document.querySelector('.score').textContent = score;
//   displayScore(score);
//   //document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('body').style.backgroundColor = '#222';
//   //document.querySelector('.number').style.width = '15rem';
//   displaysetElementWidth('15rem');
//   document.querySelector('.guess').value = '';
// });

// Done by me😎😎😎
const inputValue = document.querySelector('.input');
const checkBtn = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 4 + 1);
const againBtn = document.querySelector('.again');

let score = 20;
let highscore = 0;

// display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//display score
const displayScore = function (currentScore) {
  document.querySelector('.score').textContent = `💯 Score: ${currentScore}`;
};
//display when numberchange
const displayNumberChange = function () {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('body').style.background = 'green';
};

//display change
const displayChange = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = 'black';
  document.querySelector('.number').style.width = '15rem';
};
checkBtn.addEventListener('click', () => {
  //When user enter invalid input
  if (!inputValue.value) {
    displayMessage('⚠️ No number');
  }
  //When user enter the greater value
  else if (secretNumber > +inputValue.value) {
    displayMessage('📉 Too low');
    displayScore(--score);
    displayChange();
    if (!score || score < 0) displayMessage('You fucked up');
  }
  //When user enter the lower value
  else if (secretNumber < +inputValue.value) {
    displayMessage('📈 Too high');
    displayScore(--score);
    displayChange();
    if (!score || score < 0) displayMessage('You fucked up');
  }
  //When user enter the correct value
  else if (secretNumber === +inputValue.value) {
    displayNumberChange();
    displayMessage('🎉 Correct Numberrr!..');
    if (score > highscore) {
      highscore = score;
      document.querySelector(
        '.highscore'
      ).textContent = `🥇 Highscore: ${highscore}`;
    }
  }
});

//Again button setup

againBtn.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 4 + 1);
  displayMessage('Start guessing...');
  displayScore(20);
  score = 20;
  displayChange();
  inputValue.value = '';
});
