const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix
      .reduce((acc, curr) => {
        return  acc.concat(curr);
      }, [])
      .filter(i => i === '^^')
      .length
};
