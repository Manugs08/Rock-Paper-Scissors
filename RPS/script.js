let humanScore=0
let computerScore=0

function getComputerChoice(){
    let valor=Math.random()
    let resultado
    if(valor<=0.33 ){
        resultado="tijera"
    } else if(valor<=0.66){
        resultado="papel"
    } else if(valor<=0.99){
        resultado="piedra"
    }
    return resultado
}
function getHumanChoice(){
    let valor=prompt("Ingrese eleccion: piedra,papel,tijera")
    return valor
}

function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        console.log("Empate")
    } else if (humanChoice=="tijera" && computerChoice=="papel"){
        console.log("Gana humano, tijera vence a papel")
        humanScore++
    } else if (humanChoice=="papel" && computerChoice=="piedra"){
        console.log("Gana humano, papel vence a piedra")
        humanScore++
    } else if (humanChoice=="piedra" && computerChoice=="tijera"){
        console.log("Gana humano, piedra vence a tijera")
        humanScore++
    } else if (humanChoice=="papel" && computerChoice=="tijera"){
        console.log("Gana computadora, tijera vence a papel")
        computerScore++
    } else if (humanChoice=="piedra" && computerChoice=="papel"){
        console.log("Gana computadora, papel vence a piedra")
        computerScore++
    } else if (humanChoice=="tijera" && computerChoice=="piedra"){
        console.log("Gana computadora, piedra vence a tijera")
        computerScore++
    }
}

function playGame(){
    let humanChoice=getHumanChoice()
    humanChoice=humanChoice.toLowerCase()
    const computerChoice=getComputerChoice()
    playRound(humanChoice,computerChoice)
}

for (let i=0;i<5;i++){
    playGame() 
    console.log("Puntos humano: ",humanScore)
    console.log("Puntos computador: ",computerScore)
}
if(humanScore>computerScore){
    console.log("Humano Gana")
}else if(humanScore<computerScore){
    console.log("Computadora Gana")
} else{
    console.log("Empate")
}

