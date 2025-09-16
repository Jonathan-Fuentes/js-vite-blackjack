export const crearCartaHTML = (carta) => {
    const imagenCarta = document.createElement("img");
    imagenCarta.src = `/assets/cartas/${carta}.png`;
    imagenCarta.classList.add("carta");
    return imagenCarta
}