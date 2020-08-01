import React from 'react';

export var numRows = 50;
export var numCols = 50;

export const GridSize = (size) => {
	switch (size) {
		case '1':
			numCols = 20;
			numRows = 10;
			break;
		case '2':
			numCols = 50;
			numRows = 30;
			break;
		default:
			numCols = 70;
			numRows = 50;
	}
};

// export default GridSize;
