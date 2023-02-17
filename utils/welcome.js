import clearConsole from 'clear-any-console';

export const welcome = () => {
	clearConsole();

	console.log(
		boxen(`🔥  ${cyan(`Manage Tasks Like a Boss`)} 😎`, {
			tagLine: 'by MoralexCode',
			title: 'Task Master',
			titleAlignment: 'center',
			borderStyle: 'double'
		})
	);
};
