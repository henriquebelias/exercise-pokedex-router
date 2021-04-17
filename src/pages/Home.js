import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { getPokemonsByType } from '../services/api';
import { HomeContainer } from './HomeElements';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ButtonsPanel from '../components/ButtonsPanel';
import Pokedex from '../components/Pokedex';

function Home() {
  const { pokemonTypes } = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState({});

  const fetchPokemons = async (url) => {
    const pokemonsObj = await getPokemonsByType(url);
    setPokemons(pokemonsObj);
  }

  if (!pokemonTypes) return <p>Carregando...</p>;
  return (
    <HomeContainer>
      <Header />
      <main>
        <section>
          <ButtonsPanel pokemonTypes={ pokemonTypes } fetchPokemons={ fetchPokemons } />
        </section>
        <Pokedex pokemons={ pokemons } />
      </main>
      <Footer />
    </HomeContainer>
  )
}

export default Home;
