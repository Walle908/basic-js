const { NotImplementedError } = require("../lib");

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
function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;
  const newArr = members.map((item) => {
    if (typeof item === "string") return item.trim().slice(0, 1).toUpperCase();
  });
  return newArr.sort((a, b) => (a > b ? 1 : -1)).join("");
}

module.exports = {
  createDreamTeam,
};
