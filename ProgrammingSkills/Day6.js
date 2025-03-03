//283. Move Zeroes
var moveZeroes = function (nums) {
  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
      lastNonZeroIndex++;
    }
  }
  return nums;
};
let nums = [0, 1, 0, 3, 12];
let result = moveZeroes(nums);
console.log(result);
// Output: [1,3,12,0,0]
