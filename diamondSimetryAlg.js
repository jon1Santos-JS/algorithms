function drawSimetryDiamond(n) {
  if (typeof n !== "number" || n === 0) return console.log("invalid input");
  if (n === 1) return "*";
  let result = "";
  let leftBound = 0; // QUANDO INCREMENTADO CHEGARÁ AO VALOR DE RIGHBOUND
  let rightBound = n - 1; // QUANDO DECREMENTADO CHEGARÁ AO VALOR DE LEFTBOUND
  let pen = 0;
  // n * n + n, O "+ n" SERÁ O NÚMERO SOBRESALENTE DE \n QUE SOMARÁ NA STRING
  while (result.length < n * n + n) {
    if (pen === n) {
      result += "\n";
      leftBound++;
      rightBound--;
      pen = 0;
    } else {
      const char = pen === leftBound || pen === rightBound ? "*" : " ";
      result += char;
      pen++;
    }
  }
  return result;
}

//Input: 5

// Output:
// *   *
//  * *
//   *
//  * *
// *   *

console.log(drawSimetryDiamond(7));
