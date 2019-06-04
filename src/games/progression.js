import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import core from '../core';

const task = 'What number is missing in the progression?';

const getNumberOfProgression = (firstNum, placeOfNum, diff) => firstNum + placeOfNum * diff;

const makeProgression = (firstNum, diff, placeOfMissedNum) => {
  let result = '';
  for (let i = 0; i <= 9; i += 1) {
    if (i === placeOfMissedNum) {
      result += '.. ';
    } else {
      result = `${result}${getNumberOfProgression(firstNum, i, diff)} `;
    }
  }
  return result;
};

const generateQuestionAndRightAnswer = () => {
  const firstNumber = utils.makeRandomNumber(1, 100);
  const placeOfMissedNum = utils.makeRandomNumber(2, 9);
  const difference = utils.makeRandomNumber(15, 30);
  const question = makeProgression(firstNumber, difference, placeOfMissedNum);
  const rightAnswer = getNumberOfProgression(firstNumber, placeOfMissedNum, difference).toString();
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
