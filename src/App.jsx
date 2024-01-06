//ES6 and object destructuring are important to know
// all components follow same layout where hooks on top, code to parse data or helper functions, and then return jsx
import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App(){
  //useState for functionality 
  //state variables always rerenders the return
  //it runs whatever state the variables are in and it always rerenders when changes happen
  //useState whenever a change is going to happen such as onsubmit and input
  //in the useState params a default value or function can be passed
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    //todo list stays on refresh using this usestate
    return JSON.parse(localValue)
  })

  //useEffect doesnt return anything
  //everytime an object such as todos change useEffect will run this code
  //updates and stores todo list in local storage
  //hooks cant have conditionals or wrapped in anything
  //always on top by itself
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    //in order to modify existing data you need to pass a function and a variable in it
    //pass a function whenever you need to use current values otherwise just set it using states
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed:
        false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed }
        }

        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      {/* props on jsx components let you pass functions */}
      {/* make sure name matches when passing props aka the onsubmit part */}
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">To-do List</h1>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </>
  )
}