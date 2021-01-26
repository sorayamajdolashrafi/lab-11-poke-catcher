// IMPORT MODULES under test here:
import { renderPokemon } from '../renderPokemon.js';
import { findById } from '../utils.js';
import { getPokedex, savePokedex, newGame } from '../localStorage-utils.js';
import { renderLineItems } from '../results/render-line-items.js';
import { chartLabels, seenData, caughtData } from '../results/chart-utils.js';

const test = QUnit.test;

// renderPokemon test
test('should take in pokemon and return a label', (expect) => {

    const pokemon = {
        id: 1,
        name: 'zorua',
        species_id: 570,
        type: 'dark',
        category: 'tricky fox',
        ability: 'illusion',
        height: 0.7,
        weight: 12.5,
        hp: 40,
        attack: 25,
        defense: 50,
        special_attack: 80,
        special_defense: 40,
        speed: 65,
        img:'zorua.png',
        evolves_from_species_id:'NA',
        pokedex:'https://www.pokemon.com/us/pokedex/zorua'
    };

    const expected = `<label class="pokemon-label"><input type="radio" name="pokemon" id="pokemon" class="pokemon"><img class="pokemon-image" src="../assets/pokemon-images/zorua.png" alt="zorua pokemon"></label>`;

    const actual = renderPokemon(pokemon);

    expect.equal(actual.outerHTML, expected);
});

// findById test
test('should find charmander by id 2 and return pokemon', (expect) => {
    
    const pokemon = [
        {
            id: 1,
            name: 'zorua',
            species_id: 570,
            type: 'dark',
            category: 'tricky fox',
            ability: 'illusion',
            height: 0.7,
            weight: 12.5,
            hp: 40,
            attack: 25,
            defense: 50,
            special_attack: 80,
            special_defense: 40,
            speed: 65,
            image:'zorua.png',
            evolves_from_species_id:'NA',
            pokedex:'https://www.pokemon.com/us/pokedex/zorua'
        },
        {
            id: 2,
            name: 'charmander',
            species_id: 4,
            type: 'fire',
            category: 'lizard',
            ability: 'blaze',
            height: 0.6,
            weight: 8.5,
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65,
            image:'charmander.png',
            evolves_from_species_id:'NA',
            pokedex:'https://www.pokemon.com/us/pokedex/charmander'
        },
        {
            id: 3,
            name: 'mimikyu',
            species_id: 778,
            type: 'ghost',
            category: 'disguise',
            ability: 'disguise',
            height: 0.2,
            weight: 0.7,
            hp: 50,
            attack: 90,
            defense: 80,
            special_attack: 50,
            special_defense: 105,
            speed: 96,
            image:'mimikyu-disguised.png',
            evolves_from_species_id:'NA',
            pokedex:'https://www.pokemon.com/us/pokedex/mimikyu'
        },
    ];

    const expected = {
        id: 2,
        name: 'charmander',
        species_id: 4,
        type: 'fire',
        category: 'lizard',
        ability: 'blaze',
        height: 0.6,
        weight: 8.5,
        hp: 39,
        attack: 52,
        defense: 43,
        special_attack: 60,
        special_defense: 50,
        speed: 65,
        image:'charmander.png',
        evolves_from_species_id:'NA',
        pokedex:'https://www.pokemon.com/us/pokedex/charmander'
    };

    const actual = findById(2, pokemon);

    expect.deepEqual(actual, expected);
});

// savePokedex
test('should take pokemon in pokedex and save to locaStorage', (expect) => {
    
    const pokedex = [
        {
            id: 1,
            name: 'zorua',
        },
        {
            id: 2,
            name: 'charmander',
            
        },
        {
            id: 3,
            name: 'mimikyu',
        }
    ];
    const stringPokedex = JSON.stringify(pokedex);

    const expected = localStorage.setItem('pokeKey', stringPokedex);

    const actual = savePokedex(pokedex);

    expect.deepEqual(actual, expected);
});

// getPokedex test
test('should check to see if there is a pokedex, if so return pokedex', (expect) => {

    const pokedex = [
        {
            id: 1,
            name: 'zorua',
        },
        {
            id: 2,
            name: 'charmander',
            
        },
        {
            id: 3,
            name: 'mimikyu',
        }
    ];
    const stringPokedex = JSON.stringify(pokedex);
    localStorage.setItem('key', stringPokedex);

    const expected = [
        {
            id: 1,
            name: 'zorua',
        },
        {
            id: 2,
            name: 'charmander',
            
        },
        {
            id: 3,
            name: 'mimikyu',
        }
    ];
    
    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});

// newGame test
test('should reset localStorage to an empty array', (expect) => {
    
    const pokedex = [
        {
            id: 1,
            name: 'zorua',
        },
        {
            id: 2,
            name: 'charmander',
            
        },
        {
            id: 3,
            name: 'mimikyu',
        }
    ];
    const stringPokedex = JSON.stringify(pokedex);
    const pokeKey = 'pokeData';
    localStorage.setItem(pokeKey, stringPokedex);
    newGame();
    
    const expected = '[]';
    
    const actual = localStorage.getItem(pokeKey);

    expect.equal(actual, expected);
});

// renderLineItems
test('should take in localStorage data and return tr', (expect) => {
    
    const pokemons = {
        id: 1,
        name: 'zorua',
    };
    const pokedex = {
        id: 1,
        seen: 2,
        caught: 1
    };

    const expected = `<tr class="pokemon-item"><td class="pokemon-name">zorua</td><td class="seen">2</td><td class="caught">1</td></tr>`;
    
    const actual = renderLineItems(pokedex, pokemons);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// chartLabels
test('should take in the pokedex from localStorage and make an array of the names', (expect) => {
    
    const pokemon = [
        {
            id: 1,
            name: 'zorua',
        },
        {
            id: 2,
            name: 'charmander',
        },
        {
            id: 3,
            name: 'mimikyu',
        },
    ];
    const pokedex = [
        {
            id: 1,
            seen: 2,
            caught: 2
        },
        {
            id: 2,
            seen: 5,
            caught: 3
        },
        {
            id: 3,
            seen: 8,
            caught: 1
        }
    ];
    
    const expected = ['zorua', 'charmander', 'mimikyu'];
    
    const actual = chartLabels(pokedex, pokemon);

    expect.deepEqual(actual, expected);
});

// seenData
test('should take in the pokedex from localStorage and make an array of the number of times seen', (expect) => {

    const pokedex = [
        {
            id: 1,
            seen: 2,
            caught: 2
        },
        {
            id: 2,
            seen: 5,
            caught: 3
        },
        {
            id: 3,
            seen: 8,
            caught: 1
        }
    ];
    
    const expected = [2, 5, 8];
    
    const actual = seenData(pokedex);

    expect.deepEqual(actual, expected);
});

// caughtData
test('should take in the pokedex from localStorage and make an array of the number of times caught', (expect) => {

    const pokedex = [
        {
            id: 1,
            seen: 2,
            caught: 2
        },
        {
            id: 2,
            seen: 5,
            caught: 3
        },
        {
            id: 3,
            seen: 8,
            caught: 1
        }
    ];
    
    const expected = [2, 3, 1];
    
    const actual = caughtData(pokedex);

    expect.deepEqual(actual, expected);
});

/*
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
*/