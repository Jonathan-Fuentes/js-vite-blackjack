import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from "./usecases";

let deck = []; // El mazo de cartas.
const tipoDeCartas = ["C","D", "H","S"];
const cartasEspeciales = ["A","J", "Q", "K"];

const btnPedir = document.getElementById("btn-pedir");
const btnDetener = document.getElementById("btn-detener");
const btnNuevo = document.getElementById("btn-nuevo");

const puntosDOM = document.querySelectorAll("small");
const cartasJugadorDOM = document.getElementById("jugador-cartas")
const cartasComputadorDOM = document.getElementById("computadora-cartas")


let puntosJugador = 0;
let puntosComputadora = 0;




deck = crearDeck(tipoDeCartas, cartasEspeciales);


// EVENTOS
btnPedir.addEventListener("click", (e) => {
    e.preventDefault();
    const carta = pedirCarta(deck);

    puntosJugador += valorCarta(carta);

    puntosDOM[0].innerText = puntosJugador;


    
    cartasJugadorDOM.append(crearCartaHTML(carta))


    if(puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador,  deck, puntosDOM, cartasComputadorDOM);
        console.warn("PERDISTE");
    }else if(puntosJugador == 21){
        console.warn("GENIAL !!");
        btnDetener.disabled = true;
        btnPedir.disabled = true;
    }

});


btnDetener.addEventListener("click", (e) => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador,  deck,puntosDOM, cartasComputadorDOM);
})




btnNuevo.addEventListener("click", () => {

    puntosJugador = 0;
    puntosComputadora = 0;


    deck = crearDeck(tipoDeCartas, cartasEspeciales);


    while (cartasJugadorDOM.firstChild) {
        cartasJugadorDOM.removeChild(cartasJugadorDOM.firstChild);
    }


    while (cartasComputadorDOM.firstChild) {
        cartasComputadorDOM.removeChild(cartasComputadorDOM.firstChild);
    }


    puntosDOM[0].innerHTML = '0'
    puntosDOM[1].innerHTML = '0'

    btnDetener.disabled = false;
    btnPedir.disabled = false;
})