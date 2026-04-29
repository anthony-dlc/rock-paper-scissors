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

console.log(getHumanChoice())