let playerScore = 0;
let computerScore = 0;

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

function game() {
  for (let index = 0; index < 5; index++) {
    playerSelection = prompt("What do you want to choose?");
    playRound(playerSelection, getComputerChoice());
    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore}`
    );
  }
}
