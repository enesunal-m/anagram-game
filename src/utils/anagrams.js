export async function getAnagrams(word) {
  const response = await fetch('/data/anagrams.json');
  const data = await response.json();
  const wordLength = word.length;
  const wordGroups = data[wordLength];
  for (let group of wordGroups) {
    if (group.includes(word)) {
      return group.filter(anagram => anagram !== word);
    }
  }
  return [];
}