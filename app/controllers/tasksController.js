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
		// log(controllerName, Util.readMessage(controllerName, error));
		showError(error, readMessage(controllerName, error));
	}
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|FIND  tasks BY ID                                                          |
//|                                                                             |
//+-----------------------------------------------------------------------------+
// tasksController.read = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (Util.integerIDValidation(res, id, controllerName)) {
//       const data = await DB.findOne(tasksModel, id);
//       Util.dataValidation(res, data, controllerName);
//     }
//   } catch (error) {
//     log(controllerName, Util.readMessage(controllerName, error));
//     sendError(res, error, Util.readMessage(controllerName, error));
//   }
// };
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
		// log(controllerName, Util.readMessage(controllerName, error));
		showError(error, readMessage(controllerName, error));
	}
};
//+-----------------------------------------------------------------------------+
//|                                                                             |
//|                                                                             |
//|UPDATE   tasks  BY ID                                                       |
//|                                                                             |
//+-----------------------------------------------------------------------------+
// tasksController.update = async (req, res) => {
// 	const {id} = req.params;
// 	const paylod = req.body;
// 	try {
// 		const data = await DB.update(tasksModel, paylod, id);
// 		Util.updateValidation(res, data, controllerName);
// 	} catch (error) {
// 		log(controllerName, Util.readMessage(controllerName, error));
// 		sendError(res, error, Util.readMessage(controllerName, error));
// 	}
// };
// //+-----------------------------------------------------------------------------+
// //|                                                                             |
// //|                                                                             |
// //|DELETE   tasks  BY ID                                                      |
// //|                                                                             |
// //+-----------------------------------------------------------------------------+
tasksController.delete = async id => {
	try {
		// return await DB.delete(id);
		const data = await DB.delete(id);
		deleteValidation(data, controllerName);
	} catch (error) {
		// log(controllerName, Util.readMessage(controllerName, error));
		showError(error, readMessage(controllerName, error));
	}
};
// module.exports = tasksController;
