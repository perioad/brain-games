import * as games from '../game_module';

export default () => {
  const userName = games.askNameAndGreeting();
  let correctAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = games.makeRandomNumber();
    const placeOfMissedNumber = games.placeOfMissedNumber();
    const difference = games.diffOfArithmeticProgression();
    const arithmProgr = games.makeArithmProgr(firstNumber, difference, placeOfMissedNumber);
    games.askQuestion(arithmProgr);
    const userAnswer = games.toNumber(games.getUserAnswer());
    const missedNumber = games.numOfArithProgres(firstNumber, placeOfMissedNumber, difference);
    const isUserCorrect = games.isAnswerCorrect(missedNumber, userAnswer, userName);
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
