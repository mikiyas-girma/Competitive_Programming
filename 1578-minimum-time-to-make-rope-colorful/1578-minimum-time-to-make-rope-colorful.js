/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let currColor = colors[0];
  let cost = 0;
  for (let i = 1; i < colors.length; i++) {
    if (currColor === colors[i]) {
      cost += Math.min(neededTime[i], neededTime[i - 1]);
      if (neededTime[i - 1] > neededTime[i])
        neededTime[i] = neededTime[i - 1]
      currColor = colors[i];
    }
    currColor = colors[i]
  }
  return cost;
};