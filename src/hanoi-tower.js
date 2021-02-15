const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(number, speed) {
  let turn = Math.pow(2, number) - 1;
  let time = Math.floor(turn * 3600 / speed);
  return {turns: turn, seconds: time}
};
