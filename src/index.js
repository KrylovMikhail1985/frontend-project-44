export default (textQuestion, gameQuestionAndAnswer, name) => {
  console.log(textQuestion);
  const numberOfAttempts = 3;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [userAnswer, correctAnswer] = gameQuestionAndAnswer();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
