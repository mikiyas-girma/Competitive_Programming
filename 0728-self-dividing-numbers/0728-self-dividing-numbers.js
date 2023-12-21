/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
      const svn = [];
  for (let i = left; i <= right; i++) {
    let flag = false;
    let strnum = i.toString();
    Array.from(strnum).forEach((digit) => {
      if (i % digit != 0) {
        flag = true;
      }
    });
    if (!flag) {
      svn.push(i)
    }
  }
  return svn;
};