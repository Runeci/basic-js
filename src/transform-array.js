const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error()
  }

  const resultArr = [...arr];

  resultArr.forEach((item, index) => {
    if (item === '--double-next') {
      if (index !== (resultArr.length - 1)) {
        resultArr.splice(index, 1, resultArr[index + 1])
      } else {
        resultArr.splice(index, 1, null)
      }
    }

    if (item === '--double-prev') {
      if (index !== 0) {
        resultArr.splice(index, 1, resultArr[index - 1])
      } else {
        resultArr.splice(index, 1, null)
      }
    }

    if (item === '--discard-next') {
      if (index !== resultArr.length - 1) {
        resultArr.splice(index, 2, null, null)
      } else {
        resultArr.splice(index, 1, null)
      }
    }

    if (item === '--discard-prev') {
      if (index !== 0) {
        resultArr.splice(index - 1, 2, null, null);
      } else {
        resultArr.splice(index, 1, null)
      }
    }
  });


  return resultArr.filter(v => v !== null);

};
