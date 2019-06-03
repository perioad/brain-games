import { cons } from 'hexlet-pairs';
import * as games from '../game_module';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');

const generator = () => {
  const number = games.makeRandomNumber();
  const rightAnswer = isNumberEven(number);
  const pair = cons(number, rightAnswer);
  return pair;
};

export default () => {
  games.core(task, generator);
};
