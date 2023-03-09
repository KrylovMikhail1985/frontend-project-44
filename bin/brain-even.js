#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';
import questionAndAnswer from '../src/even.js';

const name = greetings();
const textQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
index(textQuestion, questionAndAnswer, name);
