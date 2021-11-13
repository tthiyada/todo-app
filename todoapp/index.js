import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [clicked, setIsClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function addTodo(value) {
    setTodos([...todos, { id: todos.length + 1, text: value ? value : todo }]);
    setTodo("");
  }

  function handleClick() {
    setIsClicked((prevValue) => !prevValue);
  }

  function removeTodo(id) {
    const newList = todos.filter((item) => item.id !== id);
    setTodos(newList);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter items"
        />
        <button onClick={() => addTodo()}>Add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <ul key={todo.id}>
            <li
              style={{ textDecoration: clicked ? "line-through" : "none" }}
              onClick={handleClick}
            >
              {todo.text}
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
