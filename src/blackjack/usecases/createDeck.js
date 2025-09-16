import _ from "underscore";


/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tipoDeCartas
 * @param {array} cartasEspeciales
 * @returns {array} retorna una nuevo deck de cartas
 */

export const crearDeck = (tipoDeCartas, cartasEspeciales) => {
    
    if(!tipoDeCartas || tipoDeCartas.length === 0) throw new Error("tipoDeCartas es obligatorio");


    let deck = [];
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipoDeCartas){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipoDeCartas){
        for(let especial of cartasEspeciales ){
            deck.push(especial + tipo)
        }
    }
    deck = _.shuffle(deck);
    return deck;
}