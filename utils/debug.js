import boxen from 'boxen';

const log = console.log;
export const debug = (isDebug, input, flags) => {
	if (!isDebug) return;

	alert({type: 'warning', msg: `DEBUGGING INFO`});

	log(
		boxen(` ${cyan(input)} `, {
			title: 'Input ⌨️',
			titleAlignment: 'center',
			borderStyle: 'double'
		})
	);
	log(
		boxen(` ${cyan(JSON.stringify(flags))} `, {
			title: 'Flags ⚐',
			titleAlignment: 'center',
			borderStyle: 'double'
		})
	);
};
