import { cons } from 'hexlet-pairs';
import * as games from '../game_module';

const task = 'What is the result of the expression?';

const makeRandomOperator = () => {
  const operatorNumber = Math.floor(Math.random() * 3);
  if (operatorNumber === 0) {
    return '-';
  }
  if (operatorNumber === 1) {
    return '+';
  }
  return '*';
};

const solveExpression = (number1, operation, number2) => {
  if (operation === '-') {
    return number1 - number2;
  }
  if (operation === '+') {
    return number1 + number2;
  }
  return number1 * number2;
};

const generator = () => {
  const number1 = games.makeRandomNumber();
  const number2 = games.makeRandomNumber();
  const operation = makeRandomOperator();
  const expression = games.makeExpression(number1, operation, number2);
  const solvedExpression = solveExpression(number1, operation, number2).toString();
  const pair = cons(expression, solvedExpression);
  return pair;
};

export default () => {
  games.core(task, generator);
};
