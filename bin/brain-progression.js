#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';
import progressionQuestion from '../src/progression.js';

const name = greetings();
const textQuestion = 'What number is missing in the progression?';
index(textQuestion, progressionQuestion, name);
