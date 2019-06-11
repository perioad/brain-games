import { cons } from 'hexlet-pairs';
import makeRandomNumber from '../utils';
import core from '../core';

const task = 'What is the result of the expression?';

const operators = '-+*';

const makeRandomOperator = () => {
  const maxIndex = operators.length - 1;
  const indexOfOperator = makeRandomNumber(0, maxIndex);
  return operators[indexOfOperator];
};

const solveExpression = (operator, a, b) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    default:
      return a * b;
  }
};

const generateQuestionAndRightAnswer = () => {
  const leftOperand = makeRandomNumber(0, 100);
  const rightOperand = makeRandomNumber(0, 100);
  const operator = makeRandomOperator();
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const rightAnswer = solveExpression(operator, leftOperand, rightOperand).toString();
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
