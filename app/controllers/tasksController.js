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
		// await mail.sendMail('oscarmorales.920702@gmail.com');
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
//|UPDATE   tasks  BY ID                                                       |
//|                                                                             |
//+-----------------------------------------------------------------------------+
tasksController.update = async (id, update) => {
	try {
		const [found] = await tasksController.read(id);
		if (found) {
			const {title, description, priority, due, status} = update;

			const taskUpdated = {
				...found,
				title: title || found.title,
				description: description || found.description,
				priority: priority || found.priority,
				due: due || found.due,
				status: status || found.status
			};
			const data = await DB.update(id, taskUpdated);
			return updateValidation(data, controllerName);
		}
		throw Error('Empty');
	} catch (error) {
		// log(controllerName, Util.readMessage(controllerName, error));
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
		// return await DB.delete(id);
		const data = await DB.delete(id);
		return deleteValidation(data, controllerName);
	} catch (error) {
		// log(controllerName, Util.readMessage(controllerName, error));
		showError(error, readMessage(controllerName, error));
	}
};
// module.exports = tasksController;
