const rockbtn = document.querySelector(".rock");
const paperbtn = document.querySelector(".paper");
const scissorsbtn = document.querySelector(".scissors");
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#computer-score");
const match = document.querySelector("#round");
const scoreboard = document.querySelector(".scoreboard");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "ROCK";
  } else if (computerChoice === 1) {
    computerChoice = "PAPER";
  } else if (computerChoice === 2) {
    computerChoice = "SCISSORS";
  }
  console.log(computerChoice);
  return computerChoice;
}

//gets human choice with buttons
rockbtn.addEventListener("click", () => {
  if (humanScore === 5 || computerScore === 5) {
    resetGame();
  }
  playRound("ROCK");
});

paperbtn.addEventListener("click", () => {
  if (humanScore === 5 || computerScore === 5) {
    resetGame();
  }
  playRound("PAPER");
});

scissorsbtn.addEventListener("click", () => {
  if (humanScore === 5 || computerScore === 5) {
    resetGame();
  }
  playRound("SCISSORS");
});

//scoreboard
let humanScore = 0;
let computerScore = 0;

//play round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    match.textContent = "It's a draw";
    return;
  }
  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    match.textContent = "You win this round!";
  } else {
    computerScore++;
    match.textContent = "Computer wins this round!";
  }

  playerScore.textContent = humanScore;
  cpuScore.textContent = computerScore;
  if (humanScore === 5 || computerScore === 5) {
    Winner();
  }
}
function Winner() {
  if (humanScore > computerScore) {
    scoreboard.textContent = "You Win!! WOO";
  } else {
    scoreboard.textContent = "loser";
  }
}
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  scoreboard.textContent = "";
  playerScore.textContent = humanScore;
  cpuScore.textContent = computerScore;
}

//play game or 5 rounds
// function playGame() {
//   let i = 0;
//   while (i < 5) {
//     playRound();
//     i++;
//   }
// }
// playGame();
