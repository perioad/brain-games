import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import core from '../core';

const task = 'What is the result of the expression?';

const makeRandomOperator = () => {
  const operatorNumber = utils.makeRandomNumber(0, 2);
  if (operatorNumber === 0) {
    return '-';
  }
  if (operatorNumber === 1) {
    return '+';
  }
  return '*';
};

const solveExpression = (number1, operation, number2) => {
  switch (operation) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    default:
      return number1 * number2;
  }
};

const generateQuestionAndRightAnswer = () => {
  const number1 = utils.makeRandomNumber(0, 100);
  const number2 = utils.makeRandomNumber(0, 100);
  const operator = makeRandomOperator();
  const question = utils.makeExpression(number1, operator, number2);
  const rightAnswer = solveExpression(number1, operator, number2).toString();
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
