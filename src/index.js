import calcQuestion from './calc.js';
import evenQuestion from './even.js';

const question = (nameOfTheGame) => {
  switch (nameOfTheGame) {
    case 'even':
      return evenQuestion();
    case 'calc':
      return calcQuestion();
    default:
      return null;
  }
};

const textQuestion = (nameOfTheGame) => {
  switch (nameOfTheGame) {
    case 'even':
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case 'calc':
      return 'What is the result of the expression?';
    default:
      return null;
  }
};

export default (nameOfTheGame) => {
  console.log(textQuestion(nameOfTheGame));
  const numberOfAttempts = 3;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const attempt = question(nameOfTheGame);
    if (attempt[0] !== attempt[1]) {
      console.log(`'${attempt[0]}' is wrong answer ;(. Correct answer was '${attempt[1]}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};
