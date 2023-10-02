import TodoItem from "./TodoItem"

/* eslint-disable react/prop-types */
const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onDeleteTodo={id => onDeleteTodo(id)} onToggleTodo={id => onToggleTodo(id)}/>
    ))}
  </ul>
  )
}

export default TodoList