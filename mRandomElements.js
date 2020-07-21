/** @format */

const calculateRandom = (n, m, i) => {
  const range = parseInt(n / m);
  let endNumber;
  if (i !== m - 1) {
    endNumber = range;
  } else {
    if (n % m !== 0) {
      endNumber = range + (n % m);
    } else {
      endNumber = range;
    }
  }
  return Math.floor(Math.random() * endNumber);
};

/**
 * Given an array, return m random of the given array
 * @param {Array} array any array of elements
 * @param {number} m the number of elements to get from the array
 * @returns {array} m randoms of the given array
 */
const mRandomElements = (array, m) => {
  let result = [];
  const n = array.length;
  const range = parseInt(n / m);

  for (let i = 0; i < m; i++) {
    random = calculateRandom(n, m, i);
    position = i * range + random;
    result.push(array[position]);
  }
  return result;
};

module.exports = mRandomElements;
