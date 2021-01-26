// IMPORT MODULES under test here:
import { renderPokemon } from '../renderPokemon.js';

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
        image:'zorua.png',
        evolves_from_species_id:'NA',
        pokedex:'https://www.pokemon.com/us/pokedex/zorua'
    };

    const expected = `<label class="pokemon-label"><input type="radio" name="pokemon" id="pokemon" class="pokemon"><img class="pokemon-image" src="../assets/pokemon/zorua.png" alt="zorua pokemon"></label>`;

    const actual = renderPokemon(pokemon);

    expect.equal(actual.outerHTML, expected);
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