const { NotImplementedError } = require("../lib");

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
  const initArr = n.toString().split("");
  let max = 0;

  for (let i = 0; i < initArr.length; i++) {
    const copyArr = [...initArr];
    copyArr.splice(i, 1);
    const resultNum = +copyArr.join("");
    if (max < resultNum) {
      max = resultNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
