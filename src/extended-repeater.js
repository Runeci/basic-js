const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = argToString(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const additionString = createAddition(addition, additionRepeatTimes, additionSeparator);
  const resultArray = [];

  for (let i = 0; i < repeatTimes; i++) {
    resultArray.push(`${argToString(str)}${additionString}`);
  }


  return resultArray.join(separator);

  function createAddition(addition, additionRepeatTimes, additionSeparator) {
    let resultArray = [];

    for (let i = 0; i < additionRepeatTimes; i++) {
      resultArray.push(addition);
    }

    return resultArray.join(additionSeparator);

  }

  function argToString(arg) {
    switch (arg) {
      case null:
        return 'null';
      case undefined:
        return '';
      default:
        return arg.toString();
    }
  }
};
  