import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

export default () => {
  console.log('\nWelcome to the Brain Games!\n');
  const name = askName();
  greeting(name);
};
