import * as games from '../game_module';

const welcome = '\nWelcome to the Brain Games!\nWhat is the result of the expression?\n';

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

const number1 = games.makeRandomNumber();

const number2 = games.makeRandomNumber();

const operation = makeRandomOperator();

const expression = games.makeExpression(number1, operation, number2);

const solvedExpression = solveExpression(number1, operation, number2).toString();

export default () => {
  games.core(welcome, solvedExpression, expression);
};
