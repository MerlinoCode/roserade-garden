import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonCard = ({pokemon}) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='pokemon-card'>
      <article>
        <img className='pokemon-card-img' src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon.name}`}/>
        <div className='card-body'>
            <h1 className='card-body-title'>{pokemon.name}</h1>
            <p className='card-body-text'>#{pokemon.id}</p>
            <div className='list-of-types'>
              {
                pokemon.types.map(type =>(
                  <span key={type.type.name} className={`button ${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))
              }
            </div> 
        </div>
      </article>
    </Link>
  )
}