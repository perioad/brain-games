import { cons } from 'hexlet-pairs';
import * as games from '../game_module';

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

const generator = () => {
  const number1 = games.makeRandomNumber();
  const number2 = games.makeRandomNumber();
  const expression = games.makeExpression(number1, number2);
  const rightAnswer = findGreatCommonDivisor(number1, number2).toString();
  const pair = cons(expression, rightAnswer);
  return pair;
};

export default () => {
  games.core(task, generator);
};
