export function renderPokemon(pokemon) {

    const label = document.createElement('label');
    label.classList.add('pokemon-label');

    const inputRadio = document.createElement('input');
    inputRadio.type = 'radio';
    inputRadio.name = 'pokemon';
    inputRadio.id = 'pokemon';
    inputRadio.classList.add('pokemon');
    label.append(inputRadio);

    const img = document.createElement('img');
    img.classList.add('pokemon-image');
    img.src = `../assets/pokemon/${pokemon.image}`;
    img.alt = `${pokemon.name} pokemon`;
    label.append(img);

    return label;

}