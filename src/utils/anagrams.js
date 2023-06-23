export function getAnagrams(word) {
  const results = [];
  const characters = word.split('');
  generatePermutations(characters, '', results);
  return results;
}

function generatePermutations(chars, currentWord, results) {
  if (chars.length === 0) {
    results.push(currentWord);
    return;
  }
  for (let i = 0; i < chars.length; i++) {
    const newChars = [...chars];
    newChars.splice(i, 1);
    generatePermutations(newChars, currentWord + chars[i], results);
  }
}
