/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let output = '';
    const min = Math.min(word1.length, word2.length)
    for (let i = 0; i < min; i++)
    {
        output += word1[i] + word2[i];
    }
    output += word1.slice(min) + word2.slice(min);
    
    return output;
};