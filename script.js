function letterCombinations(digits) {
if (!digits) {
return [];
}

const mappings = {
'2': 'abc',
'3': 'def',
'4': 'ghi',
'5': 'jkl',
'6': 'mno',
'7': 'pqrs',
'8': 'tuv',
'9': 'wxyz'
};

const results = [];

function generateCombinations(currentIndex, currentString) {
if (currentIndex === digits.length) {
results.push(currentString);
return;
}

const currentDigit = digits[currentIndex];
const letters = mappings[currentDigit];

for (let i = 0; i < letters.length; i++) {
const letter = letters[i];
generateCombinations(currentIndex + 1, currentString + letter);
}
}

generateCombinations(0, '');

return results.sort();
}
module.exports = letterCombinations;
