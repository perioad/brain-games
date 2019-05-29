import * as games from '../game_module';

export default () => {
  const userName = games.askName();
  games.greeting(userName);
  games.emptyLine();
  let correctAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number1 = games.makeRandomNumber();
    const number2 = games.makeRandomNumber();
    games.askQuestion(number1, number2);
    const commonDivisor = games.findGreatCommonDivisor(number1, number2);
    const userAnswer = games.toNumber(games.getUserAnswer());
    const isUserCorrect = games.isAnswerCorrect(commonDivisor, userAnswer, userName);
    console.log(isUserCorrect);
    games.emptyLine();
    if (isUserCorrect !== 'Correct!') {
      break;
    }
    correctAnswers += 1;
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
