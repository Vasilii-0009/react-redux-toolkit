import { useState } from "react";
import "./App.css";
import InputField from "./InputField/InputField";
import TodoList from "./TodoList/TodoList";
import { useDispatch } from "react-redux";

import { addTodo } from "../store/todoSlice";

function App() {
  const [isTodo, setTodo] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ isTodo }));
    setTodo("");
  };

  return (
    <>
      <InputField isTodo={isTodo} setTodo={setTodo} addTodo={addTask} />
      <TodoList />
    </>
  );
}

export default App;
