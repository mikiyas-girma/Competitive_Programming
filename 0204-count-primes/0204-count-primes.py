class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n < 3:
            return 0
        
        prime = [True] * n
        prime[0] = prime[1] = False
        p = 2
        while (p * p <= n):
            if (prime[p] == True):
                for i in range(p * p, n, p):
                    prime[i] = False
            p += 1
        return sum(prime)