import { cons } from 'hexlet-pairs';
import * as games from '../game_module';

const task = 'What number is missing in the progression?';


const placeOfMissedNumber = () => Math.floor(Math.random() * 8) + 2;

const diffOfArithmeticProgression = () => Math.floor(Math.random() * 30) + 1;

const numberOfArithProgres = (firstNum, placeOfNum, diff) => firstNum + (placeOfNum - 1) * diff;

const makeArithmProgr = (firstNum, diff, numberOfMissedNum) => {
  let result = '';
  for (let i = 1; i <= 10; i += 1) {
    if (i === numberOfMissedNum) {
      result += '.. ';
    } else {
      result += `${numberOfArithProgres(firstNum, i, diff)} `;
    }
  }
  return result;
};

const generator = () => {
  const firstNumber = games.makeRandomNumber();
  const placeOfMissedNum = placeOfMissedNumber();
  const difference = diffOfArithmeticProgression();
  const arithmProgr = makeArithmProgr(firstNumber, difference, placeOfMissedNum);
  const rightAnswer = numberOfArithProgres(firstNumber, placeOfMissedNum, difference).toString();
  const pair = cons(arithmProgr, rightAnswer);
  return pair;
};

export default () => {
  games.core(task, generator);
};
