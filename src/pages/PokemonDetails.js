import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { DetailsContainer, AbilitiesGrid } from './PokemonDetailsElements';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

function PokemonDetails() {
  const [locations, setLocations] = useState([]);
  const [fetched, setFetched] = useState(false);
  const { pokemon } = useContext(PokemonContext);

  const fetchLocations = async () => {
    const url = pokemon.location_area_encounters;
    console.log(url);
    const locationsArray = await fetch(url).then(response => response.json());
    console.log(locationsArray);
    setLocations(locationsArray);
    setFetched(true);
  }

  if (Object.keys(pokemon).length === 0) return <p>Carregando detalhes...</p>;

  return (
    <>
      <Header />
      <DetailsContainer>
        <h3>{ pokemon.name }</h3>
        <img src={ pokemon.sprites.front_default } alt={ `${pokemon.name} sprite` } />
        <p>{ `Altura: ${pokemon.height}` }</p>
        <p>{ `Peso: ${pokemon.weight} gramas` }</p>
        <p>Abilidades: </p>
        <AbilitiesGrid>
          {pokemon.abilities.map(({ ability: { name } }) => (
            <p key={ name }>{name}</p>
          ))}
        </AbilitiesGrid>
        <p>Movimentos:</p>
        <AbilitiesGrid>
          {pokemon.moves.map(({ move: { name } }) => (
            <p key={ name }>{name}</p>
          ))}
        </AbilitiesGrid>
        <Button
          type="button"
          onClick={ fetchLocations }
          gridless
        >
          Mostrar Localizações nos Jogos
        </Button>
        {locations.length === 0 && fetched
          ? <p>Esse Pokémon não possuí localizações</p>
          : locations.map(({ location_area: { name } }) => <p key={ name }>{name}</p>)
        }
      </DetailsContainer>
      <Footer />
    </>
  )
}

export default PokemonDetails;
