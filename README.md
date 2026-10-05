# Conway's Game of Life

An interactive React implementation of Conway's Game of Life, the cellular automaton created by mathematician John Conway.

[View the live app](https://conways-game-of-life-iota-virid.vercel.app/)

This project lets you build an initial pattern on a grid and watch it evolve generation by generation according to a small set of rules. It was originally created in 2020 and has since been updated so it can continue to build and deploy on a modern Node.js environment.

## About the Game

Conway's Game of Life is a zero-player simulation. After the initial configuration is created, each generation is determined entirely by the state of the previous generation.

Each cell on the grid is either alive or dead and interacts with its eight neighboring cells.

### Rules

For every generation:

1. A live cell with fewer than two live neighbors dies from underpopulation.
2. A live cell with two or three live neighbors survives.
3. A live cell with more than three live neighbors dies from overpopulation.
4. A dead cell with exactly three live neighbors becomes alive.

All cells are evaluated simultaneously to produce the next generation.

## Features

- Create a starting pattern by selecting cells on the grid
- Start and stop the simulation
- Clear the board and begin again
- Generate a random starting population
- Adjust the simulation speed
- Change the grid size
- Track the current generation
- View examples of common Game of Life patterns
- Dynamic cell colors as generations progress
- Prevent grid editing while the simulation is running

## Tech Stack

- React 16
- Create React App / react-scripts
- JavaScript
- CSS
- Bootstrap 4
- React Bootstrap
- Immer
- Node.js 24 for the current deployment environment
- Vercel for deployment

## Running Locally

### Requirements

- Node.js 24
- npm

### Install

Clone the repository:

```bash
git clone https://github.com/candaceyw/conways-game-of-life.git
cd conways-game-of-life
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available locally at:

```text
http://localhost:3000
```

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The project uses an OpenSSL legacy compatibility option during the production build because the original Create React App / Webpack toolchain predates the OpenSSL version used by Node.js 24.

## Deployment

The application is deployed with Vercel:

https://conways-game-of-life-iota-virid.vercel.app/

The project is configured to use Node.js 24. Because the original application uses an older Create React App and Webpack toolchain, the production build includes a compatibility setting that allows it to build successfully on the current Node.js runtime.

## Project Structure

```text
src/
├── components/
│   ├── GameRules.js
│   ├── Grid.js
│   ├── GridSize.js
│   ├── Patterns.js
│   └── Presets.js
├── utils/
├── App.js
├── App.css
├── index.js
└── index.css
```

## Background

This project was originally built as a React implementation of Conway's Game of Life and demonstrates state-driven UI behavior, simulation logic, reusable React components, and interactive controls.

For additional background on the simulation, see [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## License

This project is licensed under the terms in the repository's LICENSE file.
