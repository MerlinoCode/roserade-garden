// PokemonList.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPokemon } from '../interfaces/interfaces';
import './Pokedex.scss'

const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);

useEffect(() => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

    axios.get(apiUrl).then(async (response) => {
        const { results } = response.data;
        console.log(results)
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
        <h1>Pokémon List</h1>
        <div className='pokemon-grid'>
            {pokemonData.map((pokemon) => (
                <ul className='pokemon-card' key={pokemon.id}>
                        <img className='pokemon-card-sprite' src={pokemon.sprites.other.dream_world.front_default}/>
                        <div className='pokemon-card-body'>
                            <h1>{pokemon.name}</h1>
                            {/* <strong>Abilities:</strong>
                            <ul>
                                {pokemon.abilities.map((ability, abilityIndex) => (
                                    <li key={abilityIndex}>{ability.ability.name}</li>
                                ))}
                            </ul> */}
                            <div className='pokemon-card-types'>
                                {pokemon.types.map((type, typeIndex) => (
                                    <div className={`button ${type.type.name}`} key={typeIndex}>{type.type.name}</div>
                                ))}
                            </div>
                            {/* <strong>Height:</strong> {pokemon.height}
                            <strong>Weight:</strong> {pokemon.weight} */}
                        </div>
                </ul>
                ))}
        </div>
    </>
);
};

export default PokemonList;
