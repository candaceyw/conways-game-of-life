import React, { useState } from 'react'

const numRows = 50;
const numCols = 50;

const Grid = () => {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), ()=> 0))
        }
        return rows
    })
    // console.log(grid)

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 20px`
        }}>
            {grid.map((rows, i) => 
                rows.map((col, k) => 
                    <div 
                    key={`${i}-${k}`}
                    onClick={() => {
                        
                    }}
                        style={{ width: 20, 
                        height: 20, backgroundColor: grid[i][k] ? 'pink' : undefined,
                        border: 'solid 1px black'
                        }}
                    />
                ))}
            
        </div>
    )
}

export default Grid
