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
 function deleteDigit(n) {
  let arr = String(n).split('').map(i => +i);
  let newArr = [];
  for(let i = 0; i < arr.length; i++ ) {
  let temp = [...arr];
  temp.splice(i, 1);
  newArr.push(temp.join(''));
  }
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};
