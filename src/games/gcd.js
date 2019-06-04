import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import core from '../core';

const task = 'Find the greatest common divisor of given numbers.';

const findGreatCommonDivisor = (number1, number2) => {
  const biggestNumber = number1 > number2 ? number1 : number2;
  let commonDivisor = 1;
  for (let i = 2; i <= biggestNumber / 2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
};

const generateQuestionAndRightAnswer = () => {
  const number1 = utils.makeRandomNumber(1, 100);
  const number2 = utils.makeRandomNumber(1, 100);
  const question = utils.makeExpression(number1, number2);
  const rightAnswer = findGreatCommonDivisor(number1, number2).toString();
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
