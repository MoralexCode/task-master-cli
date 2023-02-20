// const Sequelize = require('sequelize');
// import {Sequelize} from 'sequelize';
import JsonRecords from 'json-records';
//  JsonRecords = require('json-records');
export const DB = {};
const jr = new JsonRecords('tasksmaster.json');
DB.create = async data => {
	// const {
	// 	title,
	// 	description,
	// 	priority,
	// 	project_id,
	// 	reminder_id
	// } = data;
	return jr.add(data);
};

DB.findAll = async => {
	return jr.get();
};
DB.delete = async id => {
	return jr.remove(record => record === id);
};
// DB.create = async (model, paylod) => {
// 	return await model.create(paylod).then(data => {
// 		return data;
// 	});
// };
DB.findOne = async (model, id) => {
	return model.findOne({where: {id, enable: 1}}).then(data => {
		return data;
	});
};

DB.findOneCustomQuery = async (model, query) => {
	return await collectorModel.sequelize
		.query(query, {type: Sequelize.QueryTypes.SELECT})
		.then(data => {
			return data[0];
		});
};
DB.findAllCustomQuery = async (model, query) => {
	return await model.sequelize
		.query(query, {
			type: Sequelize.QueryTypes.SELECT,
			attributes: {exclude: ['createdAt', 'updatedAt']}
		})
		.then(data => {
			return data;
		});
};

DB.update = async (model, paylod, id) => {
	return await model.update(paylod, {where: {id}}).then(([rowAffected, rowsUpdate, data]) => {
		return rowAffected;
	});
};

DB.bulkCreate = async (model, paylod) => {
	return await model.bulkCreate(paylod).then(data => {
		return data;
	});
};
//Change the status, (logic deleted)

// module.exports = DB;⁄⁄777///7  77⁄
