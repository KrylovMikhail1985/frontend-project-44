import readLine from 'readline-sync';
import getRandomInt from './support.js';

export default () => {
  const maxNumber = 30;
  const number = getRandomInt(maxNumber);
  //  show question
  console.log(`Question: ${number}`);
  //  ask answer
  const userAnswer = readLine.question('Your answer: ');
  let correctAnswer = 'no';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  }
  //  return  user's answer and correct answer
  return [userAnswer, correctAnswer];
};
