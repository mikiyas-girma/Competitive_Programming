/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let sorted;
    do {
         sorted = false;
        for (let i = 0; i < nums.length -1; i++)
        {
            if (nums[i] > nums[i+1])
            {
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                
                sorted = true;
            }
        }
    }while(sorted);
    
    return (nums[nums.length -1] * nums[nums.length -2]) - (nums[0] * nums[1]);
        
    
};