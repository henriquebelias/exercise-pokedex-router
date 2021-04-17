import React, { createContext, useState, useEffect } from 'react';
import { getPokemonTypes, getPokemonById } from '../services/api';

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemon, setPokemon] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      const types = await getPokemonTypes();
      setPokemonTypes(types);
    }
    fetchData();
  }, []);

  async function fetchPokemon(url) {
    const pokemonObj = await getPokemonById(url)
    setPokemon(pokemonObj);
  }

  const contextValue = {
    pokemonTypes,
    pokemon,
    fetchPokemon
  }

  return (
    <PokemonContext.Provider value={ contextValue }>
      { children }
    </PokemonContext.Provider>
  )
}

export {
  PokemonContext,
  PokemonProvider as Provider,
}
