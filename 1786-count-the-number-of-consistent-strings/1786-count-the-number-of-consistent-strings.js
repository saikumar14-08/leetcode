/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function isWordValid(word, allowedSet) {
  for (let i = 0; i < word.length; i++) {
    if (!allowedSet.has(word[i])) {
      return false; // Found a character not allowed
    }
  }
  return true; // All characters are allowed
}

var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    for (const word of words) {
        if (isWordValid(word, allowedSet)) {
          count++;
        }
    }
    return count;
};