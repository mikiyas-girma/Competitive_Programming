/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
  let setElement = new Set();
  let maxLength = 0;
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    while (setElement.has(s[i])) {
      setElement.delete(s[index]);
      index++;
    }
    setElement.add(s[i]);
    maxLength = Math.max(maxLength, setElement.size)
  }

  return maxLength;
};