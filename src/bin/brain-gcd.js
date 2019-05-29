#!/usr/bin/env node

import startGame from '../games/gcd';
import { emptyLine } from '../game_module';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');

emptyLine();

startGame();
