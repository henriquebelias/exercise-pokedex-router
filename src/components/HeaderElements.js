import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;

  header {
    height: 70px;
    background: red;
    padding: 15px;
    margin-bottom: 15px;
    color: white;
    box-shadow: 2px 5px 5px gray;
    text-align: center;
  }

  h1 {
    text-shadow: 2px 5px 5px gray;
  }

  nav {
    margin: 1em;
  }

  a {
    margin: 0 1em;
    text-decoration: none;
    opacity: 0.7;

    &:link, &:visited, &:hover, &:active {
      color: black;
    }

    &:hover {
      opacity: 1;
    }
  }
`
