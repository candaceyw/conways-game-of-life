import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { GridSize, numRows, numCols } from './GridSize';

import 'bootstrap/dist/css/bootstrap.min.css';

let speed = 500;

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
	const [generation, setGeneration] = useState(0);
	const [running, setRunning] = useState(false);
	const [grid, setGrid] = useState(() => {
		return generateEmptyGrid();
	});

	const runningRef = useRef(running);
	runningRef.current = running;

	const generationRef = useRef(generation);
	generationRef.current = generation;

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
		setGeneration(++generationRef.current);
		setTimeout(runSimulation, speed);
	}, []);

	const handleSelect = (e) => {
		GridSize(e);
	};

	// random color generation
	const randColor1 = Math.floor(Math.random() * Math.floor(255));
	const randColor2 = Math.floor(Math.random() * Math.floor(255));
	const randColor3 = Math.floor(Math.random() * Math.floor(255));

	return (
		<>
			<Button
				onClick={() => {
					setRunning(!running);
					if (!running) {
						runningRef.current = true;
						runSimulation();
					}
				}}
			>
				{running ? 'stop' : 'start'}
			</Button>
			<Button
				onClick={() => {
					speed = 1000;
				}}
			>
				Slower
			</Button>
			<Button
				onClick={() => {
					speed = 100;
				}}
			>
				Faster
			</Button>
			<Button
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
			</Button>
			<Button
				onClick={() => {
					setGrid(generateEmptyGrid());
				}}
			>
				clear
			</Button>

			<Dropdown title='Grid Size' id='size-menu' onSelect={handleSelect}>
				<Dropdown.Toggle variant='success' id='dropdown-basic'>
					Grid Size
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item eventKey='1'>50x10</Dropdown.Item>
					<Dropdown.Item eventKey='2'>50x30</Dropdown.Item>
					<Dropdown.Item eventKey='3'>70x50</Dropdown.Item>
				</Dropdown.Menu>
				{/* <Dropdown.Item eventKey='1'>50x10</Dropdown.Item>
				<Dropdown.Item eventKey='2'>50x30</Dropdown.Item>
				<Dropdown.Item eventKey='3'>70x50</Dropdown.Item> */}
			</Dropdown>

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
			<h2>Generations: {generation}</h2>
		</>
	);
};

export default Grid;
