//28. Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
let haystack = "sadbutsad",
  needle = "sad";
let result = strStr(haystack, needle);
console.log(result);
// Output: 0
