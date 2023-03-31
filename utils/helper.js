export const helperText = `
	${bold(`Usage`)}
		${green(`tasksmaster`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}

	${bold(`Options`)}
        
		${yellow(`--debug   Show debug information `)}
		${yellow(`-d , --description   Allow to add description to hte task`)}
		${yellow(`-p , --priority   Allow to add description to hte task`)}
		${yellow(`-a , --all   List all task`)}
		${yellow(`-e , --expired   task expire `)}
		
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
		${green(`t`)} ${yellow(`add  myTask`)}
		${green(`t`)} ${yellow(`list`)} # Just list task with 'new' status (default)
		${green(`t`)} ${yellow(`list -s done`)} # Just list task with 'done' status
		${green(`t`)} ${yellow(`list -s all`)} # List  all task
		${green(`t`)} ${yellow(
	`-u 47 -p one -d 'new_description' -t 'Work' -s new -e tomorrow`
)} # Update  a task
		`;

export const options = {
	importMeta: import.meta,
	booleanDefault: undefined,
	flags: {
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
			type: 'string',
			default: '',
			alias: 'd'
		},
		expire: {
			type: 'string',
			alias: 'e'
		},
		priority: {
			type: 'string',
			alias: 'p'
		},
		all: {
			type: 'boolean',
			default: false,
			alias: 'a'
		},
		status: {
			type: 'string',
			default: 'new',
			alias: 's'
		},
		update: {
			type: 'boolean',
			default: false,
			alias: 'u'
		},
		type: {
			type: 'string',
			alias: 't'
		}
	}
};
