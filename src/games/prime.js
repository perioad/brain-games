import * as games from '../game_module';

const welcome = '\nWelcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (number) => {
  let counter = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  return counter === 2 ? 'yes' : 'no';
};

const number = games.makeRandomNumber();

const rightAnswer = isPrime(number);

export default () => {
  games.core(welcome, rightAnswer, number);
};
