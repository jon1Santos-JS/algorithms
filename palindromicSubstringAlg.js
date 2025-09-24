/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let start = 0;
  let end = 0;

  // função auxiliar para expandir a partir do centro
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // quando o while termina, left e right já saíram do palíndromo
    return [left + 1, right - 1];
  }

  for (let i = 0; i < s.length; i++) {
    // caso de palíndromo com centro em 1 char (aba)
    let [l1, r1] = expandAroundCenter(i, i);

    // caso de palíndromo com centro em 2 chars (abba)
    let [l2, r2] = expandAroundCenter(i, i + 1);

    // comparar e atualizar o mais longo
    if (r1 - l1 > end - start) {
      start = l1;
      end = r1;
    }
    if (r2 - l2 > end - start) {
      start = l2;
      end = r2;
    }
  }

  return s.slice(start, end + 1);
};

/*
ACHAMOS O MAIOR PALÍNDROMO APENAS EXPANDINDO A PARTIR DO CENTRO (1 CARACTER SE LENGTH = ÍMPAR / 2 CARACTERES SE LENGTH = PAR).
PORQUE ENTENDESSE QUE UM PALÍNDROMO SEMPRE TERÁ ELEMENTO IGUAIS NOS LOCAIS OPOSTOS DESDE O ÍNICIO DA EXPANSÃO, 
EX: let [l1, r1] = expandAroundCenter(i, i) = DESDE O PRIMEIRO ELEMENTO SENDO IGUAL A ELE MESMO
*/
