var reverseVowels = function (s) {
  let sArray = s.split("");
  let vArray = [];
  let j = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < sArray.length; i++) {
    if (vowels.includes(sArray[i])) {
      vArray[j] = sArray[i];
      j++;
    }
  }

  vArray.reverse();
  j = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (vowels.includes(sArray[i])) {
      sArray[i] = vArray[j];
      j++;
    }
  }
  return sArray.join("");
};

let s = "IceCreAm";
let result = reverseVowels(s);
console.log(result);
//Output: "AceCreIm"
