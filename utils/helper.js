export const helperText = `
	${bold(`Usage`)}
		${green(`tasksmaster`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}

	${bold(`Options`)}
        
		${yellow(`--debug   Show debug information `)}
		${yellow(`-d , --description   Allow to add description to hte task`)}
		
	${bold(`Commands`)}
		${cyan(`help`)}   			Print CLI help information
		${cyan(`list`)}   			list tasks
		${cyan(`list <regex>`)}   		list tasks (only active tasks by default)
		${cyan(`add  <text>`)}   		add new task
		${cyan(`done <id> `)}   		mark task as completed, with optional note
		${cyan(`append <id> <text>`)}   	append text to task title
		${cyan(`edit <id> <text>`)}   	edit task
		${cyan(`del <id>`)}   		del task
		${cyan(`show <id>`)}   		show all task details 
		${cyan(`prio <id> <flag>`)}   	toggle priority flag
		${cyan(`due <id> [date]`)}   	set/unset due date (in YYYY-MM-DD format)
		${cyan(`note <id> <text>`)}   	add note to task
		${cyan(`delnote <id> [number]`)}	delete a specific or all notes from task

		** pre-defined  regex     
		:active, :done, :blocked, :waiting, :started, :new, :all, :priority, 
		:note, :today, :tomorrow, :next7days, :overdue, :due, :recent

		Due dates can be also added via tags in task title: "due:YYYY-MM-DD"
		In addition to formatted dates, you can use date synonyms:
		"due:today", "due:tomorrow", and day names e.g. "due:monday" or "due:tue"

		Legend: new [ ], done [x], started [>], blocked [!], waiting [@], priority *
		
	${bold(`Examples`)}
		${green(`taskmastercli`)} ${yellow(`add myTask`)}
		${green(`t`)} ${yellow(`aad  myTask`)}l`;

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
			default: false
			// alias: 'd'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		},
		list: {
			type: 'boolean',
			default: false,
			alias: 'l'
		},
		description: {
			type: 'boolean',
			default: false,
			alias: 'd'
		},
		due: {
			type: 'boolean',
			default: false,
			alias: 'due'
		}
	}
};
