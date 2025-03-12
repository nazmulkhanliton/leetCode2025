//58. Length of Last Word
var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};
let input = "   fly me   to   the moon  ";
let result = lengthOfLastWord(input);
console.log(result);
//The last word is "World" with length 5.
