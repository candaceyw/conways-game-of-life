[![Netlify Status](https://api.netlify.com/api/v1/badges/c59d7469-fad0-46fb-8def-11ddc0a5dc38/deploy-status)](https://app.netlify.com/sites/sharp-bassi-d19239/deploys)

# Conways Game of Life

## Cellular Automaton

##### ABOUT THE GAME

```

Conway's Game of Life, also known as the Game of Life or simply Life,
is a cellular automaton devised by the British mathematician
John Horton Conway in 1970. It is the best-known example of a cellular automaton.

The "game" is actually a zero-player game, meaning that its evolution
is determined by its initial state, needing no input from human players.
One interacts with the Game of Life by creating an initial
configuration and observing how it evolves.

```

##### RULES

```
The universe of the Game of Life is an infinite two-dimensional orthogonal grid
of square cells, each of which is in one of two possible states, live or dead.
Every cell interacts with its eight neighbours, which are the cells that are
directly horizontally, vertically, or diagonally adjacent. At each step in time,
the following transitions occur:

    1. Any live cell with fewer than two live neighbours dies
        (referred to as underpopulation or exposure).
    2. Any live cell with more than three live neighbours dies
        (referred to as overpopulation or overcrowding).
    3. Any live cell with two or three live neighbours lives,
        unchanged, to the next generation.
    4. Any dead cell with exactly three live neighbours
        will come to life.

The initial pattern constitutes the 'seed' of the system. The first generation
is created by applying the above rules simultaneously to every cell in the
seed — births and deaths happen simultaneously, and the discrete moment at which
this happens is sometimes called a tick. (In other words, each generation is a
pure function of the one before.) The rules continue to be applied repeatedly
to create further generations.


```

##### FEATURES

```
    1. Colors randomizes as generation increases.
    2. User can change grid size
    3. User can select speed
    4. Random generation can be set
    5. User can select cells to create a starting point
    6. User can start and stop generations
    7. User can clear the grid board

```

##### USING THE CODE

```
   React App
   Install dependencies: npm install
   Run locally: npm start

```

### <a href="https://sharp-bassi-d19239.netlify.app/">VIEW GAME </a>
