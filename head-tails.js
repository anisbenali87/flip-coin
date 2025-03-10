'use strict';

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
};

function computerMove() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

function playGame(playerChoice) {
  let computerChoice = computerMove();
  let result = '';

  if (playerChoice === computerChoice) {
    score.wins++;
    result = 'You win !!';
  } else {
    score.losses++;
    result = 'You Lose !!';
  }

  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector(
    '.js-coin-flip'
  ).innerHTML = `You: ${playerChoice} <=> ${computerChoice}: Computer`;
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} `;

  localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-coin-flip').innerHTML = '';
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} `;
}

function toggling(button) {
  button.classList.toggle('is-toggled');
}

localStorage.setItem('score', JSON.stringify(score));
