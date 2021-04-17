import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './HeaderElements';

function Header() {
  return (
    <HeaderContainer>
      <header>
        <h1> Pokédex </h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </HeaderContainer>
  )
}

export default Header;
