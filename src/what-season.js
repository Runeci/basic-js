const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  }

  if (!(date instanceof Date)) {
    throw new Error()
  }

  try {
    date.valueOf()
  } catch (e) {
    throw new Error(e)
  }

  let month = date.getMonth();
  let season = '';
  switch (month) {
    case 0:
    case 1:
    case 11:
      season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'fall';
      break;
    default: season = false;

  }

  return season;
};
