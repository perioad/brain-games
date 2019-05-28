import readlineSync from 'readline-sync';

export const emptyLine = () => console.log('');

export const askName = () => readlineSync.question('May I have your name? ');

export const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

export const makeRandomNumber = () => Math.floor(Math.random() * 101);

export const makeRandomOperator = () => {
  const operatorNumber = Math.floor(Math.random() * 3);
  if (operatorNumber === 0) {
    return '-';
  }
  if (operatorNumber === 1) {
    return '+';
  }
  return '*';
};

export const solvedExpression = (number1, operator, number2) => {
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '+') {
    return number1 + number2;
  }
  return number1 * number2;
};

export const question = (number1, operator = '', number2 = '') => console.log(`Question: ${number1} ${operator} ${number2}`);

export const answer = () => readlineSync.question('Your answer: ');

export const toNumber = str => parseInt(str, 10);

export const isAnswerCorrectEven = (number, userAnswer, name) => {
  const isEven = number % 2 === 0;
  if (isEven === true && userAnswer === 'yes') {
    return 'Correct!';
  }
  if (isEven === true && userAnswer === 'no') {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}! You can do better!`;
  }
  if (isEven === false && userAnswer === 'no') {
    return 'Correct!';
  }
  if (isEven === false && userAnswer === 'yes') {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!  You can do better!`;
  }
  return `Wrong :(\nLet's try again, ${name}! You can do better!`;
};

export const isAnswerCorrectCalc = (number, userAnswer, name) => {
  if (number === userAnswer) {
    return 'Correct!';
  }
  if (userAnswer.toString() === 'NaN') {
    return `${name}, you wrote not a number. Try again ;)`;
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${number}'.\nLet's try again, ${name}!  You can do better!`;
};
