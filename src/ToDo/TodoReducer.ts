import { ToDoAction, ToDoState } from "./ToDoTypes";

export const mockList = [{
	id: 1,
	task: "learn JS",
	isDone: false
}, {
	id: 2,
	task: "learn React",
	isDone: false
}, {
	id: 3,
	task: "learn React-redux",
	isDone: false
}, {
	id: 4,
	task: "learn React-toolkit",
	isDone: false
}]


export const initialState: ToDoState = {
	list: []
}

const todoReducer = (state: ToDoState, action: ToDoAction): ToDoState => {
	switch (action.type) {
		case "GET_TODOS":
			return {
				...state,
				list: action.payload
			};

		case "ADD_TODO":
			return {
				...state,
				list: [...state.list, action.payload]
			};

		case "EDIT_TODO":
			return {
				...state,
				list: state.list.map((item) => item.id === action.payload.id ? action.payload : item)
			};

		case "DELETE_TODO":
			return {
				...state,
				list: state.list.filter((item) => item.id !== action.payload && item)
			};

		default:
			return state;
	}
}

export default todoReducer;