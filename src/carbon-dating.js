const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if (activity !== 'string'){
    return false
  }
  let computeAge = activity => Math.ceil(Math.log(MODERN_ACTIVITY/activity)/(Math.log(2)/HALF_LIFE_PERIOD));
  return computeAge(activity)
};
