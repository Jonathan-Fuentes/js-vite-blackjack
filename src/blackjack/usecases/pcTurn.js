import { crearCartaHTML } from "./createCard";
import { pedirCarta } from "./getCard";
import { valorCarta } from "./getValueCard";

export const turnoComputadora = (puntosMinimo, deck, puntosDOM, cartasComputadorDOM) => {

    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);

        puntosComputadora += valorCarta(carta);

        puntosDOM[1].innerText = puntosComputadora;

        // TODO: CREAR CARTA
        
        cartasComputadorDOM.append(crearCartaHTML(carta))

        if(puntosMinimo > 21){
            break;
        }
    }while((puntosComputadora < puntosMinimo) && (puntosMinimo <= 21));

    setTimeout(() => {
        if(puntosMinimo < puntosComputadora){
            alert("El jugador gano!")
        }else if(puntosComputadora === puntosMinimo){
            alert("EMPATE")
        }else{
            alert("La PC Gano!!!")
        }
   },100)

}
