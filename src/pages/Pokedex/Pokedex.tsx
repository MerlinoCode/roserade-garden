import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPokemon } from '../../interfaces/interfaces';
import './Pokedex.scss'
import Title from '../../components/Title/Title';

const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);

useEffect(() => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=30';

    axios.get(apiUrl).then(async (response) => {
        const { results } = response.data;
        // Fetch additional details for each Pokémon
        const pokemonDetailsPromises = results.map(async (pokemon: { url: string; }) => {
            const detailsResponse = await axios.get(pokemon.url);
            return detailsResponse.data;
        });

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonData(pokemonDetails);
    })
    .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
    });
}, []);

return (
    <>
        <Title text='Listado de Pokemons'/>
        <div className='pokemon-grid'>
            {pokemonData.map((pokemon) => (
                <ul className='pokemon-card' key={pokemon.id}>
                        <img className='pokemon-card-sprite' src={pokemon.sprites.other.dream_world.front_default}/>
                        <div className='pokemon-card-body'>
                            <h1>{pokemon.name}</h1>
                            <div className='pokemon-card-types'>
                                {pokemon.types.map((type, typeIndex) => (
                                    <div className={`button ${type.type.name}`} key={typeIndex}>{type.type.name}</div>
                                ))}
                            </div>
                        </div>
                </ul>
                ))}
        </div>
    </>
);
};

export default PokemonList;
