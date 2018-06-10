// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  for(let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  let max = 0;
  let ans;
  for(var key in chars) {
    if (chars[key] > max) {
      ans = key;
      max = chars[key]
    }
  }

  return ans;
}

module.exports = maxChar;
