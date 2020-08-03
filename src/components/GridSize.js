import React from 'react';

export var numCols = 25;
export var numRows = 25;

export const GridSize = (size) => {
	switch (size) {
		case '1':
			numRows = 10;
			numCols = 10;

			break;
		case '2':
			numRows = 50;
			numCols = 50;

			break;
		case '3':
			numRows = 80;
			numCols = 80;
			break;
		case '4':
			numRows = 25;
			numCols = 25;
	}
};

// export default GridSize;
