import * as games from '../game_module';

const welcome = '\nWelcome to the Brain Games!\nWhat number is missing in the progression?\n';


const placeOfMissedNumber = () => Math.floor(Math.random() * 8) + 2;

const diffOfArithmeticProgression = () => Math.floor(Math.random() * 30) + 1;

const numOfArithProgres = (firstNum, placeOfNum, diff) => firstNum + (placeOfNum - 1) * diff;

const makeArithmProgr = (firstNum, diff, numberOfMissedNum) => {
  let result = '';
  for (let i = 1; i <= 10; i += 1) {
    if (i === numberOfMissedNum) {
      result += '.. ';
    } else {
      result += `${numOfArithProgres(firstNum, i, diff)} `;
    }
  }
  return result;
};


const firstNumber = games.makeRandomNumber();

const placeOfMissedNum = placeOfMissedNumber();

const difference = diffOfArithmeticProgression();

const arithmProgr = makeArithmProgr(firstNumber, difference, placeOfMissedNum);

const rightAnswer = numOfArithProgres(firstNumber, placeOfMissedNum, difference).toString();

export default () => {
  games.core(welcome, rightAnswer, arithmProgr);
};
