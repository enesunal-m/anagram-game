// This is a very simple word list. You would want to replace this with a more comprehensive list.
const wordList = ['cat', 'dog', 'fish', 'bird', 'elephant', 'lion', 'tiger', 'bear'];

export function generateWord(length) {
  const suitableWords = wordList.filter(word => word.length === length);
  const randomIndex = Math.floor(Math.random() * suitableWords.length);
  return suitableWords[randomIndex];
}
