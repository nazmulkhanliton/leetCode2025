//2185. Counting Words With a Given Prefix
var prefixCount = function (words, pref) {
  let count = 0,
    flag = 0;
  let prefixLen = pref.length;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      //console.log("Result", words[i].includes(pref));
      if (words[i][j] === pref[j]) {
        flag++;
        if (prefixLen === flag) {
          count++;
        }
      }
    }
    flag = 0;
  }

  return count;
};
let words = ["pay", "attention", "practice", "attend"],
  pref = "at";
let result = prefixCount(words, pref);
console.log(result);
//Output: 2
