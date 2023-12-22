/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let val = x;
    let reversed = 0;
    while (val > 0)
    {
        const digit = val % 10;
        reversed = reversed * 10 + digit;
        val = Math.floor(val / 10);
    }
  return reversed === x; 
};