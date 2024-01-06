//ES6 and object destructuring are important to know
import { useState } from "react";
import "./styles.css";

export default function App(){
  //useState for functionality 
  //state variables always rerenders the return
  //it runs whatever state the variables are in and it always rerenders when changes happen
  //useState whenever a change is going to happen such as onsubmit and input
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    //prevents refreshing
    e.preventDefault()

    //in order to modify existing data you need to pass a function and a variable in it
    //pass a function whenever you need to use current values otherwise just set it using states
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed:
        false },
      ]
    })

    setNewItem("");
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          {/* to link label and input use htmlfor for jsx while for is used in regular javascript*/}
          <label htmlFor="item">New Item</label>
          {/* pass the state value here when input happens to update item */}
          {/* use onchange and setnewvalue event listner */}
          <input 
            value={newItem} 
            onChange={e => 
            setNewItem(e.target.value)} 
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To-do List</h1>
      <ul className="list">
        {/* use a map so that we don't have to hard code our list items */}
        {/* curly brackets is javascript code */}
        {/* maps need a key because it needs to know which specific item to modify */}
        {/* short circuiting */}
        {todos.length === 0 && "Nothing Today!"}
        {todos.map(todo => {
          return  (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}
                onChange={e => toggleTodo(todo.id,e.target.checked)}/>
                {todo.title}
              </label>
              {/* call functions like this {() =>} */}
              <button onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}