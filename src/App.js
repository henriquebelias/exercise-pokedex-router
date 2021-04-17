import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/pokemon/details" component={PokemonDetails}/>
      <Route path="/about" component={About} />
      <Route path="/favorites" component={Favorites} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;