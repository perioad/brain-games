import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const emptyLine = () => console.log('');

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

export const askNameAndGreeting = () => {
  const name = askName();
  greeting(name);
  emptyLine();
  return name;
};

export const makeRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const makeExpression = (number1, operator = '', number2 = '') => `${number1} ${operator} ${number2}`;

export const core = (task, generator) => {
  welcome(task);
  const userName = askNameAndGreeting();
  let correctAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const pair = generator();
    askQuestion(car(pair));
    const userAnswer = getUserAnswer();
    const isUserCorrect = isAnswerCorrect(cdr(pair), userAnswer, userName);
    console.log(isUserCorrect);
    emptyLine();
    if (isUserCorrect !== 'Correct!') {
      break;
    }
    correctAnswers += 1;
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
