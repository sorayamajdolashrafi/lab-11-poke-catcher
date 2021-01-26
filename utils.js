import { incrementSeenPokes, incrementCaughtPokes } from './localStorage-utils.js';
import { renderPokemon } from './renderPokemon.js';
import { pokemon } from './data.js';

let numberOfTurns = 0;
let seen = 0;
let caught = 0;

export function findById(id, array) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getRandomPokemon(pokemon) {
    const randomPokemon = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomPokemon];
}

export function setOfThreePokemon() {
    //with every set number of turns increases
    ++numberOfTurns;
    // grabs random pokemon
    let pokemonOne = getRandomPokemon(pokemon);
    let pokemonTwo = getRandomPokemon(pokemon);
    let pokemonThree = getRandomPokemon(pokemon);
    // check if any of the pokemon are the same by id, if so rerun set
    while (pokemonOne.id === pokemonTwo.id || pokemonTwo.id === pokemonThree.id || pokemonOne.id === pokemonThree.id) {
        pokemonOne = getRandomPokemon(pokemon);
        pokemonTwo = getRandomPokemon(pokemon);
        pokemonThree = getRandomPokemon(pokemon);
    }

    renderPokemon(pokemonOne);
    renderPokemon(pokemonTwo);
    renderPokemon(pokemonThree);

    incrementSeenPokes(pokemonOne.id);
    incrementSeenPokes(pokemonTwo.id);
    incrementSeenPokes(pokemonThree.id);

}

export function catchPokemon() {
    incrementCaughtPokes(pokemon.id);

    if (numberOfTurns < 10) {
        setOfThreePokemon();
    } else {

        window.location = './results/index.html';
    }
}