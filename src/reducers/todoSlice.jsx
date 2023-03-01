import { createSlice } from "@reduxjs/toolkit";

let ls = JSON.parse(localStorage.getItem("todoList"));

const initialState = {
  input: "",
  editmodal: false,
  temp: ls ? ls : [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const todoItems = action.payload;
      state.temp.push(todoItems);
      localStorage.setItem("todoList", JSON.stringify(state.temp));
    },
    modalOpenHandler(state) {
      state.editmodal = true;
    },
    modalCloseHandler(state) {
      state.editmodal = false;
    },
    editTodo(state, action) {
      state.temp.splice(action.payload.index, 1, action.payload.newValue);
      localStorage.setItem("todoList", JSON.stringify(state.temp));
    },
    deleteTodo(state, action) {
      state.temp.splice(action.payload, 1);
      localStorage.setItem("todoList", JSON.stringify(state.temp));
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
