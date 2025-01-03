//2270. Number of Ways to Split Array
var waysToSplitArray = function (nums) {
  let leftSum = 0,
    totalSum = nums.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  let splitCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    if (leftSum >= totalSum - leftSum) splitCount++;
  }
  return splitCount;
};

let nums = [10, 4, -8, 7];
let result = waysToSplitArray(nums);
console.log(result);
//Output: 2;
