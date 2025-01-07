//1408. String Matching in an Array
var stringMatching = function (words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
    }
  }
  return result;
};
let words = ["mass", "as", "hero", "superhero"];
let result = stringMatching(words);
console.log(result);
//Output: ["as","hero"]
//i !== j && words[j].includes(words[i])
