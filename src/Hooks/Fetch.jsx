import React from "react";
import { useFetch } from "./useFetch";
function Fetch() {
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);
  return <div>{data.products.title}</div>;
}

export default Fetch;
