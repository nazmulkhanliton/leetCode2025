//2381. Shifting Letters II
var shiftingLetters = function (s, shifts) {
  const n = s.length;
  const netShifts = new Array(n + 1).fill(0);

  for (let [start, end, direction] of shifts) {
    const shiftValue = direction === 1 ? 1 : -1;
    netShifts[start] += shiftValue;
    netShifts[end + 1] -= shiftValue;
  }

  for (let i = 1; i < n; i++) {
    netShifts[i] += netShifts[i - 1];
  }

  const result = s
    .split("")
    .map((char, index) => {
      const shift = netShifts[index] % 26;
      const charCode = char.charCodeAt(0);
      let newCharCode = charCode + shift;

      if (newCharCode > 122) newCharCode = 97 + (newCharCode - 123);
      if (newCharCode < 97) newCharCode = 122 - (96 - newCharCode);

      return String.fromCharCode(newCharCode);
    })
    .join("");

  return result;
};

let s = "abc",
  shifts = [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1],
  ];
let result = shiftingLetters(s, shifts);
console.log(result);
// Output: "ace"
