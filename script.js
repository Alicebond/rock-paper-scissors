"use strict";

const buttons = document.querySelectorAll(".btn");
const roundResult = document.querySelector(".round-result");
const playerScore = document.querySelector(".player-scores");
const computerScore = document.querySelector(".computer-scores");
const final = document.querySelector(".final-result");

let playerSelection,
  computerSelection,
  result,
  playerScores = 0,
  computerScores = 0;

function computerPlay() {
  let value = ["rock", "paper", "scissors"];
  let rdm = Math.floor(Math.random() * value.length);
  return value[rdm];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "Draw!";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors.";
  }

  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock.";
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock.";
  }

  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper.";
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper.";
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors.";
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.textContent.toLowerCase();
    game();
  })
);

function game() {
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);
  roundResult.textContent = result;
  scores();
}

function scores() {
  if (result.includes("win")) {
    playerScores++;
    playerScore.textContent = playerScores;
  } else if (result.includes("lose")) {
    computerScores++;
    computerScore.textContent = computerScores;
  }
  finalResult();
}

function finalResult() {
  if (playerScores === 5 || computerScores === 5) {
    buttons.forEach((button) => (button.disabled = true));
    if (playerScores > computerScores)
      final.textContent = "You are the winner! 🎉";
    else if (playerScores < computerScores)
      final.textContent = "💥 Oops! You lose.";
    else final.textContent = "Draw!";
  }
}

document.querySelector(".reset").addEventListener("click", () => {
  playerScores = playerScore.textContent = 0;
  computerScores = computerScore.textContent = 0;
  final.textContent = roundResult.textContent = "";
  buttons.forEach((button) => (button.disabled = false));
});
