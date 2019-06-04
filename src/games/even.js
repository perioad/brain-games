import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import core from '../core';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const generateQuestionAndRightAnswer = () => {
  const question = utils.makeRandomNumber(1, 100);
  const rightAnswer = utils.booleanToYesOrNo(isEven(question));
  return cons(question, rightAnswer);
};

export default () => {
  core(task, generateQuestionAndRightAnswer);
};
