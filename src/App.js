import React from 'react';
import './App.css';
import Grid from './components/Grid';
import GameRules from './components/GameRules';
import Patterns from './components/Patterns';

function App() {
  return (
    <div className='App'>
      <h1 className='title'> The Game of Life </h1>
      <Grid />
      <GameRules />
      <Patterns />
    </div>
  );
}

export default App;
