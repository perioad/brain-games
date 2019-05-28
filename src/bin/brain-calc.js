#!/usr/bin/env node

import startGame from '../games/calc';
import { emptyLine } from '../game_module';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');

emptyLine();

startGame();
