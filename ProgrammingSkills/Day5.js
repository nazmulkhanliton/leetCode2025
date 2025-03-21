//459. Repeated Substring Pattern
var repeatedSubstringPattern = function (s) {
  let n = s.length;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      let substring = s.substring(0, i);
      let repeated = substring.repeat(n / i);
      if (repeated === s) {
        return true;
      }
    }
  }

  return false;
};
let s = "aba";
let result = repeatedSubstringPattern(s);
console.log(result);
// Output: true
