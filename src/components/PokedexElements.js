import styled from 'styled-components';

export const PokemonsContainer = styled.section`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 1em;
  text-transform: capitalize;
`

export const PokemonBox = styled.div`
  border: 1px solid red;
  padding: 1em;
`
