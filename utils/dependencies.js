import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// import {spawn} from 'node:child_process';
import {spawn} from 'child_process';
// const sh = spawn('sh', ['init.sh']);
export const dependencies = async path => {
	await execa('cp', [`${__dirname}/../template/.github/personal-brand.png`, `${path}/.github/`]);

	process.chdir(path);
	// const spinner = ora(`Installing dependencies ...\n\n ${dim(`It may take moment...`)}`).start();
	// const dependencies = [
	// 	'sequelize',
	// 	'mysql2',
	// 	'boxen',
	// 	'winston',
	// 	'express',
	// 	'cookie-parser',
	// 	'cors',
	// 	'crypto',
	// 	'dotenv',
	// 	'jsonwebtoken',
	// 	'nodemailer'
	// ];
	// spinner.text = 'DEV Dependencies';
	// await execa('npm', [`install`]); //install dev dependencies
	// spinner.text = 'Project Dependencies';
	// await execa('npm', [`install`, ...dependencies]);
	// await execa('npx', [`licensed`, `MIT`]);
	/// sequelize-cli init
	// const globalDependencies = ['nodemon', 'sequelize-cli']; // thi dependencies going to install into docker container
	// await execa('npm', [`install \-g`, ...globalDependencies]);
	const spinner = ora(`Building container ...\n\n ${dim(`It may take moment...`)}`).start();
	spinner.color = 'yellow';
	spinner.text = 'creating Docker container';
	// await execa('sh', [`init.sh`]);
	// sh.stdout.on('data', data => {
	// 	console.log(`stdout: ${data}`);
	// });

	// sh.stderr.on('data', data => {
	// 	console.error(`stderr: ${data}`);
	// });

	// sh.on('close', code => {
	// 	console.log(`child process exited with code ${code}`);
	// });
	// var process = spawn('sh', ['init.sh']);
	// process.stdout.on('data', function (msg) {
	// 	console.log('Salida==>');
	// 	console.log(msg.toString());
	// });
	// const execu = exec('sh init.sh', function (err, stdout, stderr) {
	// 	console.log('SALIDA');
	// 	console.log(stdout);
	// });
	spinner.succeed(`Building finished.`);
};
