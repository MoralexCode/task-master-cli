#!/usr/bin/env node

import {log} from 'console';
import meow from 'meow';
import path from 'path';
import {tasksController} from './app/controllers/tasksController.js';
import {debug} from './utils/debug.js';
import './utils/global.js';
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
		const [, title] = input;
		const {description, priority, due} = flags;
		console.log(input);
		log('flags|', flags);
		const spinner = ora('Creating task...\n').start();
		const task = {
			id: getId(),
			title,
			description,
			priority: priority || 'low',
			due: due || 'today 9pm',
			status: 'new'
		};
		tasksController.create(task);
		spinner.succeed(`Task created!`);
		console.table(await tasksController.readAll());
	}
	if (input.includes('done')) {
		console.log(input);
		const [, id] = input;
		const spinner = ora(`This ${id} task it´s done`).start();
		await tasksController.update(id, {status: 'done'});
		spinner.succeed(`Task ${id} it´s Done!`);
		console.table(await tasksController.readAll());
	}
	if (input.includes('list')) {
		console.log(input);
		console.table(await tasksController.readAll());
	}
	if (input.includes('show')) {
		const [, id] = input;
		console.log(input);
		console.table(await tasksController.read(id));
	}
	if (input.includes('remove')) {
		const spinner = ora('Removing Task...\n').start();
		console.log(input);
		const [, id] = input;
		console.table(await tasksController.delete(id));
		spinner.succeed(`Task removed!`);
	}
	//Debug info if nedeed.
	debug(flags.debug, input, flags);
})();
