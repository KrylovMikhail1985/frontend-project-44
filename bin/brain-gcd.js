#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';

const name = greetings();
const allAnswersIsCorrect = index('gcd');
if (allAnswersIsCorrect) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
