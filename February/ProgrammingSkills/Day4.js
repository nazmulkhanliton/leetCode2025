//242. Valid Anagram
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
let s = "anagram",
  t = "nagaram";
let result = isAnagram(s, t);
console.log(result);
//Output: true
