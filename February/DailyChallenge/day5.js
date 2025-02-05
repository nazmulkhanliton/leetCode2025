// 1790. Check if One String Swap Can Make Strings Equal
var areAlmostEqual = function (s1, s2) {
  let k = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      k.push(i);
    }
  }

  if (k.length === 0) return true;

  if (k.length === 2) {
    let [i, j] = k;
    return s1[i] === s2[j] && s1[j] === s2[i];
  }
  return false;
};

let s1 = "caa";
s2 = "aaz";
let result = areAlmostEqual(s1, s2);
console.log(result);
//Output: false

// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.
