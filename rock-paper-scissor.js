// HUMAN CHOICE:

const container = document.querySelector(".container");

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.value = "rock";

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.value = "paper";

const scissor = document.createElement("button");
scissor.textContent = "SCISSOR";
scissor.value = "scissor";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissor);

// COMPUTER CHOICE:

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// SCORE:

let hScore = 0;
let cScore = 0;

const scoreBox = document.querySelector(".score");
const selections = document.createElement("p");
const humanScore = document.createElement("p");
const computerScore = document.createElement("p");
const winner = document.createElement("p");

selections.textContent = "Selections";
humanScore.textContent = `Human score: ${hScore}`;
computerScore.textContent = `Computer Score: ${cScore}`;
winner.textContent = "";

scoreBox.appendChild(selections);
scoreBox.appendChild(humanScore);
scoreBox.appendChild(computerScore);
scoreBox.appendChild(winner);

// PLAYROUND:

function playRound(humanChoice, computerChoice) {
  // HUMAN WINS:
  if (humanChoice === "rock" && computerChoice === "scissor") {
    hScore++;
    selections.textContent = 
    `Human: ${humanChoice} beats Computer: ${computerChoice}`;
    humanScore.textContent = 
    `Human score: ${hScore}`;
    computerScore.textContent = 
    `Computer Score: ${cScore}`;
  } 

  else if (humanChoice === "paper" && computerChoice === "rock") {
    hScore++;
    selections.textContent = 
    `Human: ${humanChoice} beats Computer: ${computerChoice}`;
    humanScore.textContent = 
    `Human score: ${hScore}`;
    computerScore.textContent = 
    `Computer Score: ${cScore}`;
  } 
  
  else if (humanChoice === "scissor" && computerChoice === "paper") {
    hScore++;
    selections.textContent = 
    `Human: ${humanChoice} beats Computer: ${computerChoice}`;
    humanScore.textContent = 
    `Human score: ${hScore}`;
    computerScore.textContent = 
    `Computer Score: ${cScore}`;
  }

  // COMPUTER WINS:
  else if (computerChoice === "rock" && humanChoice === "scissor") {
    cScore++;
    selections.textContent = 
    `Computer: ${computerChoice} beats Human: ${humanChoice}`;
    humanScore.textContent = 
    `Human score: ${hScore}`;
    computerScore.textContent = 
    `Computer Score: ${cScore}`;
  } 
  
  else if (computerChoice === "paper" && humanChoice === "rock") {
    cScore++;
    selections.textContent = 
    `Computer: ${computerChoice} beats Human: ${humanChoice}`;
    humanScore.textContent = 
    `Human score: ${hScore}`;
    computerScore.textContent = 
    `Computer Score: ${cScore}`;
  } 
  
  else if (computerChoice === "scissor" && humanChoice === "paper") {
    cScore++;
    selections.textContent = 
    `Computer: ${computerChoice} beats Human: ${humanChoice}`;
    humanScore.textContent = 
    `Human score: ${hScore}`;
    computerScore.textContent = 
    `Computer Score: ${cScore}`;
  } else {
    selections.textContent = 
    `Human: ${humanChoice} & Computer: ${computerChoice} are the same`;
  }

  // WINNER AND RESTART:

  if (hScore === 5) {
    hScore = 0;
    cScore = 0;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
    winner.textContent = "Human has won";
  }
  if (cScore === 5) {
    hScore = 0;
    cScore = 0;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
    winner.textContent = "Computer has won";
  }
}

// EVENTS:

rock.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound(rock.value, computerChoice);
});

paper.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound(paper.value, computerChoice);
});

scissor.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound(scissor.value, computerChoice);
});
