import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { PokemonsContainer, PokemonBox } from './PokedexElements';
import Button from './Button';

function Pokedex({ pokemons: { pokemon } }) {
  const { fetchPokemon } = useContext(PokemonContext);

  if(!pokemon) return <p>Selecione o Tipo</p>
  return (
    <>
      <p>Pokémons</p>
      <PokemonsContainer>
        {pokemon.map(({ pokemon: { name, url } }) => (
          <PokemonBox>
            <p>{ name }</p>
            <Link to="pokemon/details"><Button url={ url } onClick={fetchPokemon}>Detalhes</Button></Link>
          </PokemonBox>
        ))}
      </PokemonsContainer>
    </>
  );
}

export default Pokedex;