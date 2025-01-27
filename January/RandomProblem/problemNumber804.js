//804. Unique Morse Code Words
var uniqueMorseRepresentations = function (words) {
  const morseMap = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const uniqueMorseSet = new Set();
  for (const word of words) {
    const morseCode = word
      .split("")
      .map((char) => morseMap[char.charCodeAt(0) - 97])
      .join("");

    uniqueMorseSet.add(morseCode);
  }

  return uniqueMorseSet.size;
};

// Example usage
let words = ["gin", "zen", "gig", "msg"];
// let words = ["a"];
let result = uniqueMorseRepresentations(words);
console.log(result); // Output: 2
