import React, { createContext } from "react";
import { initialState } from "./TodoReducer";

import { ToDoAction, ToDoState } from "./ToDoTypes"

interface Context {
	state: ToDoState,
	dispatch: React.Dispatch<ToDoAction>
}

export const initContext: Context = {
	state: initialState,
	dispatch: () => { }
}
const TodoContext = createContext(initContext)

export default TodoContext