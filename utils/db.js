import JsonRecords from 'json-records';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
export const DB = {};
const jr = new JsonRecords(`${__dirname}/../database/tasksmaster.json`);

DB.create = async data => {
	return jr.add(data);
};

DB.findAll = async => {
	const data = jr.get();
	const formattData = data.map(e => {
		const {id, title, priority, expire, type, status} = e;
		return {id, title, priority, expire, type, status};
	});
	return formattData;
};

DB.filter = async status => {
	const data = jr.get(record => record.status === status);
	const formattData = data.map(e => {
		// console.log(e);
		const {id, title, priority, expire, type, status} = e;
		return {id, title, priority, expire, type, status};
	});
	return formattData.sort((task1, task2) => {
		task1 = task1.priority.toLowerCase();
		task2 = task2.priority.toLowerCase();
		if (task1 < task2) {
			return -1;
		}
		if (task1 > task2) {
			return 1;
		}
		return 0;
	});
	// return jr.get(record => record.status === status);
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
