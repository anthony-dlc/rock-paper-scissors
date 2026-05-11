// rock paper and Scissor

// tengo tres opciones: 3 botones
// cada boton tiene el valor correspondiente al texto que tiene

// la computadora taambien tiene 3 opciones, pero la computadora debe elegir de no elige conciente, hay que hacerlo de manera random y asignarle cada numero un valor

// tengo un lugar donde se muestra y almacena la puntuacion

// hay una funcion que compara mi eleccion contra la de la computadore, agrega el punto ganador y muestra el resultado

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
humanScore.textContent = `Human score: ${hScore}`;
computerScore.textContent = `Computer Score: ${cScore}`;

selections.textContent = "Selections";

scoreBox.appendChild(selections);
scoreBox.appendChild(humanScore);
scoreBox.appendChild(computerScore);

// PLAYROUND:

function playRound(humanChoice, computerChoice) {
  // HUMAN WINS:
  if (humanChoice === "rock" && computerChoice === "scissor") {
    hScore++;
    selections.textContent = `Human: ${humanChoice} beats Computer: ${computerChoice}`;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    hScore++;
    selections.textContent = `Human: ${humanChoice} beats Computer: ${computerChoice}`;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    hScore++;
    selections.textContent = `Human: ${humanChoice} beats Computer: ${computerChoice}`;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
  }

  // COMPUTER WINS:

  else if(computerChoice === "rock" && humanChoice === "scissor") {
    cScore++;
    selections.textContent = `Computer: ${computerChoice} beats Human: ${humanChoice}`;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
  } else if(computerChoice === "paper" && humanChoice === "rock") {
    cScore++;
    selections.textContent = `Computer: ${computerChoice} beats Human: ${humanChoice}`;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
  } else if(computerChoice === "scissor" && humanChoice === "paper") {
    cScore++;
    selections.textContent = `Computer: ${computerChoice} beats Human: ${humanChoice}`;
    humanScore.textContent = `Human score: ${hScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
  } else {
    selections.textContent = `Human: ${humanChoice} & Computer: ${computerChoice} are the same`
  }
}
