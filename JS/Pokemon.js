window.addEventListener('load', iniciar)

function iniciar (){

   const PokemonContenedor = document.querySelector(".contenedor-pokemon")

   function fetchPokemon (id){

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json() )
        .then((data) => {

            CrearPokemon(data);
        });
    }

    function Pokemones (numero){

        for (let i = 0; i <= numero; i++ ){
            fetchPokemon(aleatorio(1,298));
        }
    }

    function CrearPokemon (pokemon) {
        const carta = document.createElement("div");
        carta.classList.add('pokemon-block');

        const imagenContenedor = document.createElement("div")
        imagenContenedor.classList.add('img-container');

        const imagen = document.createElement('img')
        imagen.src = pokemon.sprites.front_default

        imagenContenedor.appendChild(imagen);

        const nombre = document.createElement('p')
        nombre.classList.add('nombre');
        nombre.textContent = pokemon.name

        carta.appendChild(nombre)
        carta.appendChild(imagenContenedor);
        
       

        PokemonContenedor.appendChild(carta);
    }

    Pokemones(5);

    function aleatorio(min,max){
        return Math.floor(Math.random()*(max - min + 1) + min )

    }



}