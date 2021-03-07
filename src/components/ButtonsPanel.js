import React from 'react';
import Button from '../Button';

class ButtonsPanel extends React.Component {
  render() {
    const { pokemonTypes, filteredPokemons, nextPokemon, filterPokemons } = this.props;
    return (
      <div>
          <div className="pokedex-buttons-panel">
          <Button
            onClick={() => filterPokemons('all')}
            className="filter-button">
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => filterPokemons(type)}
              className="filter-button">
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}>
          Próximo pokémon
        </Button>
      </div>
    )
  }
}

export default ButtonsPanel;
