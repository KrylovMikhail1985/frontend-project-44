import readLine from 'readline-sync';
import getRandomInt from './support.js';

export default () => {
  const maxNumber = 11;
  let number1 = getRandomInt(maxNumber);
  const number2 = getRandomInt(maxNumber);

  const progression = [number1];

  const maxRandom = 3;
  const numberOfOperation = getRandomInt(maxRandom);
  const maxIndex = 10;
  switch (numberOfOperation) {
    case 0:
      for (let i = 0; i < maxIndex; i += 1) {
        number1 += number2;
        progression.push(number1);
      }
      break;
    case 1:
      for (let i = 0; i < 10; i += 1) {
        number1 -= number2;
        progression.push(number1);
      }
      break;
    default:
      for (let i = 0; i < 10; i += 1) {
        number1 *= number2;
        progression.push(number1);
      }
  }

  const index = getRandomInt(maxIndex);
  const correctAnswer = progression[index];
  progression[index] = '..';

  console.log(`Question: ${progression[0]} ${progression[1]} ${progression[2]} ${progression[3]} ${progression[4]} `
    + `${progression[5]} ${progression[6]} ${progression[7]} ${progression[8]} ${progression[9]}`);

  const userAnswer = readLine.question('Your answer: ');

  return [userAnswer, correctAnswer.toString()];
};
