// rock paper and Scissor

// tengo tres opciones: 3 botones
// cada boton tiene el valor correspondiente al texto que tiene

// la computadora taambien tiene 3 opciones, pero la computadora debe elegir de no elige conciente, hay que hacerlo de manera random y asignarle cada numero un valor

// tengo un lugar donde se muestra y almacena la puntuacion

// hay una funcion que compara mi eleccion contra la de la computadore, agrega el punto ganador y muestra el resultado

const container = document.querySelector(".container")
const rock = document.createElement("button")
rock.textContent = "ROCK"
rock.value = "rock"

const paper = document.createElement("button")
paper.textContent = "PAPER"
paper.value = "paper"

const scissor = document.createElement("button")
scissor.textContent = "SCISSOR"
scissor.value = "scissor"

container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissor)
