import { useReducer } from 'react';
import TodoContext from '../ToDo/ToDoContext';
import ToDoForm from '../ToDo/ToDoForm';
import todoReducer, { initialState } from '../ToDo/TodoReducer';
import ToDoView from '../ToDo/ToDoView';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <ToDoForm />
        <ToDoView />
      </TodoContext.Provider>

    </div>
  );
}

export default App;
