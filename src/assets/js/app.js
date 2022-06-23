import axios from 'axios';
const pokeName = document.querySelector('[data-poke-name]');
const pokeContenedor = document.querySelector('[data-poke-contenedor]');
const input = document.getElementById('inputNombre');


input.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter') {
        e.preventDefault();
        getUser(input.value);
    }
  });



async function getUser(pokemon) {
    pokeContenedor.innerHTML="";
    pokeName.innerHTML="";
    input.value="";
    
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

            if(response.status === 200){
                let imageUrl = response.data.sprites.other.dream_world.front_default;
                let image = document.createElement("img");
                image.src = imageUrl;
                pokeContenedor.appendChild(image);
                let nameUrl = response.data.name;
                pokeName.innerHTML = nameUrl;

            }
        }catch(error){
            console.log(error);
        }

    }
    
    getUser();

