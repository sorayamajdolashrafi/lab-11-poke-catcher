import { incrementSeenPokes, incrementCaughtPokes } from './localStorage-utils.js';
import { renderPokemon } from './renderPokemon.js';
import { pokemon } from './data.js';

let numberOfTurns = 0;
let seen = 0;
let caught = 0;

export function findById(id, array) {
    console.log(id, array);
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getRandomPokemon() {
    const randomPokemon = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomPokemon];
}

export function catchPokemon(pokemon) {
    //with every set number of turns increases
    numberOfTurns++;
    incrementCaughtPokes(pokemon);

    if (numberOfTurns < 10) {
        setOfThreePokemon();
    } else {

        window.location = './results/index.html';
    }
}

export function setOfThreePokemon() {
    const pokeBox = document.getElementById('poke-box');
    const caughtMessage = document.getElementById('caught-message');
    
    
    // grabs random pokemon
    let pokemonOne = getRandomPokemon();
    let pokemonTwo = getRandomPokemon();
    let pokemonThree = getRandomPokemon();
    // check if any of the pokemon are the same by id, if so rerun set
    while (pokemonOne.id === pokemonTwo.id || pokemonTwo.id === pokemonThree.id || pokemonOne.id === pokemonThree.id) {
        pokemonOne = getRandomPokemon();
        pokemonTwo = getRandomPokemon();
        pokemonThree = getRandomPokemon();
    }

    const pokemonOneImage = renderPokemon(pokemonOne);
    const pokemonTwoImage = renderPokemon(pokemonTwo);
    const pokemonThreeImage = renderPokemon(pokemonThree);

    incrementSeenPokes(pokemonOne.id);
    incrementSeenPokes(pokemonTwo.id);
    incrementSeenPokes(pokemonThree.id);

    caughtMessage.textContent = `you've caught ${numberOfTurns} pokemon!`;

    pokeBox.textContent = '';
    pokeBox.append(pokemonOneImage, pokemonTwoImage, pokemonThreeImage);

}