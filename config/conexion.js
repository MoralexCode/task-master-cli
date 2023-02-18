'use strict';
// const Sequelize = require('sequelize');
import path from 'path';
import {Sequelize} from 'sequelize';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const conexion = new Sequelize(DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
// 	host: ENV.DB_HOST,
// 	dialect: ENV.DB_DIALECT,
// 	port: ENV.DB_PORT,
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		acquire: 30000,
// 		idle: 10000
// 	}
// });

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
export const conexion = new Sequelize({
	dialect: 'sqlite',
	storage: `${__dirname}/../database/tasksmaster.sqlite`
});

try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}
// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });
// module.exports = conexion;
// module.exports = sequelize;
