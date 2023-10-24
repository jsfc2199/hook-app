import { render, screen } from "@testing-library/react";
import TodoApp from "../../08-Reducer/TodoApp";
import useTodos from "../../08-Reducer/hooks/useTodos";

/* eslint-disable no-undef */

jest.mock("../../08-Reducer/hooks/useTodos");
describe("Pruebas en al todo app", () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: "primer todo", done: false },
      { id: 2, description: "segundo todo", done: true },
    ],
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleodo: jest.fn(),
  });
  test("debe de mostrar el componente correctamente ", () => {
    render(<TodoApp />);
    screen.debug()

    expect(screen.getByText('primer todo')).toBeTruthy()
    expect(screen.getByText('segundo todo')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  });
});
