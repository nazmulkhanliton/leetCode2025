//28. Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
let haystack = "sadbutsad",
  needle = "sad";
let result = strStr(haystack, needle);
console.log(result);
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
