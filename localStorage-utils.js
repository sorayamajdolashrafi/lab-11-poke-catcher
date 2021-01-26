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

export function incrementSeenPokes(id, seen) {
    
    const pokedex = getPokedex();
    const pokemon = findById(id, seen);
    
    if (pokemon) {
        pokemon.seen++;
    }
    else {
        const newPokemon = {
            id: id,
            seen: 1,
            caught: 0,
        };

        pokedex.push(newPokemon);
    }
}

export function incrementCaughtPokes(id) {
    
    const pokedex = getPokedex();
    const pokemon = findById(id, seen);
    
    if (pokemon) {
        pokemon.caught++;
    }
    savePokedex(pokedex);
}