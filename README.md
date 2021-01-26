# POKE CATCHER

## notes
on load: generate 3 pokemon
on click: register selected pokemon and reload 3 new pokemon

with each load iterate trhough the array to see if the pokemon has been seen (if/else in a for loop) using findById.


utils.js:
getRandomPokemon();

setPokeStats();

getPokeStats();

incrementSeen();

incrementCaught();

findById();



let pokemon = getrandompokemon();

const anyOfThePokemonMatch = pokeOne._id === pokemonTwo._id || pokemonOne._id === pokemonThree._id || pokemonTwo._id === pokemonThree._id;

while (anyOfThePokemonMatch) {
    pokemon = getrandompokemon();
}

## Pokecatcher Page
    //- Make HTML mock up
        - A cute header
        - Some instructions
        - Display of three pokemon images that pop up in a row that are clickable.
        - Pokemon caught

    //- A little CSS to make it look *chefs kiss*

    - JS

        //- Add data.js for the pokemon
            - 30 pokemon

        - in utils.js
            //- renderPokemon

            //- renderThreeRandomPokemon function
                - while 

                this function brings everything together


            //- setPokeStats
                - localStorage

            //- getPokeStats
                - localstorage

            //- incrementSeenPoke
                - if set /else ++

            //- incrementCaughtPoke
                ++

            //- findByID
                - copy from ghosts

        - in app.js 
            //- onload

            //- on click

            //- after 10 rounds send to results page.


## Results Page
    
    //- HTML
        //- Table or div with list for results: seen and caught
        //- Dummy data to refine CSS
    
    //- CSS 
        //- Refine, bebe

    //- JS
        //- getPokedex.
        //- renderLineItems()
        //- append to table.

    - New Game
        - html button
        - css refine
        - js
            - dom element
            - clearGame() in localStorage-utils.js
            - eventListener in results.js