import React from 'react';

const GameRules = () => {
	return (
		<div className='rules'>
			<h1>Rules</h1>
			<div>
				<p>Rules of the game include...</p>
				<ol>
					<li>
						Any live cell with fewer than two live neighbours dies (referred to
						as underpopulation or exposure).
					</li>
					<li>
						Any live cell with more than three live neighbours dies (referred to
						as overpopulation or overcrowding).
					</li>
					<li>
						Any live cell with two or three live neighbours lives, unchanged, to
						the next generation.
					</li>
					<li>
						Any dead cell with exactly three live neighbours will come to life.
					</li>
				</ol>
			</div>
		</div>
	);
};

export default GameRules;
