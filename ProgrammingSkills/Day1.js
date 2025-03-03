//1768. Merge Strings Alternately
var mergeAlternately = function (word1, word2) {
  let x = word1.length;
  let y = word2.length;
  let n = Math.min(x, y);
  let output = [];
  let i = 0;

  while (i < n) {
    output.push(word1[i]);
    output.push(word2[i]);
    i++;
  }

  let mergOutput = output.join("");

  if (x > y) mergOutput += word1.slice(n);
  if (y > x) mergOutput += word2.slice(n);

  return mergOutput;
};
let word1 = "ab",
  word2 = "pqrs";
let result = mergeAlternately(word1, word2);
console.log(result);
//Output: "apbqrs"
