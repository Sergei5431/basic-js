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
  strNew = ''
 num = 1
 for (let i=0; i<str.length; i++){
    if( str[i] == str[i+1]){
        num ++
    }
 
    else{
        if(num ==1){
             strNew = strNew + str[i]
         }else{
             strNew += num + str[i]
         }
         num = 1
    }
     
 }
 return strNew
}

module.exports = {
  encodeLine
};
