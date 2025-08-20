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
  let result = "";
  let leftBound = 0;
  let rightBound = n - 1;
  let pen = 0;
  while (result.length < n * n + n) {
    if (pen === n) {
      result += "\n";
      leftBound++;
      rightBound--;
      pen = 0;
    } else if (pen === leftBound || pen === rightBound) {
      result += "*";
      pen++;
    } else {
      result += " ";
      pen++;
    }
  }
  return result;
}

console.log(drawSimetryDiamond(5));
