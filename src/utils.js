export const booleanToYesOrNo = boolean => (boolean === true ? 'yes' : 'no');

export const makeRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const makeExpression = (number1, operator = '', number2 = '') => `${number1} ${operator} ${number2}`;
