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

//gets human choice
function getHumanChoice() {
  let humanChoice = prompt(
    "please enter your choice of Rock, Paper or Scissors"
  );

  //converts to upper case
  return humanChoice.toUpperCase();
}

//scoreboard
let humanScore = 0;
let computerScore = 0;

//play round
function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log("It's a draw");
    return;
  }
  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    console.log("You win this round!");
  } else {
    computerScore++;
    console.log("Computer wins this round!");
  }
  console.log(
    "Current score is You: ",
    humanScore,
    " vs Computer ",
    computerScore
  );
}

//play game or 5 rounds
function playGame() {
  let i = 0;
  while (i < 5) {
    playRound();
    i++;
  }
}
playGame();

function Winner() {
  if (humanScore > computerScore) console.log("You Win!! WOO");
  else console.log("loser");
}
Winner();
