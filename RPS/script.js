
let humanScore=0;
let computerScore=0;
let rounds=0;
let option=""

const choice= document.querySelector("#container")
const play= document.querySelector("#jugar")
const playerScore= document.querySelector("#score-player")
const machineScore= document.querySelector("#score-computer")
const mensaje = document.querySelector("#rsta")

play.addEventListener("click",()=>{
    play.style.display="none"
    const puntajeJugador= document.querySelector("#jugador")
    const puntajeComputadora= document.querySelector("#computadora")
    puntajeJugador.style.backgroundColor="#fff"
    puntajeJugador.textContent="Jugador"
    
    puntajeComputadora.style.backgroundColor="#fff"
    puntajeComputadora.textContent="Computadora"
    playerScore.textContent="0"
    machineScore.textContent="0"
    puntajeJugador.appendChild(playerScore)
    puntajeComputadora.appendChild(machineScore)
    elegir()

})
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
function elegir(){
choice.addEventListener("click",(event)=>{
    let target=event.target
    switch(target.id){
        case 'piedra': option="piedra"
        break;
        case 'papel': option="papel"
        break
        case 'tijera':option="tijera"
        break

    }
    let jugador=option
    let computadora=getComputerChoice()
    playRound(jugador,computadora)
})
}
function playRound(jugador,computadora){
    if(jugador==computadora){
        mensaje.textContent="Empate"
    } else if (jugador=="tijera" && computadora=="papel"){
        mensaje.textContent="Gana humano, tijera vence a papel"
        humanScore++
    } else if (jugador=="papel" && computadora=="piedra"){
        mensaje.textContent="Gana humano, papel vence a piedra"
        humanScore++
    } else if (jugador=="piedra" && computadora=="tijera"){
        mensaje.textContent="Gana humano, piedra vence a tijera"
        humanScore++
    } else if (jugador=="papel" && computadora=="tijera"){
        mensaje.textContent="Gana computadora, tijera vence a papel"
        computerScore++
    } else if (jugador=="piedra" && computadora=="papel"){
        mensaje.textContent="Gana computadora, papel vence a piedra"
        computerScore++
    } else if (jugador=="tijera" && computadora=="piedra"){
        mensaje.textContent="Gana computadora, piedra vence a tijera"
        computerScore++
}
playerScore.textContent = `${humanScore}`;
machineScore.textContent = `${computerScore}`;
if (humanScore === 5 || computerScore === 5) {
        const botones = document.querySelectorAll("#piedra, #papel, #tijera");
        botones.forEach(btn => btn.disabled = true);
        if (humanScore === 5) {
            mensaje.textContent = " ¡Ganaste la partida!";
        } else {
            mensaje.textContent = " La computadora ganó la partida.";
        }
    }
}
