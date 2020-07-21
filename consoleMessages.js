/** @format */

const logMessage = (message) => {
  console.log('\x1b[36m%s\x1b[0m', message);
};

const logAnswer = (value) => {
  console.log('\x1b[33m%s\x1b[0m', value);
};

const logError = (value) => {
  console.log('\x1b[31m', value);
};

module.exports = {
  logAnswer: logAnswer,
  logError: logError,
  logMessage: logMessage,
};
