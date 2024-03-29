import {DB} from '../../utils/db.js';
const controllerName = 'tasksController';

export const tasksController = {};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|CREATE NEW tasks                                                                |
//|                                                                             |
//+-----------------------------------------------------------------------------+
tasksController.create = async task => {
	try {
		const data = await DB.create(task);
		dataValidation(data, controllerName);
	} catch (error) {
		showError(error, readMessage(controllerName, error));
	}
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|FIND  tasks BY ID                                                          |
//|                                                                             |
//+-----------------------------------------------------------------------------+
tasksController.read = async id => {
	try {
		return await DB.findOne(id);
	} catch (error) {
		showError(error, readMessage(controllerName, error));
	}
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|GET LIST OF tasks CUSTOM QUERY                                            |
//|                                                                             |
//+-----------------------------------------------------------------------------+
tasksController.readAll = async () => {
	try {
		return await DB.findAll();
	} catch (error) {
		showError(error, readMessage(controllerName, error));
	}
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|GET LIST OF tasks CUSTOM QUERY                                            |
//|                                                                             |
//+-----------------------------------------------------------------------------+
tasksController.filter = async status => {
	try {
		return await DB.filter(status || 'new');
	} catch (error) {
		showError(error, readMessage(controllerName, error));
	}
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|UPDATE   tasks  BY ID                                                       |
//|                                                                             |
//+-----------------------------------------------------------------------------+
tasksController.update = async (id, update) => {
	try {
		const [found] = await tasksController.read(id);
		if (found) {
			const {title, description, priority, expire, type, status} = update;

			const taskUpdated = {
				...found,
				title: title || found.title,
				description: description || found.description,
				priority: priority || found.priority,
				expire: expire || found.expire,
				type: type || found.type,
				status: status || found.status
			};
			const data = await DB.update(id, taskUpdated);
			return updateValidation(data, controllerName);
		}
		throw Error('Empty');
	} catch (error) {
		showError(error, readMessage(controllerName, error));
	}
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|DELETE   tasks  BY ID                                                      |
//|                                                                             |
//+-----------------------------------------------------------------------------+
tasksController.delete = async id => {
	try {
		const data = await DB.delete(id);
		return deleteValidation(data, controllerName);
	} catch (error) {
		showError(error, readMessage(controllerName, error));
	}
};
