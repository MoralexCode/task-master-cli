// const Sequelize = require('sequelize');
// import {Sequelize} from 'sequelize';
import JsonRecords from 'json-records';
//  JsonRecords = require('json-records');
export const DB = {};
const jr = new JsonRecords('tasksmaster.json');
DB.create = async data => {
	return jr.add(data);
};

DB.findAll = async => {
	return jr.get();
};
DB.findOne = async id => {
	return jr.get(record => record.id === parseInt(id));
};
DB.delete = async id => {
	return jr.remove(record => record.id === parseInt(id));
};
DB.update = async (id, update) => {
	return jr.update(record => record.id === parseInt(id), update);
};

// DB.create = async (model, paylod) => {
// 	return await model.create(paylod).then(data => {
// 		return data;
// 	});
// };
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

DB.bulkCreate = async (model, paylod) => {
	return await model.bulkCreate(paylod).then(data => {
		return data;
	});
};
//Change the status, (logic deleted)

// module.exports = DB;⁄⁄777///7  77⁄
