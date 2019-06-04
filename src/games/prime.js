import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import core from '../core';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let counter = 0;
  for (let i = 1; i <= number / 2; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  return counter === 1;
};

const generateQuestionAndRightAnswer = () => {
  const question = utils.makeRandomNumber(1, 100);
  const rightAnswer = utils.booleanToYesOrNo(isPrime(question));
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
