

const pokeButton = document.getElementById('pokeButton');
const dataAPI = document.getElementById('dataAPI');
const primer = document.getElementById('primer');

const llamadaAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/${ pokemon }')
        
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dataAPI.innerText = JSON.stringify(data);
            primer.innerText = `Nombre: ${ JSON.stringify(data.name) }`;
        })
        .catch(error => console.error(new Error(error)));
}

pokeButton.addEventListener('click', llamadaAPI);

async  function pokeDatos() {

    try {

        const pokeName = document.getElementById('pokeName').value.toLowerCase();

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ pokeName }`);

        if(!res.ok) {
            throw new Error('Recurso no disponible');
        }

        const datos = await res.json();
        const pokeI = datos.sprites.front_default;
        const pokeIMG = document.getElementById('pokemonImg');
        
        pokeIMG.src = pokeI;
        pokeIMG.style.display = 'block';

    } catch (error) {
        console.error(error);
    }

}