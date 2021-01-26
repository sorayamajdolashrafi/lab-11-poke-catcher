import { findById } from './utils.js';

const pokeKey = 'pokeData'; // key
const emptyPokedex = [];

export function getPokedex() {
    const stringPokedex = localStorage.getItem(pokeKey);

    if (stringPokedex) {
        const parsedPokedex = JSON.parse(stringPokedex);

        return parsedPokedex;

    } 
    else {
        const stringEmptyPokedex = JSON.stringify(emptyPokedex);

        localStorage.setItem(pokeKey, stringEmptyPokedex);
        
        return emptyPokedex;
    }
}

export function savePokedex(pokedex) {
    const stringPokedex = JSON.stringify(pokedex);

    localStorage.setItem(pokeKey, stringPokedex);
}

export function incrementSeenPokes(id, pokemon) {
    findById(id, pokemon);

    if (!id) {
        pokedex.push;
        seen = 0;
    }
    else {
        seen++;
    }
}

export function incrementCaughtPokes(id, pokemon) {
    findById(id, pokemon);
    if (id) {
        caught++;
    }
}