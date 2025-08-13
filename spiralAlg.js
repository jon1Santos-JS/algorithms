function spiralAlg(matx) {
  const lng = matx.length * matx.length;
  let row = 0;
  let column = 0;
  let result = [];
  let rightWall = matx[row].length - 1;
  let ceil = 0;
  let floor = matx.length - 1;
  let leftWall = 0;
  while (result.length < lng) {
    const right = column < rightWall && row === ceil;
    const down = row < floor && column === rightWall;
    const left = column > leftWall && row === floor;

    result.push(matx[row][column]);
    if (right) {
      column++;
      if (column === rightWall) ceil++;
    } else if (down) {
      row++;
      if (row === floor) rightWall--;
    } else if (left) {
      column--;
      if (column === leftWall) floor--;
    } else {
      row--;
      if (row === ceil) leftWall++;
    }
  }

  return result.join("-");
}

console.log(
  spiralAlg([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
