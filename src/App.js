import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Pokedex from './Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFound from './components/NotFound';
import './App.css';
import pokemons from './data';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1> Pokedex </h1>
      </header>
      <main className="main">
        <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          <Route
            path="/pokemon/:id/details"
            render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}
            />
          <Route path="/about" component={About} />
          <Route path="/favorites" render={(props) => <Favorites {...props} pokemons={pokemons} />} />
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
      </main>
      <footer className="footer">
        <h3>Desenvolvido por Henrique Brito Elias</h3>
      </footer>
    </div>
  );
}

export default App;