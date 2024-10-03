class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        prime = [True for i in range(n+1)]
        p = 2
        while (p * p <= n):
            if (prime[p] == True):
                for i in range(p * p, n + 1, p):
                    prime[i] = False
            p += 1
        count = 0
        for p in range(2, n + 1):
            if prime[p] and p < n:
                count += 1
        return count