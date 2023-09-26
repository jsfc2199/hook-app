import TodoItem from "./TodoItem"

/* eslint-disable react/prop-types */
const TodoList = ({todos = [], onDeleteTodo}) => {
  return (
    <ul className="list-group">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onDeleteTodo={id => onDeleteTodo(id)}/>
    ))}
  </ul>
  )
}

export default TodoList