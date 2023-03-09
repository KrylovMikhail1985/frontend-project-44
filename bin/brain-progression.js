#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';
import questionAndAnswer from '../src/progression.js';

const name = greetings();
const textQuestion = 'What number is missing in the progression?';
index(textQuestion, questionAndAnswer, name);
