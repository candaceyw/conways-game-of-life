import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import GameRules from './components/GameRules';

function App() {
	return (
		<div className='App'>
			<h1> The Game of Life </h1>
			<Grid />
			<GameRules />
		</div>
	);
}

export default App;
