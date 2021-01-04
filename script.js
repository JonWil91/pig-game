'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// Player 0 and 1 instead of 1 and 2, as will be using zero index array positioning to select player score
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

// Rolling dice funtionality
btnRoll.addEventListener('click', function () {
    // 1. Generate random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `static/dice-${dice}.png`;
    // Check if dice roll is equal to 1
    if (dice !== 1) {
        // Add dice value to current score
        currentScore += dice;
        // Dynamically select the current active player and add to their current score
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch player
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
    }
});


