#!/usr/bin/env node

import startGame from '../games/progression';
import { emptyLine } from '../game_module';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?');

emptyLine();

startGame();
