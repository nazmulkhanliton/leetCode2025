//3066. Minimum Operations to Exceed Threshold Value II

var minOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let oparetions = 0;

  while (nums[0] < k) {
    let x = nums.shift();
    let y = nums.shift();
    nums.push(x * 2 + y);
    nums.sort((a, b) => a - b);
    oparetions++;
  }
  return oparetions;
};

let nums = [2, 11, 10, 1, 3];
k = 10;
let result = minOperations(nums, k);
console.log(result);
//Output: 2
