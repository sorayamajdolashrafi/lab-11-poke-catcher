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

export function incrementSeenPokes(id) {
    
    const pokedex = getPokedex();
    const pokemon = findById(id, pokedex);
    
    if (pokemon) {
        pokemon.seen++;
    }
    else {
        const newPokemon = {
            name: pokemon.name,
            id: id,
            seen: 1,
            caught: 0,
        };

        pokedex.push(newPokemon);
    }
    savePokedex(pokedex);
}

export function incrementCaughtPokes(id) {
    
    const pokedex = getPokedex();
    const pokemon = findById(id, pokedex);
    
    if (pokemon) {
        pokemon.caught++;
    }
    savePokedex(pokedex);
}