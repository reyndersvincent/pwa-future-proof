import React from 'react';

import './pokemon.css';

const Pokemon = ({ pokemon }) => (
  <div className="pokemon">
    <div className="img-container">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
    <span className="name">{pokemon.id}. {pokemon.name}</span>
  </div>
);

export default Pokemon;