class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = max(nums)
        minProduct, maxProduct = 1, 1

        for num in nums:
            candidates = [num, num * minProduct, num * maxProduct]
            minProduct = min(candidates)
            maxProduct = max(candidates)
            res = max(res, maxProduct)
        
        return res