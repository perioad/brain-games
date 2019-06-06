import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';


const isAnswerCorrect = (rightAnswer, userAnswer, userName) => {
  if (rightAnswer === userAnswer) {
    return 'Correct!';
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!  You can do better!`;
};


export default (task, generateQuestionAndRightAnswer) => {
  console.log(`\nWelcome to the Brain Games!\n${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const roundsQuantity = 3;
  for (let i = 1; i <= roundsQuantity; i += 1) {
    const pair = generateQuestionAndRightAnswer();
    const question = car(pair);
    const rightAnswer = cdr(pair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isUserCorrect = isAnswerCorrect(rightAnswer, userAnswer, userName);
    console.log(isUserCorrect);
    console.log('');
    if (isUserCorrect !== 'Correct!') {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
