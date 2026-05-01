
function getComputerChoice() {
  const computerChoosing = Math.floor(Math.random() * 3) + 1;
  if (computerChoosing === 1) {
    return "rock";
  } else if (computerChoosing === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}


function getHumanChoice() {
  const humanChoosing = prompt(`
    Write down one option:
    Rock, Paper, Scissor`);
  const lowerHumanChoice = humanChoosing.toLowerCase();
  return lowerHumanChoice;
}


function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  // Loop
  function gameRounds(roundStart){
    if (roundStart >= 5){
      return
    }

     const humanSelection = getHumanChoice();
     const computerSelection = getComputerChoice();

     playRound(humanSelection, computerSelection);

     gameRounds(roundStart + 1)
  }
  gameRounds(0)

  function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissor") {
      humanScore++;
      alert(`
      Human: ${humanChoice} beats Computer: ${computerChoice}
      Human: ${humanScore}
      Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      alert(`
      Human: ${humanChoice} beats Computer: ${computerChoice}  
      Human: ${humanScore}
      Computer: ${computerScore}`);
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      humanScore++;
      alert(`
      Human: ${humanChoice} beats Computer: ${computerChoice}
      Human: ${humanScore}
      Computer: ${computerScore}`);
    }

    else if (computerChoice === "rock" && humanChoice === "scissor") {
      computerScore++;
      alert(`
      Computer: ${computerChoice} beats Human: ${humanChoice}
      Human: ${humanScore}
      Computer: ${computerScore}`);
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore++;
      alert(`
      Computer: ${computerChoice} beats Human: ${humanChoice}
      Human: ${humanScore}
      Computer: ${computerScore}`);
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
      computerScore++;
      alert(`
      Computer: ${computerChoice} beats Human: ${humanChoice}
      Human: ${humanScore}
      Computer: ${computerScore}`);
    }

    else {
      alert(`
      Human: "${humanChoice}" and Computer: "${computerChoice}" are the same, no one has won this round`);
    }
  }

  if (humanScore > computerScore) {
    alert(`Human win: ${humanScore}, computer lose: ${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`Computer win: ${computerScore}, Human lose: ${humanScore}`);
  } else {
    alert(`Both divide:
      Human: ${humanScore}
      Computer: ${computerScore}`);
  }

}

playGame();

 