const rockbtn = document.querySelector(".rock");
const paperbtn = document.querySelector(".paper");
const scissorsbtn = document.querySelector(".scissors");

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
  playRound("ROCK");
});

paperbtn.addEventListener("click", () => {
  playRound("PAPER");
});

scissorsbtn.addEventListener("click", () => {
  playRound("SCISSORS");
});

//scoreboard
let humanScore = 0;
let computerScore = 0;

//play round
function playRound(humanChoice) {
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
// function playGame() {
//   let i = 0;
//   while (i < 5) {
//     playRound();
//     i++;
//   }
// }
// playGame();

// function Winner() {
//   if (humanScore > computerScore) console.log("You Win!! WOO");
//   else console.log("loser");
// }
// Winner();
