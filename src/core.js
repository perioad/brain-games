import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

const askQuestion = expression => console.log(`Question: ${expression}`);

const getUserAnswer = () => readlineSync.question('Your answer: ');

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

const isAnswerCorrect = (answer, userAnswer, name) => {
  if (answer === userAnswer) {
    return 'Correct!';
  }
  if (userAnswer.toString() === 'NaN') {
    return `${name}, you wrote not a number. Try again ;)`;
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!  You can do better!`;
};

const welcome = task => console.log(`\nWelcome to the Brain Games!\n${task}\n`);

export default (task, generateQuestionAndRightAnswer) => {
  welcome(task);
  const userName = askName();
  greeting(userName);
  console.log('');
  let correctAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const pair = generateQuestionAndRightAnswer();
    const question = car(pair);
    const rightAnswer = cdr(pair);
    askQuestion(question);
    const userAnswer = getUserAnswer();
    const isUserCorrect = isAnswerCorrect(rightAnswer, userAnswer, userName);
    console.log(isUserCorrect);
    console.log('');
    if (isUserCorrect !== 'Correct!') {
      break;
    }
    correctAnswers += 1;
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
