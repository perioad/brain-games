import * as games from '../game_module';

export default () => {
  const userName = games.askName();
  games.greeting(userName);
  games.emptyLine();
  let correctAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const firstOperand = games.makeRandomNumber();
    const secondOperand = games.makeRandomNumber();
    const operator = games.makeRandomOperator();
    games.question(firstOperand, operator, secondOperand);
    const solvedExpression = games.solvedExpression(firstOperand, operator, secondOperand);
    const userAnswer = games.toNumber(games.answer());
    const isUserCorrect = games.isAnswerCorrectCalc(solvedExpression, userAnswer, userName);
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
