import { useContext, useEffect } from 'react'
import TodoContext from './ToDoContext';
import { mockList } from './TodoReducer';

function ToDoView(): JSX.Element {
	const { state, dispatch } = useContext(TodoContext)

	useEffect(() => {
		dispatch({ type: "GET_TODOS", payload: mockList })
	}, [dispatch])

	const handlerEditTodo = (event: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch({ type: "EDIT_TODO", payload: { id: Number(event.target.id), task: event.target.name, isDone: event.target.checked } })
	}

	const handlerDeleteTodo = (id: number): void => {

		dispatch({ type: "DELETE_TODO", payload: id })
	}

	return (
		<section>
			<h1>Задачи:</h1>
			{state.list ? (
				state.list.map((todo) => (
					<div key={todo.id} style={todo.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{todo.task}
						<input type="checkbox" name={todo.task} id={todo.id.toString()}
							onChange={handlerEditTodo}
							defaultChecked={todo.isDone} />
						<button type='button' onClick={() => handlerDeleteTodo(todo.id)}>🗑️</button>
					</div>
				))
			) : (<h4>"Список пуст"</h4>)}
		</section>
	);
}

export default ToDoView;


