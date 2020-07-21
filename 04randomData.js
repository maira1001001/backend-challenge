/** @format */

const { logMessage, logAnswer, logError } = require('./consoleMessages');
const mRandomElements = require('./mRandomElements');
const { array } = require('prop-types');

/**
 * 4. Given a one dimensional array of data write a function that return M random elements of that array.
 * @param {Array} array any array of elements
 * @param {number} m the number of elements to get from the array
 * @returns {array} m randoms of the given array
 */
const randomData = (arrayOfData, m) => {
  if (arrayOfData.length < m) return [];
  return mRandomElements(arrayOfData, m);
};

logMessage('Executing fourth quiz...');
const data = 'Hello! I have super powers!, and I love cryptokyties';
const arrayOfData = data.split(' ');
logMessage(`m: 8; array of data: ${data}`);
logAnswer(randomData(arrayOfData, 9));

logMessage(`m: 1; array of data: ${data}`);
logAnswer(randomData(arrayOfData, 1));

logMessage(`m: 4; array of data: ${data}`);
logAnswer(randomData(arrayOfData, 4));

logMessage(`m: 100; array of data: ${data}`);
logError(`No way to get 100 elements of ${arrayOfData.length}`);
logError(randomData(arrayOfData, 100));
