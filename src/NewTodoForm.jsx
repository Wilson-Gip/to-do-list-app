import { useState } from "react";

//make sure to call onSubmit to use the prop from another component
export function NewTodoForm( {onSubmit }) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        //prevents refreshing
        e.preventDefault()

        if(newItem === "") return
    
        onSubmit(newItem)
    
        setNewItem("");
    }

    return (
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
    )
}