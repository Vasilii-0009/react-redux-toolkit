import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const isArrTodo = useSelector((state) => state.todos.todos);
  console.log("isArrTodo", isArrTodo);

  return (
    <ul>
      {isArrTodo.map((item) => {
        return <TodoItem {...item} key={item.id} />;
      })}
    </ul>
  );
}

export default TodoList;
