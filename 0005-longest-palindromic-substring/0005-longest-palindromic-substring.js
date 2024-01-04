/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
let longestPalindrome = "";

  // Check every possible substring
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.substring(i, j);

      // Test for palindrome
      if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
        longestPalindrome = substring;
      }
    }
  }

  return longestPalindrome;
};

function isPalindrome(str) {
    
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false; 
    }
  }
  return true; 
}