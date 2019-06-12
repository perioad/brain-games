import { cons } from 'hexlet-pairs';
import makeRandomNumber from '../utils';
import core from '../core';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgressionWithoutOneTerm = (initialTerm, diff, missingTermPlace) => {
  let result = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingTermPlace) {
      result = `${result} ..`;
    } else {
      result = `${result} ${initialTerm + (i - 1) * diff}`;
    }
  }
  return result;
};

const generateQuestionAndRightAnswer = () => {
  const initialTerm = makeRandomNumber(1, 100);
  const missingTermPlace = makeRandomNumber(1, progressionLength);
  const difference = makeRandomNumber(15, 30);
  const question = makeProgressionWithoutOneTerm(initialTerm, difference, missingTermPlace);
  const rightAnswer = `${initialTerm + (missingTermPlace - 1) * difference}`;
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
