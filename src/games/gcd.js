import { cons } from 'hexlet-pairs';
import makeRandomNumber from '../utils';
import core from '../core';

const task = 'Find the greatest common divisor of given numbers.';

const findGreatCommonDivisor = (a, b) => {
  const biggestNumber = a > b ? a : b;
  let commonDivisor = 1;
  for (let i = 2; i <= biggestNumber / 2; i += 1) {
    if (a % i === 0 && b % i === 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
};

const generateQuestionAndRightAnswer = () => {
  const number1 = makeRandomNumber(1, 100);
  const number2 = makeRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = findGreatCommonDivisor(number1, number2).toString();
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
