//896. Monotonic Array
var isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
};
let nums = [1, 2, 2, 3];
let result = isMonotonic(nums);
console.log(result);
