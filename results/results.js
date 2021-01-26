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

// chart

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});