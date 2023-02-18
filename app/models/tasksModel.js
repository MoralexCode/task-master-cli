// // const Sequelize = require('sequelize');
// import {DataTypes, Sequelize} from 'sequelize';
// // const conexion = require('../../config/conexion');
// // import {conexion} from '../../config/conexion.js';
// const sequelize = new Sequelize('sqlite::memory:');
// export const tasksModel = sequelize.define('task_master_tasks', {
// 	id: {
// 		primaryKey: true,
// 		type: DataTypes.INTEGER,
// 		autoIncrement: true
// 	},
// 	title: DataTypes.STRING,
// 	description: DataTypes.STRING,
// 	when: {
// 		type: DataTypes.DATE,
// 		validate: {
// 			isDate: true
// 		}
// 	},
// 	priority: DataTypes.INTEGER,
// 	project_id: {
// 		//DEFAULT INBOX
// 		type: DataTypes.INTEGER,
// 		defaultValue: 1
// 	},
// 	reminder_id: {
// 		//DEFAULT REMINDER
// 		type: DataTypes.INTEGER,
// 		defaultValue: 1
// 	},
// 	status: {
// 		//status of the procces or activity
// 		type: DataTypes.INTEGER,
// 		defaultValue: 1
// 	},
// 	enable: {
// 		//true if the object is active, this field is has a false value when te user is deleted
// 		type: DataTypes.INTEGER,
// 		defaultValue: 1
// 	},
// 	createdAt: {
// 		type: DataTypes.DATE,
// 		defaultValue: DataTypes.NOW
// 	},
// 	updatedAt: {
// 		type: DataTypes.DATE,
// 		defaultValue: DataTypes.NOW
// 	}
// });
