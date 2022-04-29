const { NotImplementedError } = require('../extensions/index.js');
// разкоментать


/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let all =0
  s11 = s1.split('')
  s22 = s2.split('')

  console.log(s11)
  for(let i=0; i<s11.length; i++){
    if(s22.indexOf(s11[i])>-1){
      all++
      delete s22[s22.indexOf(s11[i])]
    }
  }
  return all 
}

// s1 = "aabcc"
// s2 = ""
// getCommonCharacterCount( 'abca', 'xyzbac' )

// разкоментать
module.exports = {
  getCommonCharacterCount
};
