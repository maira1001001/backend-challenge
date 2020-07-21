/** @format */

const { logMessage, logAnswer, logError } = require('./consoleMessages');
const mRandomElements = require('./mRandomElements');

/**
 * 3. Write a function that returns M random non-negative integers less than some value N.
 * Each integer must also be unique.
 * @param {number} n the maximun value of the range
 * @param {number} m the number of random numbers, where m < n
 * @returns {Array} Array of non-negative integers which represets the random values less than N
 */
const randomNonNegativeInt = (n, m) => {
  if (n < m) logError('Error: n should be less than m');
  else {
    const numbersInOrders = Array.from(Array(n).keys());
    return mRandomElements(numbersInOrders, m);
  }
};

logMessage('3 non-negative random integers less than 9');
logAnswer(randomNonNegativeInt(9, 3));

logMessage('5 non-negative random integers less than 5');
logAnswer(randomNonNegativeInt(5, 5));

logMessage('1 non-negative random integer less than 20');
logAnswer(randomNonNegativeInt(20, 1));
