import "./styles.css";

export default function App(){
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          {/* to link label and input use htmlfor for jsx while for is used in regular javascript*/}
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
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
      </ul>
    </>
  )
}