/* eslint-disable no-undef */
import { todoReducer } from "./../../08-Reducer/todoReducer";
describe("Pruebas en use Reducer", () => {
  const initialState = [
    {
      id: 1,
      todo: "primer todo",
      done: false,
    },
  ];
  test("debe regresar el estado inicial ", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        todo: "segundo todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "[TODO] delete Todo",
      payload: 1
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
    
  });

  test("debe de cambiar el estado del done", () => {
    const action = {
      type: "[TODO] toggle Todo",
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true)

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false)
    
  });
});
