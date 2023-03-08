import readLine from 'readline-sync';
import getRandomInt from './support.js';

export default () => {
  const maxNumber = 20;
  const number1 = getRandomInt(maxNumber);
  const number2 = getRandomInt(maxNumber);

  let userAnswer;
  let correctAnswer;

  const maxRandom = 3;
  const numberOfOperation = getRandomInt(maxRandom);
  switch (numberOfOperation) {
    case 0:
      console.log(`Question: ${number1} + ${number2}`);
      userAnswer = readLine.question('Your answer: ');
      correctAnswer = number1 + number2;
      break;
    case 1:
      console.log(`Question: ${number1} - ${number2}`);
      userAnswer = readLine.question('Your answer: ');
      correctAnswer = number1 - number2;
      break;
    default:
      console.log(`Question: ${number1} * ${number2}`);
      userAnswer = readLine.question('Your answer: ');
      correctAnswer = number1 * number2;
      break;
  }
  return [userAnswer, correctAnswer.toString()];
};
