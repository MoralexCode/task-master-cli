// 'use strict';
import boxen from 'boxen';
import chalk from 'chalk';
import alert from 'cli-alerts';
import enquirer from 'enquirer';
import {execa} from 'execa';
import ora from 'ora';
import path from 'path';
const {prompt, Confirm} = enquirer;
export const {green, cyan, yellow, dim, bold} = chalk;

function notFoundMessage(modelName) {
	return modelName.substring(0, modelName.length - 10).toUpperCase() + ' not found.';
}

function message(data, message) {
	return {
		data,
		message
	};
}
const dataValidation = (data, controllerName) => {
	if (data) {
		return data;
	} else {
		message(data, notFoundMessage(controllerName));
	}
};

const readMessage = (modelName, error) => {
	return (
		'An error has occurred to get  ' +
		modelName.substring(0, modelName.length - 10).toUpperCase() +
		' : ' +
		error
	);
};
const showError = (data, message) => {
	console.error(data, message);
};

function deleteMessage(modelName, error) {
	return (
		'An error has occurred to delete  ' +
		modelName.substring(0, modelName.length - 10).toUpperCase() +
		' : ' +
		error
	);
}
const deleteValidation = (data, controllerName) => {
	if (data && data > 0) {
		message('This was deleted successfully.');
	} else {
		deleteMessage(controllerName, 'Error : delete error.');
	}
};

global.green = green;
global.cyan = cyan;
global.yellow = yellow;
global.dim = dim;
global.bold = bold;
global.boxen = boxen;
global.ora = ora;
global.prompt = prompt;
global.Confirm = Confirm;
global.execa = execa;
global.path = path;
global.alert = alert;
global.dataValidation = dataValidation;
global.readMessage = readMessage;
global.showError = showError;
global.deleteValidation = deleteValidation;
