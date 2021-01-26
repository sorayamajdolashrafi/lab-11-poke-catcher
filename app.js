// import functions and grab DOM elements
import { getPokedex, savePokedex, incrementCaughtPokes, incrementSeenPokes } from './localStorage-utils.js';
import { renderPokemon } from './renderPokemon.js';
import { pokemon } from './data.js';

const pokeBox = document.getElementById('poke-box');
const caughtMessage = document.getElementById('caught-message');

let seen = 0;
let caught = 0;

let pokemonOne = renderPokemon(pokemon);
let pokemonTwo = renderPokemon(pokemon);
let pokemonThree = renderPokemon(pokemon);



pokeBox.append(pokemonOne, pokemonTwo, pokemonThree);

// set event listeners to update state and DOM

//background snippet
