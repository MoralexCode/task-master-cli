#!/usr/bin/env node

import './utils/global.js';
import meow from 'meow';
import path from 'path';
import {ask} from './utils/ask.js';
import {debug} from './utils/debug.js';
import {dependencies} from './utils/dependencies.js';
import {helperText, options} from './utils/helper.js';
import {welcome} from './utils/welcome.js';
welcome();
const cli = meow(helperText, options);
const input = cli.input;
const flags = cli.flags;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

(async () => {
	input.includes('help') && cli.showHelp(0);
	if (input.includes('add')) {
		const spinner = ora('Creating task...\n').start();
		spinner.succeed(`Task created!`);
	}
	if (input.includes('done')) {
		console.log(input);
		const [, id] = input;
		const spinner = ora(`This ${id} task it´s done`).start();
		spinner.succeed(`Task ${id} it´s Done!`);
	}

	//Debug info if nedeed.
	debug(flags.debug, input, flags);
})();
