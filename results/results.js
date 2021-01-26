import { getPokedex, newGame } from '../localStorage-utils.js';
import { findById } from '../utils.js';
import { pokemon } from '../data.js';
import { renderLineItems } from './render-line-items.js';
import { chartLabels, seenData, caughtData } from './chart-utils.js';

const resultsBox = document.getElementById('results-table');
const newGameButton = document.getElementById('new-game');

const pokedex = getPokedex();
const labelArray = chartLabels(pokedex, pokemon);
const seenArray = seenData(pokedex);
const caughtArray = caughtData(pokedex);

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
var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: labelArray,
        datasets: [
            {
                label: 'seen',
                data: seenArray,
                backgroundColor: ['rgb(255, 51, 0)', 'rgb(255, 102, 0)', 'rgb(255, 255, 0)', 'rgb(128, 255, 0)', 'rgb(0, 223, 255)', 'rgb(0, 40, 255)', 'rgb(128, 0, 255)', 'rgb(255, 0, 255)', 'rgb(255, 0, 128)'],
                borderColor: 'white',                
            },
            {
                label: 'caught',
                data: caughtArray,
                backgroundColor: ['rgb(255, 51, 0)', 'rgb(255, 102, 0)', 'rgb(255, 255, 0)', 'rgb(128, 255, 0)', 'rgb(0, 223, 255)', 'rgb(0, 40, 255)', 'rgb(128, 0, 255)', 'rgb(255, 0, 255)', 'rgb(255, 0, 128)'],
                borderColor: 'white',
            },
        ]
    },

    // Configuration options go here
    options: {
        responsive: true,
        legend: {
            poistition: top,
        },
        animation : {
            animateRotate: true,
        },
        circumference: 1 * Math.PI,
        rotation: 1 * Math.PI,
    }
});