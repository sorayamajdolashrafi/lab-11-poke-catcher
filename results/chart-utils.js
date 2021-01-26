import { findById } from '../utils.js';

export function chartLabels(pokedex, pokemon) {
    // grab pokedex from localStorage in results.js
    // make an empty array
    const nameArray = [];
    // loop through pokedex, grab the name, and push to nameArray
    for (let item of pokedex) {
        const resultPokemon = findById(Number(item.id), pokemon);

        nameArray.push(resultPokemon.name);
    }
    // return nameArray;
    return nameArray;

}