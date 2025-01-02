var vowelStrings = function (words, queries) {
  let resultArr = [];
  let temp = 0;
  for (let i = 0; i < words.length; i++) {
    resultArr.push(isValidVowelStr(words[i]) ? ++temp : temp);
  }
  return queries.map((e) => resultArr[e[1]] - (e[0] && resultArr[e[0] - 1]));
};
function isValidVowelStr(str) {
  return "aeiou".includes(str[0]) && "aeiou".includes(str[str.length - 1]);
}

let words = ["aba", "bcb", "ece", "aa", "e"],
  queries = [
    [0, 2],
    [1, 4],
    [1, 1],
  ];
let result = vowelStrings(words, queries);
console.log(result);
