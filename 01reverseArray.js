/** @format */

const { logMessage, logAnswer } = require('./consoleMessages');

/**
 * Quiz 1:  Given a one dimensional array of data write a function
 * that returns a new array with the data reversed.
 * Don't just use the reverse function that is built into your environment.
 *
 * @format
 * @param {Array} array
 * @returns Array with the data reversed
 */
const reverseArray = (array) => {
  let copyOfArray = array;
  let reversed = [];
  while (copyOfArray.length > 0) {
    reversed.push(copyOfArray.pop());
  }
  return reversed;
};

logMessage('Executing first quiz...');
logMessage('Reverse empty array');
logAnswer(reverseArray([]));
logMessage('Reverse array [1,2,3,4]');
logAnswer(reverseArray([1, 2, 3, 4]));
