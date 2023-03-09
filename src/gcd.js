import readLine from 'readline-sync';
import getRandomInt from './support.js';

const gcd = (x, y) => {
  for (let i = x; i > 0; i -= 1) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return 1;
};

export default () => {
  const maxNumber = 100;
  const number1 = getRandomInt(maxNumber) + 1;
  const number2 = getRandomInt(maxNumber) + 1;
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readLine.question('Your answer: ');
  const correctAnswer = gcd(number1, number2);
  const correctAnswerAsString = correctAnswer.toString();
  return [userAnswer, correctAnswerAsString];
};
