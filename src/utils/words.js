export async function generateWord(length) {
  const response = await fetch('/data/anagrams.json');
  const data = await response.json();
  const wordGroups = data[length];
  const randomGroup = wordGroups[Math.floor(Math.random() * wordGroups.length)];
  return randomGroup[0];
}
