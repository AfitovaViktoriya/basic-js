const { NotImplementedError } = require("../extensions/index.js");

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
  let names = [];
  if (!Array.isArray(members)) return false;

  members.forEach((el) => {
    if (typeof el !== "string") return false;
    let elemTrimmed = el.trim();
    let elemToUpperCase = elemTrimmed[0].toUpperCase();
    names.push(elemToUpperCase);
  });

  names.sort();
  let result = names.join("");
  return result;
}

module.exports = {
  createDreamTeam,
};
