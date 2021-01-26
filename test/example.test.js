// IMPORT MODULES under test here:
import { renderPokemon } from '../renderPokemon.js';
import { findById } from '../utils.js';
import { getPokedex, savePokedex } from '../localStorage-utils.js';

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