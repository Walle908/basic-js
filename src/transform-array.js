const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const initArr = [...arr];
  const resultArr = [];

  for (let i = 0; i < initArr.length; i++) {
    console.log(initArr[i]);
    if (initArr[i] === "--discard-next") {
      if (i !== initArr.length - 1) {
        initArr[i + 1] = undefined;
        continue;
      } else continue;
    } else if (initArr[i] === "--discard-prev") {
      if (initArr[i - 1] !== undefined) {
        resultArr.pop();
        continue;
      } else continue;
    } else if (initArr[i] === "--double-next") {
      if (i !== initArr.length - 1) {
        resultArr.push(initArr[i + 1]);
        continue;
      } else continue;
    } else if (initArr[i] === "--double-prev") {
      if (initArr[i - 1] !== undefined) {
        resultArr.push(initArr[i - 1]);
        continue;
      } else continue;
    } else if (initArr[i] === undefined) continue;

    resultArr.push(initArr[i]);
  }

  return resultArr;
}

module.exports = {
  transform,
};
