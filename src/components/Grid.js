import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import { gliderGun, gliderArray, oscillators, spaceships } from './Presets';
import ReactGA from 'react-ga';

const numRows = 50;
const numCols = 50;

const operations = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
];

const generateEmptyGrid = () => {
	const rows = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => 0));
	}

	return rows;
};

const Grid = () => {
	const [config, setConfig] = useState({
		gridCols: 42,
		gridRows: 42,
		speed: 200,
	});
	const [evolutionInterval, setEvolutionInterval] = useState(null);
	const [genCount, setGenCount] = useState(0);

	const [grid, setGrid] = useState(() => {
		return generateEmptyGrid();
	});

	const [running, setRunning] = useState(false);

	const runningRef = useRef(running);
	runningRef.current = running;

	const runSimulation = useCallback(() => {
		if (!runningRef.current) {
			return;
		}

		setGrid((g) => {
			return produce(g, (gridCopy) => {
				for (let i = 0; i < numRows; i++) {
					for (let k = 0; k < numCols; k++) {
						let neighbors = 0;
						operations.forEach(([x, y]) => {
							const newI = i + x;
							const newK = k + y;
							if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
								neighbors += g[newI][newK];
							}
						});

						if (neighbors < 2 || neighbors > 3) {
							gridCopy[i][k] = 0;
						} else if (g[i][k] === 0 && neighbors === 3) {
							gridCopy[i][k] = 1;
						}
					}
				}
			});
		});

		setTimeout(runSimulation, 100);
	}, []);

	const randColor1 = Math.floor(Math.random() * Math.floor(255));
	const randColor2 = Math.floor(Math.random() * Math.floor(255));
	const randColor3 = Math.floor(Math.random() * Math.floor(255));

	const playPause = () => {
		setEvolutionInterval((prev) => {
			return prev == null ? config.speed : null;
		});
		ReactGA.event({
			category: 'User',
			action: 'Play/paused simulation',
		});
	};

	const loadPreset = (Presets) => {
		if (
			!(
				Presets.length <= config.gridRows &&
				Presets[0].length <= config.gridCols
			)
		) {
			console.error('Grid preset too large for current grid');
		} else {
			setEvolutionInterval(null);
			// have to wait for the last interval to finish
			setTimeout(() => {
				setGenCount(0);
				setGrid(Presets.map((row) => [...row]));
			}, config.speed);
		}
		ReactGA.event({
			category: 'User',
			action: 'Loaded preset',
		});
	};

	return (
		<>
			<button
				onClick={() => {
					setRunning(!running);
					if (!running) {
						runningRef.current = true;
						runSimulation();
					}
				}}
			>
				{running ? 'stop' : 'start'}
			</button>
			<button
				onClick={() => {
					const rows = [];
					for (let i = 0; i < numRows; i++) {
						rows.push(
							Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
						);
					}

					setGrid(rows);
				}}
			>
				random
			</button>
			<button
				onClick={() => {
					setGrid(generateEmptyGrid());
				}}
			>
				clear
			</button>

			<button
				onClick={() => {
					loadPreset(spaceships);
				}}
			>
				Load Spaceships
			</button>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${numCols}, 20px)`,
				}}
			>
				{grid.map((rows, i) =>
					rows.map((col, k) => (
						<div
							key={`${i}-${k}`}
							onClick={() => {
								const newGrid = produce(grid, (gridCopy) => {
									gridCopy[i][k] = grid[i][k] ? 0 : 1;
								});
								setGrid(newGrid);
							}}
							style={{
								width: 20,
								height: 20,
								backgroundColor: grid[i][k]
									? `rgb(${randColor1}, ${randColor2}, ${randColor3})`
									: undefined,
								border: 'solid 1px black',
							}}
						/>
					))
				)}
			</div>
		</>
	);
};

export default Grid;
