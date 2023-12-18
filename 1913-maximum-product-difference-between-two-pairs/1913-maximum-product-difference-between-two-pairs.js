/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    
    const length = nums.length;
    const maxProduct = nums[length - 1] * nums[length - 2];
    const minProduct = nums[0] * nums[1];
    
    return maxProduct - minProduct;
};
