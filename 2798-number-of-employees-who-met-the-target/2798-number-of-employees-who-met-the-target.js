/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  const count = hours.reduce((accumulator, currentValue) => {
    if (currentValue >= target)
      return accumulator += 1;
    else
      return accumulator;
  }, 0);
    return count;
};