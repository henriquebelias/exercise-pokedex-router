import React from 'react';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = props;

    if(localStorage[id]) {
      this.state = {
        isFavorite: JSON.parse(localStorage[id]),
      }
    } else {
      this.state = {
        isFavorite: false,
      }
    }

    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite({ target }) {
    this.setState({
      isFavorite: target.checked,
    }, () => {
      localStorage.setItem([target.id], this.state.isFavorite);
    })
  }

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
          <h3>{name} Details</h3>
          <div className="pokemon">
            <div>
              <p>{name}</p>
              <p>{type}</p>
              <p>
                Average weight: {`${value} ${measurementUnit}`}
              </p>
            </div>
            <div className="img-favorite">
              <img src={image} alt={`${name} sprite`} />
              {this.state.isFavorite
                && <span role="img" aria-label="favorite-star">&#127775;</span>
              }
            </div>
          </div>
        </div>
        <h3>Summary</h3>
        <p>{summary}</p>
        <h3>Location</h3>
        <div className="pokemon-location">
          {foundAt.map(({ location, map}) => (
            <div key={location}>
              <p>{location}</p>
              <img src={map} alt={location} />
            </div>
          ))}
        </div>
        <label htmlFor={id} className="favorite-label">
          Favoritar Pokemon?
          <input type="checkbox" name="favoriteInput" id={id} onChange={this.handleFavorite} checked={this.state.isFavorite} />
        </label>
        <a href={moreInfo} target="_blank" rel="noopener noreferrer">More Info</a>
      </div>
    )
  }
}

export default PokemonDetails;
