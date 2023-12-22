/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
      const output = [];
  for (let i = 0; i < (nums.length) / 2; i++) {
    output.push(nums[i]);
    output.push(nums[i + n]);
  }
    
    return output;
};