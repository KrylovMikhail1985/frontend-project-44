import readLine from 'readline-sync';
import getRandomInt from './support.js';

export default () => {
  const maxNumber = 20;
  const number = getRandomInt(maxNumber) + 1;
  //  show question
  console.log(`Question: ${number}`);
  //  ask answer
  const userAnswer = readLine.question('Your answer: ');
  let correctAnswer = 'yes';
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      correctAnswer = 'no';
    }
  }
  //  return  user's answer and correct answer
  return [userAnswer, correctAnswer];
};
