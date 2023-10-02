import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../todoReducer";

// obtenemos del local storage lo que haya para cargarlo al useReducer
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []; //si es nulo el localStorage devolvemos un array vacio
};

const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init); //el reducer no se ejecuta es decur todoReducer() NO, solo se pasa la referecia

  //use effect para que cuando cambien los todos los almacenamos en el local storage
  useEffect(() => {
    //guardamos unicamente strings en el local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action); //hacemos el dispatch de la accion para que la maneje el reducer
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] delete Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleodo = (id) => {
    const action = {
      type: "[TODO] toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleodo
  }
};

export default useTodos;
