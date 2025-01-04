//1930. Unique Length-3 Palindromic Subsequences
var countPalindromicSubsequence = function (s) {
  let firstChar = {};
  let lastChar = {};

  for (let i = 0; i < s.length; i++) {
    if (firstChar[s[i]] === undefined) {
      firstChar[s[i]] = i;
    }
    lastChar[s[i]] = i;
  }

  let uniquePalindromes = new Set();

  for (let c1 in firstChar) {
    if (firstChar[c1] < lastChar[c1]) {
      let subString = s.slice(firstChar[c1] + 1, lastChar[c1]);
      let uniqueChar = new Set(subString);
      for (let c2 of uniqueChar) {
        uniquePalindromes.add(`${c1}${c2}${c1}`);
      }
    }
  }
  return uniquePalindromes.size;
};
let s = "aabca";
let result = countPalindromicSubsequence(s);
console.log(result);
//Output: 3
