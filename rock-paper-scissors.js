// GET COMPUTER CHOICE:

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// console.log(getComputerChoice())

// GET HUMAN CHOICE:

function getHumanChoice() {
  const humanChoice = prompt(`
    Write down one option:
    Rock, Paper, Scissor`);
  const lowerHumanChoice = humanChoice.toLowerCase();
  return lowerHumanChoice;
}

// console.log(getHumanChoice())

// SCORE:

let humanScore = 0;
let computerScore = 0;

// BOTH PARTICIPANT'S CHOICES:

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(humanSelection);
// console.log(computerSelection);

// PLAY ONE ROUND

function playRound(humanChoice, computerChoice) {
  // Human win
  if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore++;
    console.log(`Human: "${humanChoice}" beats Computer: "${computerChoice}"`);
    console.log(`
      Human: ${humanScore}
      Computer: ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log(`Human: "${humanChoice}" beats Computer: "${computerChoice}"`);
    console.log(`
      Human: ${humanScore}
      Computer: ${computerScore}`);
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++;
    console.log(`Human: "${humanChoice}" beats Computer: "${computerChoice}"`);
    console.log(`
      Human: ${humanScore}
      Computer: ${computerScore}`);
  }

  // Computer win
  else if (computerChoice === "rock" && humanChoice === "scissor") {
    computerScore++;
    console.log(`Computer: "${computerChoice}" beats Human: "${humanChoice}"`);
    console.log(`
      Human: ${humanScore}
      Computer: ${computerScore}`);
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    console.log(`Computer: "${computerChoice}" beats Human: "${humanChoice}"`);
    console.log(`
      Human: ${humanScore}
      Computer: ${computerScore}`);
  } else if (computerChoice === "scissor" && humanChoice === "paper") {
    computerScore++;
    console.log(`Computer: "${computerChoice}" beats Human: "${humanChoice}"`);
    console.log(`
      Human: ${humanScore}
      Computer: ${computerScore}`);
  }

  // Divide
  else {
    console.log(`
      Human: "${humanChoice}" and Computer: "${computerChoice}" are the same, no one win`);
  }
}

playRound(humanSelection, computerSelection);
