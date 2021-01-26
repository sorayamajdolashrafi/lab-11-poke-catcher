import { getPokedex, newGame } from '../localStorage-utils.js';
import { findById } from '../utils.js';
import { pokemon } from '../data.js';
import { renderLineItems } from './render-line-items.js';

const resultsBox = document.getElementById('results-table');
const newGameButton = document.getElementById('new-game');

const pokedex = getPokedex();

for (let item of pokedex) {

    const resultPokemon = findById(Number(item.id), pokemon);
    const resultsRow = renderLineItems(item, resultPokemon);

    resultsBox.append(resultsRow);

}

newGameButton.addEventListener('click', () => {
    
    newGame();
    window.location = '../index.html';

});