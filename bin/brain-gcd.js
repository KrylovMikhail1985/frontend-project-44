#!/usr/bin/env node

import greetings from '../src/cli.js';
import index from '../src/index.js';
import gcdQuestion from '../src/gcd.js';

const name = greetings();
const textQuestion = 'Find the greatest common divisor of given numbers.';
index(textQuestion, gcdQuestion, name);
