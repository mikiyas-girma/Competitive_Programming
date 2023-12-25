/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanEquivalent = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const sArray = Array.from(s);
  let intValue = 0;

  for (let i = 0; i < sArray.length; i++) {
    if (i < sArray.length - 1 && romanEquivalent[sArray[i]] < romanEquivalent[sArray[i + 1]]) {
      intValue -= romanEquivalent[sArray[i]];
    } else {
      intValue += romanEquivalent[sArray[i]];
    }
  }

  return intValue;
};