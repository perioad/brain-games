import readlineSync from 'readline-sync';

export const emptyLine = () => console.log('');

export const askName = () => readlineSync.question('May I have your name? ');

export const askQuestion = (number1, operator = '', number2 = '') => console.log(`Question: ${number1} ${operator} ${number2}`);

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

export const isAnswerCorrect = (answer, userAnswer, name) => {
  if (answer === userAnswer) {
    return 'Correct!';
  }
  if (userAnswer.toString() === 'NaN') {
    return `${name}, you wrote not a number. Try again ;)`;
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!  You can do better!`;
};

export const makeRandomNumber = () => Math.floor(Math.random() * 100) + 1;

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

export const isNumberEven = number => (number % 2 === 0 ? 'yes' : 'no');

export const solveExpression = (number1, operator, number2) => {
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '+') {
    return number1 + number2;
  }
  return number1 * number2;
};

export const toNumber = str => parseInt(str, 10);

export const findGreatCommonDivisor = (number1, number2) => {
  const biggestNumber = number1 > number2 ? number1 : number2;
  let commonDivisor = 1;
  for (let i = 2; i <= biggestNumber / 2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
};

export const placeOfMissedNumber = () => Math.floor(Math.random() * 8) + 2;

export const diffOfArithmeticProgression = () => Math.floor(Math.random() * 30) + 1;

export const numOfArithProgres = (firstNum, placeOfNum, diff) => firstNum + (placeOfNum - 1) * diff;

export const makeArithmProgr = (firstNum, diff, numberOfMissedNum) => {
  let result = '';
  for (let i = 1; i <= 10; i += 1) {
    if (i === numberOfMissedNum) {
      result += '.. ';
    } else {
      result += `${numOfArithProgres(firstNum, i, diff)} `;
    }
  }
  return result;
};
