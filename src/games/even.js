import { cons } from 'hexlet-pairs';
import makeRandomNumber from '../utils';
import core from '../core';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateQuestionAndRightAnswer = () => {
  const question = makeRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
