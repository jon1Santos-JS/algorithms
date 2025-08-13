function diagonalTraverseAlg(matx) {
  const lng = matx.length * matx[0].length;
  const result = [];
  const lastRow = matx.length - 1;
  const lastCol = matx[0].length - 1;
  let rightUpDir = true;
  let row = 0;
  let col = 0;
  for (let i = 0; i < lng; i++) {
    result.push(matx[row][col]);

    // TEM ELEMENTO NA ESQUERDA BAIXO?
    const leftDownElement = row + 1 <= lastRow && col - 1 >= 0 && !rightUpDir;
    // TEM ELEMENTO NA DIREITA CIMA?
    const rightUpElement = col + 1 <= lastCol && row - 1 >= 0 && rightUpDir;
    row += leftDownElement ? 1 : rightUpElement ? -1 : 0;
    col += leftDownElement ? -1 : rightUpElement ? 1 : 0;

    if (!leftDownElement && !rightUpElement) {
      rightUpDir = !rightUpDir;

      // SE CHEGOU NOS LIMITES DE LINHA E HOUVER MAIS COLUNAS
      const rowBoundary = (row === 0 || row === lastRow) && col < lastCol;
      // SE CHEGOU NOS LIMITES DE COLUNA E HOUVER MAIS LINHAS
      const colBoundary = (col === 0 || col === lastCol) && row < lastRow;

      if (rowBoundary) {
        col++;
      } else {
        if (colBoundary) {
          row++;
        }
      }
    }
  }

  return result.join("-");
}

console.log(
  diagonalTraverseAlg([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
