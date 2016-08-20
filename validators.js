function isNumber(num) {
  return !isNaN(Number(num));
}

function isArray(arr) {
  return Array.isArray(arr);
}

function isArrayOfNumbers(arr) {
  return isArray(arr) && arr.every(isNumber);
}

module.exports = {
  isNumber,
  isArray,
  isArrayOfNumbers
};