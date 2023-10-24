import { render, screen } from "@testing-library/react";
import TodoItem from "./../../../08-Reducer/components/TodoItem";

describe("pruebas en el todo item component", () => {

  const todo = {
    id: 1,
    todo: "primer todo",
    done: false,
  };

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())
  test("debe de mostrar el todo pendiente de completar ", () => {

    render(<TodoItem todo = {todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);

    const liElement = screen.getByRole("listitem")
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('align-self-center')
    expect(spanElement.className).not.toContain('text-danger')

  });
});
