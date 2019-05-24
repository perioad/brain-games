import readlineSync from 'readline-sync';

export const emptyLine = () => console.log('');

export const askName = () => readlineSync.question('May I have your name? ');

export const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

export const makeRandomNumber = () => Math.floor(Math.random() * 101);

export const question = number => console.log(`Question: ${number}`);

export const answer = () => readlineSync.question('Your answer: ');

export const isAnswerCorrect = (number, userAnswer, name) => {
  const isEven = number % 2 === 0;
  if (isEven === true && userAnswer === 'yes') {
    return 'Correct!';
  }
  if (isEven === true && userAnswer === 'no') {
    return `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}! You can do better!`;
  }
  if (isEven === false && userAnswer === 'no') {
    return 'Correct!';
  }
  if (isEven === false && userAnswer === 'yes') {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!  You can do better!`;
  }
  return `Wrong :(\nLet's try again, ${name}! You can do better!`;
};

export const check = () => {
  const userName = askName();
  greeting(userName);
  emptyLine();
  let correctAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = makeRandomNumber();
    question(number);
    const userAnswer = answer();
    const isUserCorrect = isAnswerCorrect(number, userAnswer, userName);
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
