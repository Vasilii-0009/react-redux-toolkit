import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.isTodo,
        completed: false,
      });
    },
    handelDeletTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    handelToggleTodod(state, action) {
      state.todos = state.todos.map((item) => {
        if (item.id !== action.payload.id) return item;
        item.completed = !item.completed;
        return item;
      });
    },
  },
});

export const { addTodo, handelDeletTodo, handelToggleTodod } =
  todoSlice.actions;

export default todoSlice.reducer;
