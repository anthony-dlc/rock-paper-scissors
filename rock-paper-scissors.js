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

/*
Se pude al humano entrar una opcion
Esa opcion se convierte en minuscula
Si el humano introdujo roca
  Se muestra rock
Si el humano introdujo papel
  Se muestra papel
Sino Se muestra tijeras
*/

function getHumaChoice(){
  let human = prompt(`
    Elije una opcion:
   Rock - Paper - Scissors`);
   let lower = human.toLowerCase();
   if (lower === "rock"){
    console.log(ROCK)
   } else if (lower === "paper") {
    console.log(PAPER)
   } else {
    console.log(SCISSORS)
   }
}

getHumaChoice()