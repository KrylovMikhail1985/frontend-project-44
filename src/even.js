import readLine from 'readline-sync';

function getRandomInt() {
  const max = 30;
  return Math.floor(Math.random() * max);
}

const question = () => {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const userAnswer = readLine.question('Your answer: ');
  let correctAnswer = 'no';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  }
  return [userAnswer, correctAnswer];
};

export default () => {
  const userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numberOfAttempts = 3;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const attempt = question();
    if (attempt[0] !== attempt[1]) {
      console.log(`'${attempt[0]}' is wrong answer ;(. Correct answer was '${attempt[1]}'.`);
      return '';
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
