const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  if (! Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!") 
  }
  if (!arr.length) {
    return []
  }
  let newArr = [];
  let skipId = null;
  for(let i = 0; i < arr.length; i ++ ){
    console.log('skipId: ', skipId);
    console.log('i: ', i);
    switch(arr[i]){
      case '--double-next':
        if(arr[i + 1] && i != skipId){
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if(i - 1 > 0 && i != skipId){
          newArr.push(arr[i - 1]);
        }
        break;
      case '--discard-next':
        if(i + 1 < arr.length && i != skipId){
          i++;
          skipId = i + 1;
        }
        break;
      case '--discard-prev':
        if (i != skipId) {
          newArr.pop();
        }
        break;

      default:
        newArr.push(arr[i]);
    }
   
  }
  return newArr;
}

module.exports = {
  transform
};
