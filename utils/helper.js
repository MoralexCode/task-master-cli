export const helperText = `
	${bold(`Usage`)}
		${green(`npx genesiscli`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}

	${bold(`Options`)}
        
		${yellow(`-a , --name      	Name of new project`)}
		${yellow(`-r , --repo      	URL to repocitory`)}
		${yellow(`-m , --model     	List of models to create`)}
		${yellow(`--ad          Show ad information`)}
		${yellow(`-d, --debug   Show debug information `)}
		${yellow(`-p, --posts    Show last 10 blog  POST `)}
		${yellow(`-m, --minimal Show minimal information `)} ${dim(`DEFAULT : false`)}
		${yellow(`-c, --clear   Clear the console information `)}
		${yellow(`--no-clear   Don´t clear the console information `)} ${dim(`DEFAULT : true`)}
		
		* start <tasknumber> [text]      mark task as started, with optional note
		* block <tasknumber> [text]      mark task as blocked, with optional note
		* wait <tasknumber> [text]       mark task as waiting, with optional note
		* reset <tasknumber> [text]      reset task to new state, with optional note
		* prio <tasknumber> [text]       toggle high priority flag, with optional note
		* due <tasknumber> [date]        set/unset due date (in YYYY-MM-DD format)
		
		* append <tasknumber> <text>     append text to task title
		* rename <tasknumber> <text>     rename task
		* del <tasknumber>               delete task
		* note <tasknumber> <text>       add note to task
		* delnote <tasknumber> [number]  delete a specific or all notes from task
		
		* list <regex> [regex...]        list tasks (only active tasks by default)
		* show <tasknumber>              show all task details
		* cleanup <regex> [regex...]     cleanup completed tasks by regex
		* help                           this help screen
		
		With list command the following pre-defined queries can be also used:
		:active, :done, :blocked, :waiting, :started, :new, :all, :priority, 
		:note, :today, :tomorrow, :next7days, :overdue, :due, :recent

		Due dates can be also added via tags in task title: "due:YYYY-MM-DD"
		In addition to formatted dates, you can use date synonyms:
		"due:today", "due:tomorrow", and day names e.g. "due:monday" or "due:tue"

		Legend: new [ ], done [x], started [>], blocked [!], waiting [@], priority *

		Local storage: todo.jsonl
	${bold(`Commands`)}
		${cyan(`help`)}   				Print CLI help information
		${cyan(`add  <text>`)}   		add new task
		${cyan(`done <id> `)}   		mark task as completed, with optional note


		
	${bold(`Examples`)}
		${green(`npx genesiscli`)} ${yellow(`--no-social`)}
		${green(`npx genesiscli`)} ${yellow(`--no-ad`)}l`;
export const options = {
	importMeta: import.meta,
	booleanDefault: undefined,
	flags: {
		social: {
			type: 'boolean',
			default: true
		},
		ad: {
			type: 'boolean',
			default: true
		},
		email: {
			type: 'boolean',
			default: true
		},
		debug: {
			type: 'boolean',
			default: false,
			alias: 'd'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		}
	}
};
