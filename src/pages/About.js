import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function About() {
  return (
    <div>
      <Header />
      <h3>About Pokedex</h3>
      <p>This is a simulated pokedex created as a exercise in the Trybe Software Delevopment Course</p>
      <p>It's possible to navigate throughout some pokemons and see details about them</p>
      <img
        src="https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"
        alt="Pokedex"
      />
      <Footer />
    </div>
  );
}

export default About;
