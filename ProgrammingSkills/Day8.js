//1822. Sign of the Product of an Array
var arraySign = function (nums) {
  if (nums.includes(0)) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count++;
    }
  }
  if (count % 2 == 0) {
    return 1;
  } else return -1;
};
let nums = [-1, -2, -3, -4, 3, 2, 1];
let result = arraySign(nums);
console.log(result);
// Output: 1
