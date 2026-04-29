// Getting computer choice:

/*
Start
Computer choice a number 1-3 randomly
If computer choice is 1
  return rock
If computer choice is 2
  return paper
If computer choice is 3
  return scissors
EndIf
End
*/

//score:
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1){
    return "rock"
  } else if(computerChoice === 2){
    return "paper"
  } else{
    return "scissor"
  }
}

// console.log(getComputerChoice())


// Get human choice:

/*
Start
Ask human to write an option
Create that option to lower case
Return human choice
End
*/

function getHumanChoice(){
  const humanChoice = prompt(`
    Write down one of these:
    Rock - Paper - Scissor`)
  const lower = humanChoice.toLowerCase()
  return lower
}

// console.log(getHumanChoice())

// Play Round:

/*
Get human choice and computer choice
compare human choice and computer choice
add point who win
show result
*/

function playRound(humanChoice,computerChoice){
  // Human win
  if (humanChoice === "rock" && computerChoice === "scissor"){
    humanScore++
    console.log(`${humanChoice} beats ${computerChoice}`)
  } else if(humanChoice === "scissor" && computerChoice === "paper"){
    humanScore++
    console.log(`${humanChoice} beats ${computerChoice}`)
  } else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++
    console.log(`${humanChoice} beats ${computerChoice}`)
  }
  
  // computer win
  
  else if (computerChoice === "rock" && humanChoice === "scissor"){
    computerScore++
    console.log(`${computerChoice} beats ${humanChoice}`)
  } else if(computerChoice === "scissor" && humanChoice === "paper"){
    computerScore++
    console.log(`${computerChoice} beats ${humanChoice}`)
  } else if(computerChoice === "paper" && humanChoice === "rock"){
    computerScore++
    console.log(`${computerChoice} beats ${humanChoice}`)
  }

  // equal
  else{
    console.log(`${humanChoice} and ${computerChoice} are the same, no one has a point`)
  }
  // console.log(`
  //   Points: 
  //   Human: ${humanScore}
  //   Computer: ${computerScore}`)
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection)