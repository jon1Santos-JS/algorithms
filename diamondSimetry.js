//Input: 5

// Output:
// *   *
//  * *
//   *
//  * *
// *   *

function drawSimetryDiamond(n) {
  if (typeof n !== "number" || n === 0) return console.log("invalid input");
  if (n === 1) return "*";
  const result = [];
  let leftPen = 0;
  let rightPen = n - 1;
  while (result.length < n * n) {
    result.push();
  }
}
