export function renderLineItems(pokedex, pokemon) {

    /*
    <tr class="pokemon-item">
        <td class="pokemon-name">Charmander</td>
        <td class="seen">6</td>
        <td class="caught">3</td>
    </tr>
    */

    const tr = document.createElement('tr');
    tr.classList.add('pokemon-item');

    const img = document.createElement('img');
    img.classList.add('pokemon-image');
    img.src = `../assets/pokemon-images/${pokemon.img}`;
    img.alt = `${pokemon.name} pokemon`;
    tr.append(img);

    const tdPokemon = document.createElement('td');
    tdPokemon.classList.add('pokemon-name');
    tdPokemon.textContent = pokemon.name;
    tr.append(tdPokemon);

    const tdSeen = document.createElement('td');
    tdSeen.classList.add('seen');
    tdSeen.textContent = pokedex.seen;
    tr.append(tdSeen);

    const tdCaught = document.createElement('td');
    tdCaught.classList.add('caught');
    tdCaught.textContent = pokedex.caught;
    tr.append(tdCaught);

    return tr;
}