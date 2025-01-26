var detectCapitalUse = function (word) {
  // If the first character is lowercase, all characters must be lowercase
  if (word[0].charCodeAt(0) >= 97 && word[0].charCodeAt(0) <= 122) {
    // Check if all characters are lowercase
    for (let i = 1; i < word.length; i++) {
      if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
        return false;
      }
    }
  } else {
    // If the first character is uppercase, check the rest
    let countUpper = 0;
    for (let i = 1; i < word.length; i++) {
      if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
        countUpper++;
      }
    }
    // Either all characters are uppercase, or only the first character is uppercase
    if (countUpper === 0 || countUpper === word.length - 1) {
      return true;
    }
    return false;
  }

  return true;
};

let word1 = "USA";
let result1 = detectCapitalUse(word1);
console.log(result1); // Output: true

let word2 = "FlaG";
let result2 = detectCapitalUse(word2);
console.log(result2); // Output: false

let word3 = "mL";
let result3 = detectCapitalUse(word3);
console.log(result3); // Output: false
