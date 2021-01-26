
import { catchPokemon } from './utils.js';

export function renderPokemon(pokemon) {

    const label = document.createElement('label');
    label.classList.add('pokemon-label');

    const inputRadio = document.createElement('input');
    inputRadio.type = 'radio';
    inputRadio.name = 'pokemon';
    inputRadio.id = 'pokemon';
    inputRadio.classList.add('pokemon');
    label.append(inputRadio);

    const img = document.createElement('img');
    img.classList.add('pokemon-image');
    img.src = `../assets/pokemon-images/${pokemon.img}`;
    img.alt = `${pokemon.name} pokemon`;
    img.addEventListener('click', () => {
        catchPokemon();
    });
    label.append(img);

    return label;

}