/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolecatr prieda del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolecatr prieda del alma",
  },
];
const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState); //el reducer no se ejecuta es decur todoReducer() NO, solo se pasa la referecia
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <ul>
        <li>itrem 1</li>
        <li>itrem 2</li>
        <li>itrem 3</li>
      </ul>
    </>
  );
};

export default TodoApp;
