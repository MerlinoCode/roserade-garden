import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pokemon } from '../interfaces/Pokemon';

const Pokedex : React.FC<{}> = () => {
    
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

        axios.get(apiUrl)
        .then((response) => {
            const data = response.data.results as Pokemon[];
            setPokemonList(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return(
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokedex;