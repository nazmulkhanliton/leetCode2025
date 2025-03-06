//1502. Can Make Arithmetic Progression From Sequence
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let diff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let localDiff = arr[i + 1] - arr[i];
    if (i === 0) diff = localDiff;
    else if (localDiff !== diff) return false;
  }
  return true;
};
let arr = [1, 2, 4];
let result = canMakeArithmeticProgression(arr);
console.log(result);
