import { useContext, useState } from 'react';
import TodoContext from './ToDoContext';

function ToDoForm() {
	const { dispatch } = useContext(TodoContext)

	const [task, setTask] = useState('')

	const handleAddTask = (): void => {
		dispatch({ type: "ADD_TODO", payload: { id: (new Date()).getTime(), task: task, isDone: false } })
		setTask('')
	}
	return (
		<>
			<input type="text" name="task" onChange={(event) => setTask(event.target.value)} value={task} />
			<button type='button' onClick={handleAddTask}>Add</button>
		</>
	);
}

export default ToDoForm
