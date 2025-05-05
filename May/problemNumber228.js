//228. Summary Ranges
var summaryRanges = function (nums) {
  let range = [];

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    let end = nums[i];
    if (start === end) {
      range.push(start.toString());
    } else {
      range.push(start + "->" + end);
    }
  }
  return range;
};

let nums = [0, 1, 2, 4, 5, 7];
let result = summaryRanges(nums);
console.log(result);
// Output: ["0->2","4->5","7"]
