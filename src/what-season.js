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
function getSeason( date ) {
  
//------------------------------------
  // try {
  //   date.toUTCString();
  // } 
  // catch {
  //   throw new Error('Invalid date!')  
  // }
//--------------------------------------------


//   if(!!!date){
//     return console.log('Unable to determine the time of year!')
//   }

//   if (typeof(date) !== 'object') { Error(`Invalid date!`); }
// console.log(date)
  //--------------------------------------------------------------
 
  let msg = new Error('Invalid date!');

  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw msg;
  }
  if(date instanceof Date) {
    try {
      date.getUTCFullYear();
    } catch {
      throw msg;
    }

    let month = date.getMonth();
    if(month >= 0 && month < 2) return 'winter'
    if(month >= 2 && month < 5) return 'spring'
    if(month >= 5 && month < 8) return 'summer'
    if(month >= 8 && month < 11) return 'autumn'
    if(month === 11) return 'winter'
  }
}


// console.log(typeof(NaN))
// console.log(isNaN(NaN))
// console.log(isNaN(777))
// console.log(isNaN('ddfgd'))


module.exports = {
  getSeason
};
