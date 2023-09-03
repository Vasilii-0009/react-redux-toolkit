import React from "react";

function InputField({ isTodo, setTodo, addTodo }) {
  return (
    <label>
      <input
        value={isTodo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
      <button onClick={addTodo} type="button">
        Add Todo
      </button>
    </label>
  );
}

export default InputField;
