//1800. Maximum Ascending Subarray Sum
var maxAscendingSum = function (nums) {
  localSum = nums[0];
  totalSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      localSum += nums[i];
    } else {
      localSum = nums[i];
    }
    totalSum = Math.max(totalSum, localSum);
  }
  return totalSum;
};
let nums = [12, 17, 15, 13, 10, 11, 12];
let result = maxAscendingSum(nums);
console.log(result);
//Output: 65
