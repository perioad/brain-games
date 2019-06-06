import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import core from '../core';

const task = 'What number is missing in the progression?';

const getTermOfProgression = (initialTerm, placeOfTerm, diff) => initialTerm + placeOfTerm * diff;

const makeProgression = (initialTerm, diff, placeOfMissedTerm) => {
  let result = '';
  for (let i = 0; i <= 9; i += 1) {
    if (i === placeOfMissedTerm) {
      result += '.. ';
    } else {
      result = `${result}${getTermOfProgression(initialTerm, i, diff)} `;
    }
  }
  return result;
};

const generateQuestionAndRightAnswer = () => {
  const initalTerm = utils.makeRandomNumber(1, 100);
  const placeOfMissedTerm = utils.makeRandomNumber(2, 9);
  const difference = utils.makeRandomNumber(15, 30);
  const question = makeProgression(initalTerm, difference, placeOfMissedTerm);
  const rightAnswer = getTermOfProgression(initalTerm, placeOfMissedTerm, difference).toString();
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
