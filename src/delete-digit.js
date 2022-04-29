const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(Math.min(n))
  // let num =  String(n).split('')
  // array = String(n).split('').sort((a,b)=>a-b)
  // delete num[num.indexOf( array[0])]
  let num =  String(n).split('')
  console.log(num)
  let array =[]
  for(let i=0;i<num.length;i++){
    let array2 = num.slice()
    // console.log(array2)
    array2.splice(i, 1)
    // console.log(array2.splice(i, 1))
    array.push(array2.join(''))
  }
  console.log(array)
  console.log(...array)
  console.log(Math.max(...array))
  return Math.max(...array)
}

// deleteDigit(8152)


module.exports = {
  deleteDigit
};
