const { NotImplementedError } = require('../extensions/index.js');
//надо разкоментить

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
function countCats( matrix ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let cat = 0

 for(let i=0; i<matrix.length; i++){
    for(let q=0; q<matrix[i].length; q++){
      if(matrix[i][q]=='^^'){
        cat++
      }
    }
 }
 return cat
}
//надо разкоментить
module.exports = {
  countCats
};
//надо разкоментить