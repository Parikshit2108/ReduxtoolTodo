import axios from "axios";

export let addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};
export const fetchData = (url) => {
  return { payload: url, type: "fetchApi" };
};

export let deleteTodo = (idx) => {
  console.log("delete idx", idx);
  return {
    type: "DELETE_TODO",
    payload: idx,
  };
};

export let removeAllTodos = () => {
  return {
    type: "REMOVE_ALL_TODOS",
  };
};

export let fetchApi = () => {
  return async (dispatch) => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(setUsers(res.data));
  };
};

export let setUsers = (data) => {
  if (data) {
    return {
      type: "SET_USER",
      payload: data,
    };
  } else {
    return {
      type: "SET_USER",
      payload: [],
    };
  }
};
