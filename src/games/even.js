import * as games from '../game_module';

const welcome = '\nWelcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n';

const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');

const number = games.makeRandomNumber();

const rightAnswer = isNumberEven(number);

export default () => {
  games.core(welcome, rightAnswer, number);
};
