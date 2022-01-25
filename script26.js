'use strict'

const diceBtn = document.querySelector('.roledice');
const holdBtn = document.querySelector('.push');
const newGameBtn = document.querySelector('.newgame');
const dicePicture = document.querySelector('.dicepicture');
const current = document.querySelector('.current');
const zero0 = document.querySelector('.zero--0');
const zero1 = document.querySelector('.zero--1');
const zero2 = document.querySelector('.zero--2');
const player2 = document.querySelector('.playertwo');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const current3 = document.getElementById('current--2');


dicePicture.classList.add('hidden');
let currentScore, total, activePlayer, playing;

const newGame = function () {
    currentScore = 0;
    total = [0, 0, 0];
    activePlayer = 0;
    playing = true;
    dicePicture.classList.add('hidden');
    zero0.textContent = 0;
    zero1.textContent = 0;
    zero2.textContent = 0;
    current1.textContent = `Current:0`;
    current2.textContent = `Current:0`;
    current3.textContent = `Current:0`;
}

newGame();


const changePlayer = function () {
    currentScore = 0;
    document.querySelector(`.current--${activePlayer}`).textContent = `Current Score: ${currentScore}`;
    activePlayer = activePlayer === 0 ? 1 : activePlayer === 1 ? 2 : 0;
    ;
}

diceBtn.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        dicePicture.src = `dice-${dice}.png`
        dicePicture.classList.remove('hidden');

        if (dice === 1) {
            changePlayer();

        } else {
            currentScore += dice;
            document.querySelector(`.current--${activePlayer}`).textContent = `Current Score: ${currentScore}`;

        }
    }
})

holdBtn.addEventListener('click', function () {
    if (playing) {

        dicePicture.classList.remove('hidden');
        total[activePlayer] += currentScore;
        document.querySelector(`.zero--${activePlayer}`).textContent = total[activePlayer];



        if (total[activePlayer] >= 20) {
            playing = false;
            dicePicture.classList.toggle('hidden')
            document.querySelector(`.zero--${activePlayer}`).textContent = `You won with ${total[activePlayer]} Points`;
        } else {
            changePlayer();
        }
    }
});

newGameBtn.addEventListener('click', function () {
    newGame();
});





