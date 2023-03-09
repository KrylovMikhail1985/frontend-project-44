#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';
import calcQuestion from '../src/calc.js';

const name = greetings();
const textQuestion = 'What is the result of the expression?';
index(textQuestion, calcQuestion, name);
