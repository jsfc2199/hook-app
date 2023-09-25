/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

const initialState = [];

// obtenemos del local storage lo que haya para cargarlo al useReducer
const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || []  //si es nulo el localStorage devolvemos un array vacio
}

const TodoApp = () => {
  //usamos la tercera funcion del useReducer para mantener el state del localStorage y asi no se pierda la info
  const [todos, dispatch] = useReducer(todoReducer, initialState, init); //el reducer no se ejecuta es decur todoReducer() NO, solo se pasa la referecia

  //use effect para que cuando cambien los todos los almacenamos en el local storage
  useEffect(() => {
    //guardamos unicamente strings en el local storage
    localStorage.setItem('todos', JSON.stringify(todos))


  }, [todos])

  const handleNewTodo = (todo) => {  
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action) //hacemos el dispatch de la accion para que la maneje el reducer
  }


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
