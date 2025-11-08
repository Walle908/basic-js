const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push(`( )`);
    } else this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !isFinite(position) ||
      !Number.isInteger(position) ||
      position >= this.getLength() ||
      position <= 0
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain.length = 0;

    return result;
  },
};

module.exports = {
  chainMaker,
};
