import React from 'react';

class PokemonDetails extends React.Component {
  render() {
    const { match: { params: { id } }, pokemons } = this.props;
    const pokemonDetail = pokemons.find(pokemon => parseInt(pokemon.id, 10) === parseInt(id, 10));
    const {
      averageWeight: { value, measurementUnit },
      foundAt,
      image,
      moreInfo,
      name,
      summary,
      type
    } = pokemonDetail;
    return (
      <div>
        <div className="pokedex">
          <div className="pokemon">
            <div>
              <p>{name}</p>
              <p>{type}</p>
              <p>
                Average weight: {`${value} ${measurementUnit}`}
              </p>
            </div>
            <img src={image} alt={`${name} sprite`} />
          </div>
        </div>
        <p>{summary}</p>
        {foundAt.map(({ location, map}) => (
          <div key={location}>
            <p>{location}</p>
            <img src={map} alt={location} />
          </div>
        ))}
        <a href={moreInfo} target="_blank" rel="noopener noreferrer">More Info</a>
      </div>
    )
  }
}

export default PokemonDetails;
