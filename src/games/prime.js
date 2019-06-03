import { cons } from 'hexlet-pairs';
import * as games from '../game_module';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let counter = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  return counter === 2 ? 'yes' : 'no';
};

const generator = () => {
  const number = games.makeRandomNumber();
  const rightAnswer = isPrime(number);
  const pair = cons(number, rightAnswer);
  return pair;
};

export default () => {
  games.core(task, generator);
};
