// Get computer choice:

function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1){
    return "rock";
  } else if (computerChoice === 2){
    return "paper";
  } else{
    return "scissor"
  }
}

console.log(getComputerChoice())

// Get human choice:

function getHumanChoice(){
  const humanChoice = prompt(`
    Write down one option:
    Rock, Paper, Scissor`)
  const lowerHumanChoice = humanChoice.toLowerCase()
  return lowerHumanChoice
}

console.log(getHumanChoice())