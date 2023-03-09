#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';
import evenQuestion from '../src/even.js';

const name = greetings();
const textQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
index(textQuestion, evenQuestion, name);
