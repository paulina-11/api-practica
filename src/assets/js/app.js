import axios from 'axios';
const pokeName = document.querySelector('[data-poke-name]');
const pokeContenedor = document.querySelector('[data-poke-contenedor]');
const pokeAbility = document.querySelector('[data-poke-ability]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTipo = document.querySelector('[data-poke-tipo]');
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

                let abilityUrl = response.data.abilities[0].ability.name;
                pokeAbility.innerHTML =`Habilidad: ${abilityUrl}`;

                let baseUrl = response.data.id;
                pokeId.innerHTML = `Id: ${baseUrl}`;

                let tipoUrl = response.data.types[0].type.name;
                pokeTipo.innerHTML = `Tipo: ${tipoUrl}`;
                

            }
        }catch(error){
            console.log(error);
        }

    }
    
    getUser();

