const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(newDate) {
  let monthIndex = newDate.getMonth();
  let result;
  if (monthIndex >= 8 && monthIndex <= 10) {
      result = 'autumn';
  } else if (monthIndex >= 2 && monthIndex <= 4) {
      result = 'spring';
  } else if (monthIndex >= 5 && monthIndex <= 7) {
      result = 'summer';
  } else {
      result = 'winter';
  }
  return result;
}


module.exports = {
  getSeason
};
