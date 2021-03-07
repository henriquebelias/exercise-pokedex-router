import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    const isFavorite = (localStorage[id] === 'true');
    return (
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
          {isFavorite && <span role="img" aria-label="favorite-star">&#127775;</span>}
        </div>
      </div>
    );
  }
}

export default Pokemon;