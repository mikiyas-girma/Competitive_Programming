/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    const jobs = jobDifficulty.length;

    // If it's not possible to finish the jobs in 'd' days
    if (jobs < d) {
        return -1;
    }
    const dp = new Array(jobs + 1).fill(null).map(() => new Array(d + 1).fill(Number.MAX_SAFE_INTEGER));
    
    dp[0][0] = 0;

    for (let i = 1; i <= jobs; i++) {
        for (let k = 1; k <= d; k++) {
            let maxDifficulty = 0;

            for (let j = i; j >= k; j--) {
                maxDifficulty = Math.max(maxDifficulty, jobDifficulty[j - 1]);

                // Update the minimum difficulty for the current state
                dp[i][k] = Math.min(dp[i][k], dp[j - 1][k - 1] + maxDifficulty);
            }
        }
    }

    return dp[jobs][d];
};