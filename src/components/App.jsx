import React from "react";

function App() {
  const [useText, setUseText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleText() {
    setItems((prev) => [...prev, useText]);
    setUseText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={(event) => setUseText(event.target.value)}
          value={useText}
          type="text"
        />
        <button onClick={handleText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
