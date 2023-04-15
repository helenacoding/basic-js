const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function countCats(arrCats) {
  let arrCat = [].concat(arrCats[0], arrCats[1], arrCats[2]);
  let filterCats = arrCat.filter(sign => sign === '^^');
  let numberCats = filterCats.length;
  return numberCats;
}


module.exports = {
  countCats
};
