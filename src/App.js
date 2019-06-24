import React from 'react';
import './App.css';
import Header from './components/header'
import PokemonContainer from './containers/pokemon';

const App = () => {

    return (
      <div className="App">
        <Header />
        <div className="content">
          <PokemonContainer />
        </div>
      </div>
    );
}

export default App;
