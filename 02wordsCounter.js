/**
 * @format
 */
const fs = require('fs');
const path = require('path');
const { logMessage, logAnswer } = require('./consoleMessages');

const findFile = (fileName) => {
  const filePath = path.join(__dirname, fileName);
  return fs.promises.readFile(filePath, { encoding: 'utf-8' });
};

const splitDataByWhiteSpaces = (data) => {
  return data.split(/\s+/);
};

const removeNonCharacters = (str) => {
  return str.replace(/^([^a-zA-Z])+/, '').replace(/([^a-zA-z]+)$/, '');
};

const incrementOccurences = (numberOfOccurrences) => {
  return (numberOfOccurrences && numberOfOccurrences + 1) || 1;
};

const countWordOccurrencesFrom = (data) => {
  const strs = splitDataByWhiteSpaces(data); //splitStringsByByRemovingSpaces(data);
  let occurrences = {};
  for (const str of strs) {
    const word = removeNonCharacters(str);
    if (word) {
      occurrences[word] = incrementOccurences(occurrences[word]);
    }
  }
  return occurrences;
};

/**
 * Write a quick and dirty program (not just a standalone function)
 * to print a count of all the different "words" in a text file.
 * Use any definition of word that makes logical sense or makes your job easy.
 * @param {String} inputFile File name to count the words in it
 * @returns {Object} represents the occurrences of each word appeared in the file,
 *                   where the key is a word in the given file
 *                   and the value is the occurrences of this word
 */
const wordsCounter = (inputFile) => {
  return findFile(inputFile)
    .then((data) => {
      const occurrences = countWordOccurrencesFrom(data);
      for (const [word, occurrence] of Object.entries(occurrences))
        console.log(word, occurrence);
    })
    .catch((err) => console.log(err));
};

// logMessage('Executing second quiz...');
// wordsCounter('02inputFile.txt');

module.exports = wordsCounter;
