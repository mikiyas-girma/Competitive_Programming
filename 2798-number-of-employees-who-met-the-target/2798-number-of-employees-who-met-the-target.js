/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    hours.map((hour) => {
    if (hour >= target)
      count += 1;
    });
    return count;
};