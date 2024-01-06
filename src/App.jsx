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
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed:
        false },
      ]
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
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}