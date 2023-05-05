import axios from "axios";
import React, { useEffect, useReducer } from "react";
const initalState = {
  data: "",
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "FetchData":
      return (state.data = action.payload);

    default:
      return state;
  }
};
function Usereducer() {
  const [state, dispatch] = useReducer(reducer, initalState);
  console.log(state);

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((response) => {
      dispatch({ type: "FetchData", payload: response.data.results });
    });
  }, []);

  return <div></div>;
}

export default Usereducer;
