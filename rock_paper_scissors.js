const startGame = document.getElementById("startGame");
const metrics = document.getElementById("metrics");
const controls = document.getElementById("controls");
const roundResults = document.getElementById("round-result");
const finalResult = document.getElementById("finalResult");
const buttons = document.querySelectorAll("button.choice");
const startBtn = document.getElementById("start_game");
const currentScore = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

startBtn.addEventListener("click", (e) => {
  toggleComponent(startGame, "hide");
  toggleComponent(controls, "hide");
  finalResult.classList.add("hide");
});

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let round = playRound(e.target.innerText, getComputerChoice());
    roundResults.innerText = round;
    roundResults.classList.remove("hide");

    currentScore.classList.remove("hide");
    currentScore.firstElementChild.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    if (playerScore == 5 || computerScore == 5) {
      finalResult.classList.toggle("hide");
      controls.classList.toggle("hide");
      roundResults.classList.add("hide");
      currentScore.classList.toggle("hide");
      if (playerScore == 5) {
        finalResult.firstElementChild.innerText = `You won! Your Score: ${playerScore} Computer Score: ${computerScore}`;
      } else if (computerScore == 5) {
        finalResult.firstElementChild.innerText = `You Lost! Your Score: ${playerScore} Computer Score: ${computerScore}`;
      }
      startGame.classList.toggle("hide");
      startGame.firstElementChild.innerText = "Start a New Game";
      playerScore = 0;
      computerScore = 0;
    }
  });
});

function toggleComponent(component, element) {
  component.classList.toggle(element);
}

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let randChoice = Math.round((Math.random() * 10) % 2);
  return choices[randChoice];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection.toUpperCase()) {
    return `Tie! Computer chose ${computerSelection} and player chose ${playerSelection.toUpperCase()}`;
  }
  if (computerSelection == "ROCK") {
    if (playerSelection.toUpperCase() == "SCISSORS") {
      computerScore += 1;
      return `Computer won! Computer chose ${computerSelection} and player chose ${playerSelection.toUpperCase()}`;
    }
    if (playerSelection.toUpperCase() == "PAPER") {
      playerScore += 1;
      return `Player won! Computer chose ${computerSelection} and player chose ${playerSelection.toUpperCase()}`;
    }
  } else if (computerSelection == "SCISSORS") {
    if (playerSelection.toUpperCase() == "PAPER") {
      computerScore += 1;
      return `Computer won! Computer chose ${computerSelection} and player chose ${playerSelection.toUpperCase()}`;
    }
    if (playerSelection.toUpperCase() == "ROCK") {
      playerScore += 1;
      return `Player won! Computer chose ${computerSelection} and player chose ${playerSelection.toUpperCase()}`;
    }
  } else if (computerSelection == "PAPER") {
    if (playerSelection.toUpperCase() == "ROCK") {
      computerScore += 1;
      return `Computer won! Computer chose ${computerSelection} and player chose ${playerSelection.toUpperCase()}`;
    }
    if (playerSelection.toUpperCase() == "SCISSORS") {
      playerScore += 1;
      return `Player won! Computer chose ${computerSelection} and player chose ${playerSelection.toUpperCase()}`;
    }
  }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//   for (let index = 0; index < 5; index++) {
//     playerSelection = prompt("What do you want to choose?");
//     playRound(playerSelection, getComputerChoice());
//     console.log(
//       `Player Score: ${playerScore} Computer Score: ${computerScore}`
//     );
//   }
// }
