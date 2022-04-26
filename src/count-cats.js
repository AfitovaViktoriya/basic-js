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
function countCats(matrix) {
  let template = matrix
    .join(",")
    .split(",")
    .filter(i => i === '^^');
  if (template.length !== 0) return template.length;
  else return 0;
}
let matrix = [
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]
countCats(matrix);
module.exports = {
  countCats
};
