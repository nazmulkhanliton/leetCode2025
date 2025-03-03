//66. Plus One
var plusOne = function (digits) {
  // return (parseInt(digits.join(""), 10) + 1).toString().split("").map(Number);
  let ln = digits.length;
  for (let i = ln - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);

  return digits;
};
let digits = [1, 2, 3];
let result = plusOne(digits);
console.log(result);
// Output: [1,2,4]
