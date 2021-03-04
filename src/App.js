import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Pokedex from './Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import './App.css';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          <Route
            path="/pokemon/:id/details"
            render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}
          />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;