import React from 'react';
import { ButtonsPanelContainer } from './ButtonsPanelElements';
import Button from './Button';

function ButtonsPanel({ pokemonTypes, fetchPokemons }) {

  return (
    <>
      <ButtonsPanelContainer>
        {pokemonTypes.map(({ name, url }) => (
          <Button
            key={ name }
            url={ url }
            onClick={ fetchPokemons }
          >
            { name }
          </Button>
        ))}
      </ButtonsPanelContainer>
    </>
  )
}

export default ButtonsPanel;
