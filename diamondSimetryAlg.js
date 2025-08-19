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
  while (result.length < n * n) {
    if (pen === leftBound || pen === rightBound) result += "*";
    else {
      if (pen !== n) result += " ";
    }
    if (pen === n) {
      result += "\n";
      leftBound++;
      rightBound--;
      pen = 0;
      continue;
    }
    pen++;
  }
  return result;
}

console.log(drawSimetryDiamond(5));
