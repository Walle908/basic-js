const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  if (typeof str !== "string") {
    str = String(str);
  }
  if (typeof addition !== "string") {
    addition = String(addition);
  }

  const additionLine = new Array(additionRepeatTimes)
    .fill(addition)
    .join(`${additionSeparator}`);
  const line = new Array(repeatTimes)
    .fill(str + additionLine)
    .join(`${separator}`);

  return line;
}

module.exports = {
  repeater,
};
