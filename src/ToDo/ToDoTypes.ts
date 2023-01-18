export type TodoId = ListItem['id'];

export type ListItem = {
	id: number,
	task: string,
	isDone: boolean
}

export type ToDoState = {
	list: ListItem[]
}

export type ToDoAction =
	| { type: "GET_TODOS", payload: ListItem[] }
	| { type: "ADD_TODO", payload: ListItem }
	| { type: "DELETE_TODO", payload: TodoId }
	| { type: "EDIT_TODO", payload: ListItem }