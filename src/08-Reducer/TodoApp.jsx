/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar piedra del tiempo",
    done: false,
  },
];

const handleNewTodo = (todo) => {
  console.log({todo})
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState); //el reducer no se ejecuta es decur todoReducer() NO, solo se pasa la referecia
  return (
    <>
      <h1>
        Todo App: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
         <TodoList todos = {todos}/>
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd OnNewTodo={todo => handleNewTodo(todo)}/>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
