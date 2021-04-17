import styled from'styled-components';

export const GenericButton = styled.button`
  background-color: orange;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  width: ${({gridless}) => gridless ? "30%" : "100%"};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`
