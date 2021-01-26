import { getPokedex, savePokedex, incrementCaughtPokes, } from './localStorage-utils.js';
import { setOfThreePokemon } from './utils.js';

const pokeBox = document.getElementById('poke-box');
const caughtMessage = document.getElementById('caught-message');

// set event listeners to update state and DOM
pokeBox.addEventListener('load', () => {
    setOfThreePokemon();

    console.log('hi');
});
//background snippet
