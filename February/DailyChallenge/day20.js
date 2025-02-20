//1980. Find Unique Binary String

var findDifferentBinaryString = function (nums) {
  let n = nums.length;
  let result = "";
  console.log(nums[1][1]);
  for (let i = 0; i < n; i++) {
    console.log(nums[i][i]);
    result += nums[i][i] === "0" ? "1" : "0";
  }

  return result;
};
let nums = ["01", "10"];
let result = findDifferentBinaryString(nums);
console.log(result);
//Output: "11"
