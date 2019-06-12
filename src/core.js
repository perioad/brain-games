import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const roundsQuantity = 3;

export default (task, generateQuestionAndRightAnswer) => {
  console.log('\nWelcome to the Brain Games!\n');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  for (let i = 1; i <= roundsQuantity; i += 1) {
    const pair = generateQuestionAndRightAnswer();
    const question = car(pair);
    const rightAnswer = cdr(pair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}! You can do better!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}!`);
};
