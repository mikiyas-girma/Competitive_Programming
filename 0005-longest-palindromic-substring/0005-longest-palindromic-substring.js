/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }

    let start = 0;
    let end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const maxLength = Math.max(len1, len2);

        if (maxLength > end - start) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);
        }
    }

    return s.substring(start, end + 1);
};