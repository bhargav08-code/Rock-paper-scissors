//DOM//

const player1Chance = document.getElementById("player1Chance");
const com = document.getElementById("ComputerChoice");
const score = document.getElementById("Scoreboard");

const btns = document.querySelectorAll("button");
let myChoice;
let computerplay;
let result;

btns.forEach((btns) =>
  btns.addEventListener("click", (e) => {
    myChoice = e.target.id;
    console.log(myChoice);
    player1Chance.textContent = myChoice;
    ComputerChoice();
    getResult();
  })
);

function ComputerChoice() {
  const ComChoice = Math.floor(Math.random() * 3) + 1;
  if (ComChoice === 1) {
    computerplay = "🪨";
  }
  if (ComChoice === 2) {
    computerplay = "✂️";
  }
  if (ComChoice === 3) {
    computerplay = "📃";
  }
  com.textContent = computerplay;
}

function getResult() {
  if (myChoice === computerplay) {
    result = "It's a Draw";
  }
  if (myChoice === "paper" && computerplay === "rock") {
    result = "You Win";
  }
  if (myChoice === "scissors" && computerplay === "rock") {
    result = "You lost";
  }
  if (myChoice === "scissors" && computerplay === "paper") {
    result = "You win";
  }
  if (myChoice === "rock" && computerplay === "paper") {
    result = "You lose";
  }
  if (myChoice === "rock" && computerplay === "scissors") {
    result = "You win";
  }
  if (myChoice === "paper" && computerplay === "scissors") {
    result = "You win";
  }
  score.textContent = result;
}
