export var numCols = 25;
export var numRows = 25;

export const GridSize = (size) => {
  switch (size) {
    case '1':
      numRows = 10;
      numCols = 10;

      break;
    case '2':
      numRows = 20;
      numCols = 50;

      break;
    case '3':
      numRows = 30;
      numCols = 80;
      break;
    case '4':
      numRows = 25;
      numCols = 25;
      break;

    default:
      numRows = 25;
      numCols = 25;
  }
};
