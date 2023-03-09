#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';
import questionAndAnswer from '../src/prime.js';

const name = greetings();
const textQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
index(textQuestion, questionAndAnswer, name);
