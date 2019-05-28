#!/usr/bin/env node

import startGame from '../games/even';
import { emptyLine } from '../game_module';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');

emptyLine();

startGame();
