/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
      const output = [];
      output.push((celsius + 273.15).toFixed(5));
      output.push((celsius * 1.80 + 32.00).toFixed(5));
    
    return output;
};