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
    done: false,
  },
];
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
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">itrem 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <form action="">
            <input
              type="text"
              placeholder="que hay para hacer?"
              className="formControl"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
