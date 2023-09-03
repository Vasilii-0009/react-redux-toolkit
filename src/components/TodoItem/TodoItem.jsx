import React from "react";
import { useDispatch } from "react-redux";
import { handelDeletTodo } from "../../store/todoSlice";
import { handelToggleTodod } from "../../store/todoSlice";

function TodoItem({ id, isTodo, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(handelToggleTodod({ id }));
        }}
      />
      <span>{text}</span>
      <button
        onClick={() => {
          dispatch(handelDeletTodo({ id }));
        }}
        type="button"
        style={{ color: "red" }}
      >
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
