const { NotImplementedError } = require('../extensions/index.js');

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
// function getCommonCharacterCount(/* s1, s2 */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function getCommonCharacterCount(str1, str2) {
  let s1 = str1.split('');
  let s2 = str2.split('');
  let count = 0;

  for(let  i = 0; i < s1.length; i++){
    for(let j = 0; j < s2.length; j++){
      if(s1[i] === s2[j]){
        count++;
        s1.splice(i, 1);
        s2.splice(j, 1);
        i--;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
