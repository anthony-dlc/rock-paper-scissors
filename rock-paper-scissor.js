// GET COMPUTER CHOICE:

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

// GET HUMAN CHOICE:

function getHumanChoice() {
  const humanChoosing = prompt(`
    Write down one option:
    Rock, Paper, Scissor`);
  const lowerHumanChoice = humanChoosing.toLowerCase();
  return lowerHumanChoice;
}

// HOLE GAME:

function playGame() {
  // SCORE:

  let humanScore = 0;
  let computerScore = 0;

  // ROUNDS: 


  // OPTION WITH LOOPS:

  // for (let i = 1; i <= 5; i++) {
  //   // EACH ROUND:

  //   // ASSIGN BOTH PARTICIPANT'S CHOICES AND
  //   // CALLS BOTH PARTICIPANT'S CHOICES

  //   const humanSelection = getHumanChoice();
  //   const computerSelection = getComputerChoice();

  //   //COMPARE BOTH CHOICES
  //   playRound(humanSelection, computerSelection);

  // }

  // OPTION WITH FUNCTION:

  function loop(x){
    if (x >= 5){
      return
    }
     // ASSIGN BOTH PARTICIPANT'S CHOICES AND
     // CALLS BOTH PARTICIPANT'S CHOICES

     const humanSelection = getHumanChoice();
     const computerSelection = getComputerChoice();

     //COMPARE BOTH CHOICES
     playRound(humanSelection, computerSelection);
     loop(x + 1)
  }
  loop(0)


  // ONE ROUND COMPARISON:

  function playRound(humanChoice, computerChoice) {
    // COMPARISON:

    // HUMAN VICTORY:
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

    // COMPUTER VICTORY:
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

    // BOTH DIVIDE:
    else {
      alert(`
      Human: "${humanChoice}" and Computer: "${computerChoice}" are the same, no one has won this round`);
    }
  }

  // SHOW WINNER:

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

//CALL HOLE GAME:

playGame();

// END
