//2342. Max Sum of a Pair With Equal Sum of Digits
var maximumSum = function (nums) {
  let totalSum = -1;
  let sumMap = new Map();

  for (let num of nums) {
    let sum = digitSum(num);

    if (sumMap.has(sum)) {
      totalSum = Math.max(totalSum, num + sumMap.get(sum));
      sumMap.set(sum, Math.max(num, sumMap.get(sum)));
    } else {
      sumMap.set(sum, num);
    }
  }

  return totalSum;
};

function digitSum(n) {
  return n
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// Example test case
let nums = [18, 43, 36, 13, 7];
let result = maximumSum(nums);
console.log(result); // Output: 54 (18 + 36)
