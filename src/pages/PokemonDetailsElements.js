import styled from 'styled-components';

export const DetailsContainer = styled.main`
  min-height: 71vh;
  text-align: center;

  h3 {
    font-size: 2rem;
    text-transform: capitalize;
  }

  img {
    width: 8rem;
  }
`
export const AbilitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin: 0 auto;
  width: 80%;

  p {
    text-transform: capitalize;
  }
`
