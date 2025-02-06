// 1726. Tuple with Same Product
var tupleSameProduct = function (nums) {
  const tuples = new Map();
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const tuple = nums[i] * nums[j];
      pairs = tuples.get(tuple) || 0;
      count += pairs * 8;
      tuples.set(tuple, pairs + 1);
    }
  }

  return count;
};

let nums = [2, 3, 4, 6];
let result = tupleSameProduct(nums);
console.log(result);
