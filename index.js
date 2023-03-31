#!/usr/bin/env node

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
	const {description, type, priority, expire, status, update} = flags;

	// console.log(flags);
	if (input.includes('add')) {
		const [, title] = input;
		console.log(input);
		const spinner = ora('Creating task...\n').start();
		const task = {
			id: getId(),
			title,
			description,
			priority: priority || 'low',
			expire: expire || 'today 9pm',
			type: type || 'Personal',
			status: 'new'
		};
		tasksController.create(task);
		spinner.succeed(`Task created!`);
		console.table(await tasksController.filter());
	}
	if (input.includes('done')) {
		console.log(input);
		const [, id] = input;
		const spinner = ora(`This ${id} task it´s done`).start();
		await tasksController.update(id, {status: 'done'});
		spinner.succeed(`Task ${id} it´s Done!`);
		console.table(await tasksController.filter());
	}
	if (input.includes('list')) {
		console.log(input);
		const data =
			status === 'all'
				? await tasksController.readAll()
				: await tasksController.filter(status);
		console.table(data);
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
		await tasksController.delete(id);
		console.table(await tasksController.filter());
		spinner.succeed(`Task removed!`);
	}
	if (update) {
		const spinner = ora('Updating Task...\n').start();
		console.log(input);
		console.log(flags);
		const [id, title] = input;
		const [task] = await tasksController.read(id);
		console.log('task|', task);
		if (task) {
			const taskUpdated = {
				...task,
				title: title || task.title,
				description: description || task.description,
				priority: priority || task.priority,
				expire: expire || task.expire,
				type: type || task.type,
				status: status || task.status
			};
			console.log('taskUpdated|', taskUpdated);
			await tasksController.update(id, taskUpdated);
			console.table(await tasksController.filter());
			spinner.succeed(`Task updated!`);
		} else {
			spinner.info(`Task not updated!`);
		}
	}
	//Debug info if nedeed.
	debug(flags.debug, input, flags);
})();
