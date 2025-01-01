//1422. Maximum Score After Splitting a String

var maxScore = function (s) {
  let resultArr = [];
  for (let i = 1; i < s.length; i++) {
    let left = [],
      right = [];
    left = s.slice(0, i).split("");
    right = s.slice(i, s.length).split("");
    console.log("Left: ", left, "  Right: ", right);
    let count1 = left.filter((char) => char === "0").length;
    let count2 = right.filter((char) => char === "1").length;
    resultArr.push(count1 + count2);
  }

  return Math.max(...resultArr);
};
let s = "011101";
let result = maxScore(s);
console.log(result);
//Output: 5
