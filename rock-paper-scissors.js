// "Rock Paper Scissors"

/*
Inicio
Computadora elije un numero 1 - 3
Si computadora es igual 1
   Presenta piedra
Si computadora es igual 2
   Presenta papel
Sino presenta tijeras
Fin
*/

const ROCK = "rock";
const PAPER = "paper"
const SCISSORS = "scissors"

function getComputerchoice(){
 let computer = Math.floor(Math.random() * 3) + 1;
  if (computer === 1){
    console.log(ROCK)
  } else if (computer === 2){
    console.log(PAPER)
  } else {
    console.log(SCISSORS)
  }
}

// getComputerchoice()

