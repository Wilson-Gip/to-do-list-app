import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
        {/* use a map so that we don't have to hard code our list items */}
        {/* curly brackets is javascript code */}
        {/* maps need a key because it needs to know which specific item to modify */}
        {/* short circuiting */}
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
             //can also do this method instead of ...todo
                // id={todo.id} 
                // completed = {todo.completed} 
                // title = {todo.title} 
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

