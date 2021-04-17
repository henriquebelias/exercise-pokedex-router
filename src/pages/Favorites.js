import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

function Favorites({ pokemons }) {
  function renderPokemonCard(pokemon) {
    const { name, type, averageWeight, image, id } = pokemon;
    return (
      <div key={id}>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          <Link to={`/pokemon/${id}/details`}>Details</Link>
          </div>
          <div className="img-favorite">
            <img src={image} alt={`${name} sprite`} />
            <span role="img" aria-label="favorite-star">&#127775;</span>
          </div>
        </div>
      </div>
    )
  }

  const favoritePokemonsIds = Object.keys(localStorage).map(id => parseInt(id, 10));
  const favoritePokemonsArray = [];
  favoritePokemonsIds.forEach(id => {
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    favoritePokemonsArray.push(pokemon);
  })

  return (
    <div>
      <h3>Favorites</h3>
      {favoritePokemonsArray.map(pokemon => (
        localStorage[pokemon.id] === 'true' && renderPokemonCard(pokemon)))}
    </div>
  )
}

export default Favorites;
