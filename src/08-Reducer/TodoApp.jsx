/* eslint-disable no-unused-vars */
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import useTodos from "./hooks/useTodos";

const TodoApp = () => {

  const { todos, handleNewTodo, handleDeleteTodo, handleToggleodo } =
    useTodos();

  return (
    <>
      <h1>
        Todo App: {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => handleToggleodo(id)}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd OnNewTodo={(todo) => handleNewTodo(todo)} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
