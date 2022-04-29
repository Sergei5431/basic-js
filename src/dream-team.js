const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 function createDreamTeam( members ) {
  if(Array.isArray(members)) {
    let newArr = members.map(elem => {
      if(typeof elem === 'string') return elem.trim();
    })
    newArr.sort();
    let dreamTeamName = '';
    
    newArr.forEach((elem) => {
      if(typeof elem === 'string') {
        dreamTeamName += elem[0].toUpperCase();
      }
    })
    return dreamTeamName.split('').sort().join('');
  } else {
    return false;
  }
}


module.exports = {
  createDreamTeam
};
