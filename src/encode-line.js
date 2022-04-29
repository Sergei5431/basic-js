const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = str.split('');
  let result = '';
  const count = {};

  arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });

  for(let key in count) {
    if(count[key] > 1) {
      result = result + count[key] + key;
    } else {
      result = result + key;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
