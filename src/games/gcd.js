import * as games from '../game_module';

const welcome = '\nWelcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n';

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

const number1 = games.makeRandomNumber();

const number2 = games.makeRandomNumber();

const expression = games.makeExpression(number1, number2);

const rightAnswer = findGreatCommonDivisor(number1, number2).toString();

export default () => {
  games.core(welcome, rightAnswer, expression);
};
