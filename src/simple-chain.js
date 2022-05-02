const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    let length = this.chain.length;
    return length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    const positionFixed = position - 1;

    if(typeof position != 'number' || positionFixed < 0 || positionFixed >= this.getLength()){
      //throw new Error ("You can\'t remove incorrect link!");
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chain.splice(positionFixed, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    return result;
  }
};

module.exports = {
  chainMaker
};
