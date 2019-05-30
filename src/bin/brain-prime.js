#!/usr/bin/env node

import startGame from '../games/prime';
import { emptyLine } from '../game_module';

console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');

emptyLine();

startGame();
